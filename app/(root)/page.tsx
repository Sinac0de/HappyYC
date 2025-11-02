import CtaSection from "@/components/Landing/CtaSection";
import FaqSection from "@/components/Landing/FaqSection";
import FeaturedStartups from "@/components/Landing/FeaturedStartups";
import HeroSection from "@/components/Landing/HeroSection";
import HowItWorksSection from "@/components/Landing/HowItWorksSection";
import TestimonialsSection from "@/components/Landing/TestimonialsSection";
import { SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <HeroSection query={query} />

      <FeaturedStartups />

      <HowItWorksSection />

      <TestimonialsSection />
      <CtaSection />

      <FaqSection />
      <SanityLive />
    </>
  );
}
