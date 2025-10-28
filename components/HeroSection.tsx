import SearchForm from "@/components/SearchForm";

export default function HeroSection({ query }: { query?: string }) {
  return (
    <section className="primary-container">
      <p className="tag">Pitch, vote, and grow</p>
      <h1 className="heading">
        Pitch Your Startup, <br />
        Connect With Entrepreneurs
      </h1>

      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>

      <SearchForm query={query} />
    </section>
  );
}
