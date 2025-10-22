import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { STARTUP_BY_ID } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

async function StartupDetail({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const data = await client.fetch(STARTUP_BY_ID, { id });
  if (!data) return notFound();

  return <div>StartupDetail: id {data.title}</div>;
}

export default StartupDetail;
