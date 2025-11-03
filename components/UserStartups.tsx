import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard from "@/components/StartupCard";
import { STARTUPS_BY_AUTHOR_QUERYResult } from "@/sanity/types";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: STARTUPS_BY_AUTHOR_QUERYResult[number]) => (
          <StartupCard key={startup._id} post={{ ...startup, _type: "startup" } as any} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserStartups;