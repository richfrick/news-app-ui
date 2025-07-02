import {
  logRoles,
  render,
  renderWithProviders,
  screen,
} from '../test-utils/testing-library-utils';
import Article from '../components/Article';
import { expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('Article details are returned correctly', async () => {
  renderWithProviders(<Article />, {
    route: '/articles/123',
    path: '/articles/:article_id',
    withRoutes: true,
  });

  const articleHeader = await screen.findByText(
    'The Notorious MSG’s Unlikely Formula For Success'
  );
  const author = await screen.findByText(
    'Posted by: grumpy19 on 22 November 2020 at 11:13'
  );
  const image = screen.getByAltText('article image');

  //validate component displays properly
  expect(articleHeader).toBeVisible();
  expect(author).toBeVisible();
  expect(image).toBeVisible();
});
