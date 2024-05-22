'use client';
import { useFormik } from 'formik';
import { createPostSchema } from 'apps/corablog/src/validations';
import { useGetPost } from 'apps/corablog/src/hooks';
import PostForm from 'apps/corablog/src/components/blog/PostForm';
import { updatePost } from 'apps/corablog/src/requests';
import { useRouter } from 'next/navigation';
import { PostInput } from 'apps/corablog/src/types/Post';
import LoadingPulse from 'apps/corablog/src/components/common/LoadingPulse';

export const Page = ({ params: { id } }: { params: { id: string } }) => {
  const { data: post, isLoading } = useGetPost(id);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: post?.title || '',
      content: post?.content || '',
      published: !!post?.published,
      imageUrl: post?.imageUrl || '',
    },
    validationSchema: createPostSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true,
  });

  const onSubmit = async (values: PostInput) => {
    await updatePost(id, {
      ...values,
      imageUrl: values.imageUrl || '',
      published: values.published || false,
    });
    router.push('/blog');
  };

  if (isLoading) {
    return <LoadingPulse />;
  }

  return <PostForm formik={formik} />;
};

export default Page;
