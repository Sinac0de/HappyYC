import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token || undefined, // Only use token if available
  // Enable stega only in development
  stega:
    process.env.NODE_ENV === "development"
      ? {
          enabled: true,
          studioUrl: "/studio", // Add the required studioUrl property
        }
      : undefined,
});

if (!writeClient.config().token) {
  throw new Error("Missing write token");
}
