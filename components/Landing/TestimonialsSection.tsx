export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Founder, TechStart",
      content:
        "HappyYC helped me refine my pitch and connect with my first investor. The community feedback was invaluable!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Maria Garcia",
      role: "CEO, GreenSolutions",
      content:
        "The platform's collaborative environment helped me find my co-founder. We're now scaling our startup globally.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Chen",
      role: "Product Lead, InnovateX",
      content:
        "As an investor, I've discovered several promising startups through HappyYC that are now part of my portfolio.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-30-bold mb-4 text-black dark:text-white">
          Success Stories
        </h2>
        <p className="text-16-medium max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Hear from entrepreneurs who turned their ideas into reality
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border-[5px] border-black dark:border-gray-600 p-6 rounded-[22px] shadow-200 dark:shadow-200-dark"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary ring ring-primary flex items-center justify-center text-white font-bold mr-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-16-medium text-black dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
