"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" passHref>
                <span className="text-xl font-bold text-gray-800 cursor-pointer">AI Interview</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" passHref>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Home</span>
              </Link>
              <Link href="/about" passHref>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">About</span>
              </Link>
              <Link href="/contact" passHref>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</span>
              </Link>
              <Link href="/register" passHref>
                <span className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to AI Interview Platform</h1>
          <p className="text-lg text-gray-600 mb-8">Your journey to mastering AI starts here. Join us to get access to top-notch AI interview preparation resources.</p>
          <div className="space-x-4">
            <Link href="/register" passHref>
              <span className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 cursor-pointer">Register</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
