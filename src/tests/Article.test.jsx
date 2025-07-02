import { render, screen } from '../test-utils/testing-library-utils';
import Article from '../components/Article';
import { expect } from 'vitest';

const { findByText, findByAltText, findByRole } = screen;

test('Article details are rendered correctly from the api call', async () => {
  render(<Article />, {
    route: '/articles/123',
    path: '/articles/:article_id',
    withRoutes: true,
  });

  const title = await findByRole('heading', {
    name: 'The Notorious MSG’s Unlikely Formula For Success',
  });

  const author = await findByText(
    'Posted by: grumpy19 on 22 November 2020 at 11:13'
  );
  const image = await findByAltText('article image');
  const articleBody = await findByText(/The 'umami' craze/i);
  const comments = await findByText('Comments: 13');
  const votes = await findByText('Votes: 26');
  const addCommentSection = await findByRole('form', {
    name: /add comment/i,
  });

  //validate component displays properly
  expect(title).toBeVisible();
  expect(author).toBeVisible();
  expect(image).toBeVisible();
  expect(image).toHaveAttribute(
    'src',
    'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700'
  );
  expect(articleBody).toBeVisible;
  expect(comments).toBeVisible;
  expect(votes).toBeVisible;
  expect(addCommentSection).toBeVisible;
});
