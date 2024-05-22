import { FormikProps } from 'formik';
import Link from 'next/link';
import React from 'react';

interface FormValues {
  title: string;
  imageUrl: string;
  content: string;
  published: boolean;
  id?: string | undefined;
}

interface PostFormProps {
  formik: FormikProps<FormValues>;
}
const PostForm = ({ formik }: PostFormProps) => {
  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
      <h2 className="text-2xl font-medium mb-4">Survey</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
          {formik.errors.title && (
            <div className="text-red-500 text-sm my-2 capitalize">
              {formik.errors.title}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Cover Image
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={formik.handleChange}
            value={formik.values.imageUrl}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
          {formik.errors.imageUrl && (
            <div className="text-red-500 text-sm my-2 capitalize">
              {formik.errors.imageUrl}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            onChange={formik.handleChange}
            value={formik.values.content}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows={5}
          ></textarea>
          {formik.errors.content && (
            <div className="text-red-500 text-sm my-2 capitalize">
              {formik.errors.content}
            </div>
          )}
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/3">
              <label className="block text-gray-700 font-medium mb-2">
                <input
                  onChange={formik.handleChange}
                  checked={formik.values.published}
                  type="checkbox"
                  id="published"
                  name="published"
                  className="mr-2"
                />
                Published
              </label>
            </div>
          </div>
        </div>
        <div>
          <Link href="/blog" className="text-blue-500 mr-3 hover:underline">
            Back to blog
          </Link>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
