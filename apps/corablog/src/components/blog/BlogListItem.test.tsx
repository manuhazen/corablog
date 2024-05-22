import '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import BlogListItem from './BlogListItem';
import { Post } from '@prisma/client';

describe('BlogListItem', () => {
  const mockPost: Post = {
    id: '1',
    title: 'Test Title',
    content: 'Test Content',
    imageUrl: 'https://test.com/image.jpg',
    published: true,
  };

  it('renders without crashing', () => {
    render(<BlogListItem blog={mockPost} />);
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Content')).toBeTruthy();
  });

  it('displays the correct blog title', () => {
    render(<BlogListItem blog={mockPost} />);
    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  it('displays the correct blog content', () => {
    render(<BlogListItem blog={mockPost} />);
    expect(screen.getByText('Test Content')).toBeTruthy();
  });
});
