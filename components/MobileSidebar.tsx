"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { User as AuthUser } from "@auth/core/types";
import { Home, Menu, PlusCircle, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function MobileSidebar({
  user,
  onSignIn,
  onSignOut,
  session,
}: {
  user: AuthUser | null;
  session: any;
  onSignIn?: () => void;
  onSignOut?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateBlog = () => {
    // Navigate to create blog page
    router.push("/studio");
    setIsOpen(false);
  };

  const navItems = [{ name: "Home", href: "/", icon: Home }];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-2/3 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-black dark:text-white">
              Happy<span className="text-primary">YC</span>
            </h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* User Profile Section */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            {user ? (
              <Link
                href={`/user/${session?.id}`}
                onClick={toggleSidebar}
                className="flex gap-1 justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 text-left p-1 rounded-md"
              >
                <div className="relative">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt="User profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 flex items-center justify-center">
                      <User className="text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {user.name || "Anonymous User"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user.email || "No email provided"}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 flex items-center justify-center">
                  <User className="text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Guest User
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Not signed in
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={toggleSidebar}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            {/* Create Blog Button */}
            <button
              onClick={handleCreateBlog}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 mb-4"
            >
              <PlusCircle className="h-5 w-5" />
              Create Blog
            </button>

            {/* Theme Toggle */}
            <AnimatedThemeToggler
              title="Dark Mode"
              className="w-full flex justify-between p-2 rounded-md bg-gray-100  dark:bg-gray-800"
            />

            {/* User Actions */}
            {user ? (
              <form action={onSignOut} className="w-full">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 mt-2"
                >
                  <User className="h-5 w-5" />
                  Sign Out
                </button>
              </form>
            ) : (
              <form action={onSignIn} className="w-full">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 mt-2"
                >
                  <User className="h-5 w-5" />
                  Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
