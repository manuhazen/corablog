'use client';
import { useState } from 'react';
import { useGetAllPosts, useGetPageCount } from '../../hooks';
import BlogListItem from '../../components/blog/BlogListItem';
import Link from 'next/link';

const Page = () => {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);

  const { data: pageLimit } = useGetPageCount(itemsPerPage);

  const { data: posts } = useGetAllPosts(page, itemsPerPage);

  const prevButtonDisabled = page === 1;
  const nextButtonDisabled = page === Number(pageLimit);
  const disabledClasses = 'cursor-not-allowed opacity-50 hover:bg-blue-500';

  return (
    <>
      <div className="fixed top-4 right-4 z-10">
        <Link
          href="/blog/create"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Create a new post
        </Link>
      </div>
      <div className="bg-gray-50">
        <div className="relative  px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              CoraBlog
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              One read at a time
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts?.map((post) => (
              <BlogListItem key={post.id} blog={post} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4 pb-4">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              prevButtonDisabled ? disabledClasses : ''
            }`}
            onClick={() => setPage(page - 1)}
            disabled={prevButtonDisabled}
          >
            Previous
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              nextButtonDisabled ? disabledClasses : ''
            }`}
            onClick={() => setPage(page + 1)}
            disabled={nextButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
