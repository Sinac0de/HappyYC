import { client } from "@/sanity/lib/client";
import { PLAYLIST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import StartupCard from "../StartupCard";
import Link from "next/link";

async function FeaturedStartups() {
  const playlist = await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
    slug: "featured-startups",
  });

  const featuredPosts = playlist?.select || [];

  return (
    <>
      {featuredPosts?.length > 0 && (
        <div className="max-w-7xl mx-auto mt-10">
          <div className="flex justify-between items-center">
            <p className="text-30-semibold">Featured Startups</p>
            <Link
              href="/startups"
              className="text-primary hover:text-primary-700"
            >
              View All
            </Link>
          </div>

          <ul className="mt-7 card_grid">
            {featuredPosts.map((post: any, i: number) => (
              <StartupCard key={i} post={post} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default FeaturedStartups;
