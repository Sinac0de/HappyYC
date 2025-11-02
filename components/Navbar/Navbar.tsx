import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { DesktopNav } from "./DesktopNav";
import { MobileSidebar } from "./MobileSidebar";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { UserProfilePopover } from "../UserProfilePopover";
import { PlusCircle } from "lucide-react";

async function Navbar() {
  const session = await auth();

  // Server actions for authentication
  async function handleSignIn() {
    "use server";
    await signIn("github");
  }

  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <nav>
        <div className="flex gap-2 justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* logo */}
          <div className="flex items-center justify-between h-16 gap-6">
            <div className="flex items-center">
              <Link href={"/"} className="flex-shrink-0">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Happy<span className="text-primary">YC</span>
                </h2>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <DesktopNav />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <MobileSidebar
              user={{ id: session?.id, ...session?.user }}
              session={session}
              onSignIn={handleSignIn}
              onSignOut={handleSignOut}
            />
          </div>

          {/* Desktop User info */}
          <div className="hidden md:flex relative items-center justify-between gap-2 h-16">
            {/* Create Startup Button */}
            <Link
              href={"/create"}
              className="flex items-center justify-center gap-2 px-4 py-1 border-2 border-primary text-black dark:text-white rounded-full hover:bg-primary-100 transition-all"
            >
              <PlusCircle className="h-5 w-5" />
              Create
            </Link>
            {!session ? (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button
                  type="submit"
                  className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Signin with GitHub{" "}
                  <FaGithub className="text-black dark:text-white" />
                </button>
              </form>
            ) : (
              <UserProfilePopover
                user={{ id: session.id, ...session.user }}
                signOutAction={handleSignOut}
              />
            )}
            {/* theme toggler */}
            <AnimatedThemeToggler className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
