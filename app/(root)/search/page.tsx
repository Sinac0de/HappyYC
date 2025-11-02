import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import SearchForm from "@/components/SearchAndSort/SearchForm";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:underline mb-6 transition-colors"
          >
            ← Back to Home
          </Link>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl dark:from-slate-800 dark:to-slate-900 p-6 mb-8 border border-gray-100 dark:border-slate-700 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-slate-300 mb-4">
              {query ? `Search results for "${query}"` : "All Startups"}
            </h1>

            {/* Search form on search results page */}
            <div className="max-w-2xl mt-6">
              <SearchForm query={query} />
            </div>

            <p className="text-gray-600 dark:text-slate-300 mt-4">
              Found {posts?.length || 0}{" "}
              {posts?.length === 1 ? "result" : "results"}
            </p>
          </div>
        </div>

        {posts?.length > 0 ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600 dark:text-slate-300">
                Showing results {posts.length > 0 ? "1" : "0"} to {posts.length}{" "}
                of {posts.length}
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))}
            </ul>
          </>
        ) : (
          <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl dark:from-slate-800 dark:to-slate-900  border border-gray-100 dark:border-slate-700 shadow-sm p-6">
            <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-slate-300 mb-3">
              No startups found
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
              We couldn't find any startups matching "{query}". Try different
              keywords or browse all startups.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/startups"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Browse All Startups
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-slate-300 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
