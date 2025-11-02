"use client";

import * as Sentry from "@sentry/nextjs";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
          <div className="text-center space-y-6 p-8">
            <h1 className="text-6xl font-bold text-foreground">Oops!</h1>
            <h2 className="text-2xl font-semibold text-foreground">
              Something went wrong
            </h2>
            <p className="text-muted-foreground">
              We are sorry, but something unexpected happened. Our team has been
              notified.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="/">Go Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/startups">View Startups</Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
