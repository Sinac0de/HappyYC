import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About HappyYC</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="mb-6">
            HappyYC is a platform designed to empower entrepreneurs to pitch, connect, and grow their startups with a global community of innovators and investors.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe in the power of innovation and the potential of startups to change the world. Our mission is to provide a platform where entrepreneurs can showcase their ideas, connect with like-minded individuals, and gain access to resources that will help them succeed.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>A platform to showcase your startup to a global audience</li>
            <li>Networking opportunities with investors and fellow entrepreneurs</li>
            <li>Resources and tools to help grow your business</li>
            <li>Community support and mentorship</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Join Our Community</h2>
          <p>
            Whether you&apos;re a founder looking to pitch your idea, an investor seeking the next big opportunity, or simply someone passionate about innovation, HappyYC welcomes you. Join us in building the future of entrepreneurship.
          </p>
        </div>
      </div>
    </div>
  );
}