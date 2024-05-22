'use client';
import PostForm from 'apps/corablog/src/components/blog/PostForm';
import { createPost } from 'apps/corablog/src/requests';
import { PostInput } from 'apps/corablog/src/types/Post';
import { createPostSchema } from 'apps/corablog/src/validations';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

export const Page = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      published: true,
      imageUrl: '',
    },
    validationSchema: createPostSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const onSubmit = async (values: PostInput) => {
    await createPost(values);
    router.push('/blog');
  };

  return <PostForm formik={formik} />;
};

export default Page;
