/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY_WITH_SORT } from "@/sanity/lib/queries";
import StartupCard, {
  StartupCardSkeleton,
  StartupTypeCard,
} from "@/components/StartupCard";
import SearchForm from "@/components/SearchAndSort/SearchForm";
import MinimalSearchForm from "@/components/SearchAndSort/MinimalSearchForm";
import { SortSelect } from "@/components/SearchAndSort/SortSelect";
import { STARTUPS_QUERYResult } from "@/sanity/types";
import { Suspense } from "react";

export const metadata = {
  title: "Startups | HappyYC",
  description: "Browse startups submitted to HappyYC",
};

export default async function StartupsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string }>;
}) {
  const params = await searchParams;
  const query = params.query;
  const sort = params.sort || "_createdAt desc";

  const startupsQuery = STARTUPS_QUERY_WITH_SORT(sort);
  const startups = await client.fetch(startupsQuery, {
    search: query || null,
  });

  // Transform the query result to match StartupTypeCard
  const transformedStartups =
    startups?.map((post: STARTUPS_QUERYResult[number]) => {
      // Handle the union type by checking for specific properties
      const basePost = {
        _id: (post as any)._id || "",
        title: (post as any).title || null,
        slug: (post as any).slug || null,
        _createdAt: (post as any)._createdAt || "",
        _updatedAt: (post as any)._updatedAt || (post as any)._createdAt || "",
        _rev:
          (post as any)._rev ||
          ("_id" in post ? `rev-${(post as any)._id}` : "rev-unknown"),
        author: (post as any).author || null,
        views: (post as any).views || null,
        description: (post as any).description || null,
        category: (post as any).category || null,
        image: (post as any).image || null,
        pitch: (post as any).pitch || null,
      };

      return basePost as StartupTypeCard;
    }) || [];

  return (
    <>
      <section className="primary-container !min-h-[230px]">
        <h1 className="heading">Startups</h1>
        <p className="sub-heading !max-w-5xl">
          Discover innovative startups from our community
        </p>
      </section>

      <section className="section_container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-30-bold">Browse Startups</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
            <div className="w-full md:w-60">
              <Suspense fallback={<SearchFormSkeleton />}>
                <MinimalSearchForm query={query} />
              </Suspense>
            </div>
            <div className="w-full md:w-48">
              <SortSelect initialSort={sort} />
            </div>
          </div>
        </div>

        <ul className="card_grid mt-12">
          {transformedStartups?.length > 0 ? (
            transformedStartups.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <li className="col-span-3">
              <p className="no-result">No startups found</p>
            </li>
          )}
        </ul>
      </section>
    </>
  );
}

function SearchFormSkeleton() {
  return (
    <div className="minimal-search-form">
      <div className="w-full h-6 bg-gray-200 rounded-full animate-pulse"></div>
      <div className="minimal-search-btn">
        <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export function StartupsPageSkeleton() {
  return (
    <>
      <section className="primary-container !min-h-[230px]">
        <h1 className="heading">Startups</h1>
        <p className="sub-heading !max-w-5xl">
          Discover innovative startups from our community
        </p>
      </section>

      <section className="section_container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-30-bold">Browse Startups</h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="w-full md:w-60">
              <SearchFormSkeleton />
            </div>
            <div className="w-full md:w-48">
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>

        <ul className="card_grid mt-12">
          <StartupCardSkeleton />
        </ul>
      </section>
    </>
  );
}
