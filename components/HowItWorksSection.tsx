export default function HowItWorksSection() {
  const steps = [
    {
      title: "Create Your Pitch",
      description:
        "Sign up and craft a compelling pitch for your startup idea in minutes.",
      icon: "✍️",
    },
    {
      title: "Share & Vote",
      description:
        "Share your pitch with the community and vote on other innovative ideas.",
      icon: "📢",
    },
    {
      title: "Get Feedback",
      description:
        "Receive valuable feedback from experienced entrepreneurs and potential users.",
      icon: "💬",
    },
    {
      title: "Grow & Connect",
      description:
        "Connect with collaborators, mentors, and investors to bring your idea to life.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-30-bold mb-4 text-black dark:text-white">
            How It Works
          </h2>
          <p className="text-16-medium max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white dark:bg-gray-800 border-[5px] border-black dark:border-gray-600 rounded-[22px] p-6 h-full transition-all duration-300 hover:shadow-300 dark:hover:shadow-300-dark hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-20-medium text-black dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
