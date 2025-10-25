import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export function isDarkMode(): boolean {
  if (typeof window === "undefined") return false;

  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return storedTheme === "dark" || (!storedTheme && systemPrefersDark);
}

export function toggleTheme(): void {
  if (typeof window === "undefined") return;

  const isDark = document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
}
