'use client';
import { useFormik } from 'formik';
import { string, boolean, object } from 'yup';

const createPostSchema = object().shape({
  title: string().required(),
  content: string().required(),
  published: boolean().required().default(false),
  imageUrl: string(),
});

export const Page = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      published: false,
      imageUrl: '',
    },
    validationSchema: createPostSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return <div>Page</div>;
};

export default Page;
