import { API_URL } from '../../constants';
import { Post } from '../../../types/Post';
import { getPostById } from '../../../requests';
import Image from 'next/image';

export async function generateStaticParams() {
  const request = await fetch(`${API_URL}/blog`);

  const posts = await request.json();

  return posts.map((post: Post) => ({
    params: {
      id: post.id,
    },
  }));
}

export const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getPostById(params.id);
  return (
    <div>
      <h1>{post.title}</h1>
      <Image
        width={1000}
        height={1000}
        src={post.imageUrl ?? ''}
        alt={post.title}
      />
      <p>{post.content}</p>
    </div>
  );
};

export default Page;
