import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { MobileSidebar } from "./MobileSidebar";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import Link from "next/link";

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
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href={"/"} className="flex-shrink-0">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Happy<span className="text-primary">YC</span>
                </h2>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <MobileSidebar
              user={session?.user ?? null}
              onSignIn={handleSignIn}
              onSignOut={handleSignOut}
            />
          </div>

          {/* Desktop User info */}
          <div className="hidden md:flex relative items-center justify-between gap-2 h-16">
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
              <div className="flex gap-2 justify-center items-center">
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                  className="flex items-center"
                >
                  <button
                    type="submit"
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <PiSignOut
                      size={25}
                      className="text-black dark:text-white"
                    />
                  </button>
                </form>

                <div>
                  <h3 className="text-base font-semibold text-black dark:text-white">
                    {session.user?.name}
                  </h3>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">
                    {session.user?.email}
                  </h4>
                </div>

                {/* user image */}
                <div className="flex rounded-full">
                  <Image
                    height={40}
                    width={40}
                    src={session.user?.image || ""}
                    className="rounded-full"
                    alt="user's github profile pic"
                  />
                </div>
              </div>
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
