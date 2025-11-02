"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SearchFormReset = ({ isMinimal = false }: { isMinimal?: boolean }) => {
  const pathname = usePathname();
  const [resetUrl, setResetUrl] = useState('#');
  
  // Build reset URL preserving sort parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.delete('query');
      
      const queryString = params.toString();
      setResetUrl(`${pathname}${queryString ? `?${queryString}` : ''}`);
    }
  }, [pathname]);

  return (
    <Link 
      href={resetUrl} 
      className={isMinimal ? "minimal-search-btn text-white" : "search-btn text-white"}
    >
      <X className={isMinimal ? "size-4" : "size-5"} />
    </Link>
  );
};

export default SearchFormReset;