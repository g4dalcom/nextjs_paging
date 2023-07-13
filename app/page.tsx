'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-12">
      <h1 className="font-bold text-3xl text-center">
        Welcome To My practice space
      </h1>
      <div className="flex gap-4">
        <Link href="/pagination">
          <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded-full">
            Pagination
          </button>
        </Link>
        <Link href="/infinite">
          <button className="bg-purple-500 text-white hover:bg-purple-400 font-bol py-2 px-4 rounded-full">
            Infinite Scroll
          </button>
        </Link>
      </div>
    </main>
  );
}
