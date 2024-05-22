import { getPostById } from '../../../requests';
import Image from 'next/image';
import Link from 'next/link';

async function getPost(id: string) {
  const post = await getPostById(id);
  return post;
}

export const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPost(id);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-10">
        <Link
          href={`/blog/${id}/edit`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Edit this post
        </Link>
      </div>
      <div className="w-full h-full bg-white dark:bg-gray-800">
        <div className="w-full mx-auto py-10 bg-white dark:bg-gray-800">
          <div className="w-[89%] mx-auto flex gap-1 items-center text-gray-500 sm:text-[18px] xs:text-[12px] font-semibold dark:text-gray-400">
            <div>
              <Link href="/blog">Back to Blog</Link>
            </div>
          </div>
          <h1 className="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 dark:text-white">
            {post.title}
          </h1>
          <div className="xl:w-[80%] xs:w-[96%] sm:w-[94%] mx-auto xs:px-6 sm:px-2 md:px-4 lg:h-[560px] md:h-[480px] rounded-lg relative overflow-hidden text-center flex justify-center">
            <Image
              className="rounded-lg"
              width={900}
              height={900}
              src={post.imageUrl ?? ''}
              alt={post.title}
            />
          </div>

          <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
            {post.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
