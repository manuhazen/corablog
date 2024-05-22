'use client';

import Link from 'next/link';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export default function Index() {
  return (
    <StyledPage>
      <div className="max-w-5xl mx-auto mt-12 px-4 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mt-2 mb-6">
            I prepare this hometest for the position of Fullstack Developer at
            Encora
          </h1>
          <p className="px-4 leading-relaxed">
            This is a simple web application for a simple blog.
            <br />
            It&apos;s a fullstack application built with Nest.js, Prisma, and
            SQLite. On the frontend, it uses Tailwind CSS and Styled Components
            in a Next.js app. Simple enough to showcase my skills, but complex
            enough to show I know what I&apos;m doing.
          </p>
          <div>
            <Link
              className="inline-block mt-4 py-4 px-8 leading-none text-white bg-slate-800 hover:bg-pink-600 rounded shadow text-sm font-bold"
              href="/blog"
            >
              Go checkout the Blog
            </Link>
            <p className="text-xs text-gray-600 mt-2">
              (We have seeded the database with some posts)
            </p>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}
