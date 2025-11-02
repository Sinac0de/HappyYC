"use client";

import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function MinimalSearchForm({ query }: { query?: string }) {
  const [searchQuery, setSearchQuery] = useState(query || "");
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  // Update local state when query prop changes
  useEffect(() => {
    setSearchQuery(query || "");
  }, [query]);

  // Handle search input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Update URL without page reload
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      if (value.trim()) {
        params.set("query", value.trim());
      } else {
        params.delete("query");
      }

      // Preserve sort parameter if it exists
      const sortParam = params.get("sort");

      // Build the new URL
      const newParams = new URLSearchParams();
      if (value.trim()) {
        newParams.set("query", value.trim());
      }
      if (sortParam) {
        newParams.set("sort", sortParam);
      }

      const queryString = newParams.toString();
      const newUrl = `${pathname}${queryString ? `?${queryString}` : ""}`;

      router.push(newUrl, { scroll: false });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Keep focus on the input after submit
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="minimal-search-form">
      <input
        ref={inputRef}
        type="search"
        placeholder="Search startups..."
        value={searchQuery}
        onChange={handleInputChange}
        name="query"
        className="minimal-search-input"
      />

      <div className="flex gap-1">
        <button type="submit" className="minimal-search-btn text-white">
          <Search className="size-4" />
        </button>
      </div>
    </form>
  );
}

export default MinimalSearchForm;
