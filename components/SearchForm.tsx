import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
function SearchForm({ query }: { query: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="search"
        placeholder="Search..."
        defaultValue={query}
        name="query"
        className="search-input"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;
