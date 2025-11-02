import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current) && ( !defined($search) || $search == "" || title match "*" + $search + "*" || category match "*" + $search + "*" || author->name match "*" + $search + "*" )] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  _updatedAt,
  _rev,
  author ->{
      _id, name, image, bio
  },
  views,
  description,
  category,
  image,
  pitch
}`
);

export const STARTUPS_QUERY_WITH_SORT = (sortOrder: string) => {
  // Map friendly sort names to Sanity sort parameters
  const sortMap: Record<string, string> = {
    "title asc": "title asc",
    "title desc": "title desc",
    "views desc": "views desc",
    "views asc": "views asc",
    "_createdAt desc": "_createdAt desc",
    "_createdAt asc": "_createdAt asc",
  };

  const sortParam = sortMap[sortOrder] || "_createdAt desc";

  return defineQuery(
    `*[_type == "startup" && defined(slug.current) && ( !defined($search) || $search == "" || title match "*" + $search + "*" || category match "*" + $search + "*" || author->name match "*" + $search + "*" )] | order(${sortParam}){
    _id,
    title,
    slug,
    _createdAt,
    _updatedAt,
    _rev,
    author ->{
        _id, name, image, bio
    },
    views,
    description,
    category,
    image,
    pitch
  }`
  );
};

export const STARTUP_BY_ID = defineQuery(
  `*[_type == "startup" && _id == $id][0]{
  _id,
  title,
  slug,
  _createdAt,
  author ->{
      _id, name, username, image, bio
  },
  views,
  description,
  category,
  image,
  pitch
}`
);

export const STARTUP_VIEWS_QUERY = defineQuery(`
    *[_type == "startup" && _id == $id][0]{
        _id, views
    }
`);

export const STARTUPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
*[_type == "author" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
*[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
