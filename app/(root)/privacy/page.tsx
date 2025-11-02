import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg dark:prose-invert">
          <p className="mb-6">
            <strong>Effective Date:</strong> November 2, 2025
          </p>

          <p className="mb-6">
            At HappyYC, we respect your privacy and are committed to protecting
            your personal data. This privacy policy will inform you about how we
            look after your personal data when you visit our website and tell
            you about your privacy rights.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            1. Important Information and Who We Are
          </h2>
          <p className="mb-4">
            HappyYC is the controller of your personal data collected through
            our website. We are committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information by which
            you can be identified when using this website, you can be assured
            that it will only be used in accordance with this privacy statement.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            2. The Data We Collect
          </h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Identity Data</strong> including first name, last name,
              username or similar identifier
            </li>
            <li>
              <strong>Contact Data</strong> including billing address, delivery
              address, email address and telephone numbers
            </li>
            <li>
              <strong>Technical Data</strong> including internet protocol (IP)
              address, browser type and version, time zone setting and location,
              browser plug-in types and versions, operating system and platform
            </li>
            <li>
              <strong>Usage Data</strong> including information about how you
              use our website, products and services
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            3. How We Use Your Data
          </h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Where we need to perform the contract we are about to enter or
              have entered with you
            </li>
            <li>
              Where it is necessary for our legitimate interests and your
              interests and fundamental rights do not override those interests
            </li>
            <li>
              Where we need to comply with a legal or regulatory obligation
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            4. Data Security
          </h2>
          <p className="mb-6">
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorized way, altered or disclosed.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            5. Your Legal Rights
          </h2>
          <p className="mb-4">
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at sinacodes@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
