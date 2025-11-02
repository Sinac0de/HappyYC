"use client";

import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function SearchForm({ query }: { query?: string }) {
  const [searchQuery, setSearchQuery] = useState(query || "");
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get current URL parameters
    const params = new URLSearchParams(window.location.search);

    if (searchQuery.trim()) {
      params.set("query", searchQuery.trim());
    } else {
      params.delete("query");
    }

    // Preserve sort parameter if it exists
    const sortParam = params.get("sort");

    // Build the new URL
    const newParams = new URLSearchParams();
    if (searchQuery.trim()) {
      newParams.set("query", searchQuery.trim());
    }
    if (sortParam) {
      newParams.set("sort", sortParam);
    }

    const queryString = newParams.toString();
    const newUrl = `${pathname}${queryString ? `?${queryString}` : ""}`;

    router.push(newUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        name="query"
        className="search-input"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
