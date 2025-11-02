"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SortSelect({ initialSort }: { initialSort: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to build URL with new sort parameter
  const buildSortUrl = (sortValue: string) => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      if (sortValue === "_createdAt desc") {
        params.delete("sort");
      } else {
        params.set("sort", sortValue);
      }

      const queryString = params.toString();
      return `${pathname}${queryString ? `?${queryString}` : ""}`;
    }
    return pathname;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUrl = buildSortUrl(e.target.value);
    router.push(newUrl);
  };

  // Don't render on server to avoid hydration issues
  if (!isClient) {
    return (
      <div className="w-full">
        <label htmlFor="sort-select" className="sr-only">
          Sort by
        </label>
        <select
          id="sort-select"
          defaultValue={initialSort}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="title asc">Name (A-Z)</option>
          <option value="title desc">Name (Z-A)</option>
          <option value="_createdAt desc">Newest</option>
          <option value="_createdAt asc">Oldest</option>
          <option value="views desc">Most Views</option>
          <option value="views asc">Least Views</option>
        </select>
      </div>
    );
  }

  return (
    <div className="w-full">
      <label htmlFor="sort-select" className="sr-only">
        Sort by
      </label>
      <select
        id="sort-select"
        defaultValue={initialSort}
        onChange={handleChange}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <option value="title asc">Name (A-Z)</option>
        <option value="title desc">Name (Z-A)</option>
        <option value="_createdAt desc">Newest</option>
        <option value="_createdAt asc">Oldest</option>
        <option value="views desc">Most Views</option>
        <option value="views asc">Least Views</option>
      </select>
    </div>
  );
}
