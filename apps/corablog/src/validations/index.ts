import { string, boolean, object } from 'yup';

export const createPostSchema = object().shape({
  title: string().required(),
  content: string().required(),
  published: boolean().required().default(true),
  imageUrl: string().matches(
    /^https:\/\/images.unsplash.com\//,
    'Image should be from Unsplash, example: https://images.unsplash.com/photo-1234.jpg'
  ),
});
