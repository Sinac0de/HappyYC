import { SearchFormSkeleton } from "./SearchAndSort/SearchForm";
import { StartupCardSkeleton } from "./StartupCard";

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