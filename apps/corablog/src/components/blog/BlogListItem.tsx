import { Post } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogListItemProps {
  blog: Post;
}

const BlogListItem = ({ blog }: BlogListItemProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={blog.imageUrl ?? ''}
          alt={blog.title}
          width={900}
          height={500}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={'#'} className="hover:underline">
              Article
            </a>
          </p>
          <Link href={`/blog/${blog.id}`} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
            <p className="mt-3 text-base text-gray-500">
              {blog.content.slice(0, 100)}...
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;
