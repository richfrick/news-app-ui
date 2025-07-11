import { render, screen } from '../test-utils/testing-library-utils';
import ArticleCard from '../components/ArticleCard';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import ArticlesList from '../components/ArticlesList';
import Article from '../components/Article';
import ArticleByTopic from '../components/ArticleByTopic';

const { findByRole, findAllByRole } = screen;

describe('Article List Componenet', () => {
  test('article card is created for each article in the response', async () => {
    render(<ArticlesList />);

    const articleCards = await findAllByRole('listitem');

    expect(articleCards.length).toBe(2);
  });

  test('error response from api call displays the error component', async () => {
    render(<ArticlesList />, {
      route: '/articles?sort_by=fooBar',
      path: '/articles',
      withRoutes: true,
    });

    const errorMessage = await findByRole('alert');

    expect(errorMessage).toBeVisible();
  });

  test.todo('loading gif displays when api call is delayed');
});
