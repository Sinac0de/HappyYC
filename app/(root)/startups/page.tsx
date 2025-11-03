/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY_WITH_SORT } from "@/sanity/lib/queries";
import StartupCard from "@/components/StartupCard";
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

  const transformedStartups = startups || [];

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
            transformedStartups.map((post: STARTUPS_QUERYResult[number]) => (
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
