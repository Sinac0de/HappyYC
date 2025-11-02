import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg dark:prose-invert">
          <p className="mb-6">
            <strong>Effective Date:</strong> November 2, 2025
          </p>

          <p className="mb-6">
            Welcome to HappyYC. These terms of service outline the rules and
            regulations for the use of HappyYC&apos;s website and services.
          </p>

          <p className="mb-6">
            By accessing this website, we assume you accept these terms of
            service in full. Do not continue to use HappyYC&apos;s website if
            you do not accept all of the terms of service stated on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            1. License to Use Website
          </h2>
          <p className="mb-6">
            Unless otherwise stated, HappyYC and/or its licensors own the
            intellectual property rights in the website and material on the
            website. Subject to the license below, all these intellectual
            property rights are reserved.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            2. User Responsibilities
          </h2>
          <p className="mb-4">As a user of HappyYC, you agree not to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Publish or transmit any content that is unlawful, harmful,
              threatening, abusive, harassing, tortious, defamatory, vulgar,
              obscene, libelous, invasive of another&apos;s privacy, hateful, or
              racially, ethnically or otherwise objectionable
            </li>
            <li>
              Impersonate any person or entity, including HappyYC or any
              official, guide or host
            </li>
            <li>
              Forge headers or otherwise manipulate identifiers in order to
              disguise the origin of any content transmitted through the service
            </li>
            <li>
              Upload, post, transmit or otherwise make available any content
              that you do not have a right to make available under any law or
              under contractual or fiduciary relationships
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. User Content</h2>
          <p className="mb-6">
            You retain all rights in, and are solely responsible for, the User
            Content you post to HappyYC. You grant HappyYC a license to display,
            perform, and distribute your User Content on HappyYC for the purpose
            of making such User Content available to other users.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="mb-6">
            HappyYC shall not be liable to you in relation to the contents of,
            or use of, or otherwise in connection with, this website:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>for any indirect, special or consequential loss; or</li>
            <li>
              for any business losses, loss of revenue, income, profits or
              anticipated savings, loss of contracts or business relationships,
              loss of reputation or goodwill, or loss or corruption of
              information or data.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            5. Changes to These Terms
          </h2>
          <p className="mb-6">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days&apos; notice prior to any new terms taking effect.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            sinacodes@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
