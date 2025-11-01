"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiSignOut } from "react-icons/pi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function UserProfilePopover({
  user,
  signOutAction,
}: {
  user: any;
  signOutAction: () => Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  const handleProfileClick = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex rounded-full aspect-square focus:outline-none focus:ring-2 focus:ring-primary">
          <Image
            height={40}
            width={40}
            src={user?.image || ""}
            className="rounded-full cursor-pointer"
            alt="user's github profile pic"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-56 p-2 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        align="end"
      >
        <div className="flex flex-col gap-1">
          <Link
            href={`/user/${user?.id}`}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium"
            onClick={handleProfileClick}
          >
            <div className="flex rounded-full aspect-square">
              <Image
                height={32}
                width={32}
                src={user?.image || ""}
                className="rounded-full"
                alt="user's github profile pic"
              />
            </div>
            <div>
              <p className="text-black dark:text-white">{user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-left"
              onClick={handleLogoutClick}
            >
              <PiSignOut className="text-black dark:text-white" />
              <span className="text-black dark:text-white">Logout</span>
            </button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
