export default function CtaSection() {
  return (
    <section className="py-20 px-6 bg-primary dark:bg-primary/80">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-30-bold text-white mb-4">Ready to Launch Your Startup?</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of entrepreneurs who are turning their ideas into successful businesses
        </p>
        <a 
          href="/create" 
          className="bg-black text-white font-bold px-8 py-4 rounded-full border-4 border-white dark:border-gray-300 shadow-300 dark:shadow-300-dark hover:shadow-none transition-all duration-300 inline-block"
        >
          Create Your Pitch Now
        </a>
      </div>
    </section>
  );
}