import { client } from "@/sanity/lib/client";
import { PLAYLIST_BY_SLUG_QUERY, STARTUP_BY_ID } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Suspense } from "react";
import View from "@/components/View";
import { Skeleton } from "@/components/ui/skeleton";
import StartupCard from "@/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;

async function StartupDetail({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const [post, playlist] = await Promise.all([
    client.fetch(STARTUP_BY_ID, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-picks",
    }),
  ]);

  if (!post) return notFound();

  const editorPosts = playlist?.select || [];

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="primary-container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>

        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <img
          src={post.image || ""}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author?.image || ""}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">
                  {post.author?.name || "Unknown Author"}
                </p>
                <p className="text-16-medium !text-black-300">
                  @{post.author?.username || "unknown"}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-strong:text-white dark:prose-code:text-gray-300"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <hr className="divider" />

        {editorPosts?.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-30-semibold">Editor Picks</p>
              <Link
                href="/startups"
                className="text-primary hover:text-primary-700"
              >
                View All
              </Link>
            </div>

            <ul className="mt-7 card_grid">
              {editorPosts.map((post: any, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
}

export default StartupDetail;
