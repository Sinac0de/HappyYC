import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ShinyText from "./ShinyText";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: "Create a Pitch", href: "/create" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "FAQ", href: "/#faq" },
    ],
    company: [
      { name: "Startups", href: "/startups" },
      { name: "About", href: "/about" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/Sinac0de", icon: FaGithub },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sina-moradian-198836223/",
        icon: FaLinkedin,
      },
      { name: "Email", href: "mailto:sinacodes@gmail.com", icon: FaEnvelope },
    ],
  };

  return (
    <footer className="border-t-2 border-gray-800 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">
                Happy<span className="text-primary">YC</span>
              </h2>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering entrepreneurs to pitch, connect, and grow their
              startups with a global community of innovators and investors.
            </p>
            <div className="flex space-x-4 mt-6">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} HappyYC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <a
            href="https://github.com/Sinac0de"
            className="mx-auto"
            target="_blank"
          >
            <ShinyText text={"Made with ♥ by Sina Moradian"} speed={5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
