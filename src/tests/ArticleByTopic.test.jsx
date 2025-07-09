import { render, screen } from '../test-utils/testing-library-utils';
import ArticleByTopic from '../components/ArticleByTopic';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Article from '../components/Article';

const { findByRole, findAllByRole } = screen;

describe('Article By Topic', () => {
  const topicAriaLabel = 'filtered topic';

  test('topic: filter by football', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=football',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });

    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(articleList[0]).toHaveTextContent(/topic: football/i);
    expect(articleList).toHaveLength(2);
  });

  test('topic: filter by cooking', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=cooking',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(articleList[0]).toHaveTextContent(/topic: cooking/i);
    expect(articleList).toHaveLength(2);
  });

  test('topic: filter by coding', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=coding',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(articleList[0]).toHaveTextContent(/topic: coding/i);
    expect(articleList).toHaveLength(2);
  });

  test('Clicking on an Article list item takes you to the article', async () => {
    const user = userEvent.setup();

    render(<ArticleByTopic />, {
      route: '/articles?topic=football',
      withRoutes: true,
      routes: [
        { path: '/articles', element: <ArticleByTopic /> },
        { path: '/articles/:article_id', element: <Article /> },
      ],
    });

    const articleLinks = await findAllByRole('link');
    expect(articleLinks.length).toBe(2);

    await user.click(articleLinks[0]);

    const title = await findByRole('heading', {
      name: /Article title for article 21/i,
    });

    expect(title).toBeVisible();
    expect(articleLinks[0]).not.toBeInTheDocument();
  });

  test('sort by comment count', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=football&sort_by=comment_count&order=',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(filteredArticlesHeading).toHaveTextContent(
      /Articles currently filtered by comment_count/i
    );

    expect(articleList[0]).toHaveTextContent(
      /Article 1 sorted by comment_count/i
    );
    expect(articleList).toHaveLength(2);
  });

  test('sort by date posted', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=football&sort_by=created_at&order=',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(filteredArticlesHeading).toHaveTextContent(
      /Articles currently filtered by created_at/i
    );

    expect(articleList[0]).toHaveTextContent(/Article 1 sorted by created_at/i);
    expect(articleList).toHaveLength(2);
  });

  test('sort by votes', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=football&sort_by=votes&order=',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(filteredArticlesHeading).toHaveTextContent(
      /Articles currently filtered by votes/i
    );

    expect(articleList[0]).toHaveTextContent(/Article 1 sorted by votes/i);
    expect(articleList).toHaveLength(2);
  });

  test('sort in ascending order', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=football&sort_by=&order=asc',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(filteredArticlesHeading).toHaveTextContent(
      /Articles currently filtered in asc order/i
    );

    expect(articleList[0]).toHaveTextContent(/Article 1 in order asc/i);
    expect(articleList).toHaveLength(2);
  });

  test('sort in descending order', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=football&sort_by=&order=desc',
      path: '/articles',
      withRoutes: true,
    });

    const filteredArticlesHeading = await findByRole('region', {
      name: topicAriaLabel,
    });
    const articleList = await findAllByRole('listitem');

    expect(filteredArticlesHeading).toBeVisible();
    expect(filteredArticlesHeading).toHaveTextContent(
      /Articles currently filtered in desc order/i
    );

    expect(articleList[0]).toHaveTextContent(/Article 1 in order desc/i);
    expect(articleList).toHaveLength(2);
  });

  test('error is displayed if you filter by a topic that does not exist', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?topic=fooBar',
      path: '/articles',
      withRoutes: true,
    });

    const errorMessage = await findByRole('alert');

    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveTextContent(/Error 404/i);
  });

  test('error is displayed if you sort by an non existent item', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?sort_by=fooBar&order=',
      path: '/articles',
      withRoutes: true,
    });

    const errorMessage = await findByRole('alert');

    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveTextContent(/Error 404/i);
  });

  test('error is displayed if you order by an non existent item', async () => {
    render(<ArticleByTopic />, {
      route: '/articles?sort_by=&order=fooBar',
      path: '/articles',
      withRoutes: true,
    });

    const errorMessage = await findByRole('alert');

    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveTextContent(/Error 404/i);
  });
});
