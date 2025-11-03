import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Startup } from "@/sanity/types";
import { STARTUPS_QUERYResult } from "@/sanity/types";
import { PLAYLIST_BY_SLUG_QUERYResult } from "@/sanity/types";
import { Skeleton } from "@/components/ui/skeleton";

// Create a union type that can handle all the different query result types
type StartupCardType =
  | STARTUPS_QUERYResult[number]
  | (NonNullable<PLAYLIST_BY_SLUG_QUERYResult>["select"] extends Array<infer T> ? T : never)
  | Startup;

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  // Handle the case where author might be a reference object
  const authorId = typeof author === 'object' && author !== null && '_id' in author ? author._id : '';
  const authorName = typeof author === 'object' && author !== null && 'name' in author ? author.name : '';
  const authorImage = typeof author === 'object' && author !== null && 'image' in author ? author.image : '';

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={authorImage || ""}
            alt={authorName || ""}
            width={48}
            height={48}
            className="rounded-full object-cover aspect-square object-top"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <Image
          src={image || ""}
          alt="placeholder"
          width={300}
          height={200}
          className="startup-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard;
