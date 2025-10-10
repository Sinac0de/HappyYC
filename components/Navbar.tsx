import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

import { PiSignOut } from "react-icons/pi";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { FaGithub } from "react-icons/fa";

async function Navbar() {
  const session = await auth();

  return (
    <header>
      <nav>
        <div className="flex gap-2 justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* logo */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h2 className="text-2xl font-bold">HappyYC</h2>
              </div>
            </div>
          </div>

          {/* User info */}
          <div className="relative flex items-center justify-between gap-2 h-16">
            {!session ? (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="flex gap-2 items-center">
                  Signin with GitHub <FaGithub />
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
                  <button type="submit">
                    <PiSignOut size={25} />
                  </button>
                </form>

                <div>
                  <h3 className="text-base font-semibold">
                    {session.user?.name}
                  </h3>
                  <h4 className="text-sm text-gray-500">
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
            <AnimatedThemeToggler />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
