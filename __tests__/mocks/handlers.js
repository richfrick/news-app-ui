import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('*/articles', ({ request }) => {
    const url = new URL(request.url);
    const topic = url.searchParams.get('topic');
    const sortBy = url.searchParams.get('sort_by');
    const order = url.searchParams.get('order');
    const validSortTopics = ['football', 'coding', 'cooking'];
    const validQueryParams = [
      'comment_count',
      'created_at',
      'votes',
      'asc',
      'desc',
    ];

    if (
      (topic && !validSortTopics.includes(topic)) ||
      (sortBy && !validQueryParams.includes(sortBy)) ||
      (order && !validQueryParams.includes(order))
    ) {
      return HttpResponse.json(
        {
          msg: 'Not Found',
        },
        { status: 404 }
      );
    } else if (topic || sortBy || order) {
      return HttpResponse.json({
        articles: [
          {
            article_id: 21,
            title: `Article 1 ${sortBy ? `sorted by ${sortBy}` : ''} ${
              order ? `in order ${order}` : ''
            }`,
            topic: topic ? topic : 'topic',
            author: 'tickle122',
            created_at: '2020-10-26T10:05:00.000Z',
            votes: 5,
            article_img_url:
              'https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?w=700&h=700',
            comment_count: 10,
          },
          {
            article_id: 19,
            title: `Article 2 ${sortBy ? `sorted by ${sortBy}` : ''} ${
              order ? `in order ${order}` : ''
            }`,
            topic: topic ? topic : 'topic',
            author: 'jessjelly',
            created_at: '2020-09-13T13:02:00.000Z',
            votes: 0,
            article_img_url:
              'https://images.pexels.com/photos/685382/pexels-photo-685382.jpeg?w=700&h=700',
            comment_count: 13,
          },
        ],
      });
    } else {
      return HttpResponse.json({
        articles: [
          {
            article_id: 21,
            title: `Article 1`,
            topic: 'topic',
            author: 'tickle122',
            created_at: '2020-10-26T10:05:00.000Z',
            votes: 5,
            article_img_url:
              'https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?w=700&h=700',
            comment_count: 10,
          },
          {
            article_id: 19,
            title: `Article 2`,
            topic: 'topic',
            author: 'jessjelly',
            created_at: '2020-09-13T13:02:00.000Z',
            votes: 0,
            article_img_url:
              'https://images.pexels.com/photos/685382/pexels-photo-685382.jpeg?w=700&h=700',
            comment_count: 13,
          },
        ],
      });
    }
  }),

  http.get('*/articles/:articleId', ({ params }) => {
    const { articleId } = params;

    if (articleId === '321') {
      return HttpResponse.json(
        {
          msg: 'Not Found: article_id 321',
        },
        { status: 404 }
      );
    } else if (articleId) {
      return HttpResponse.json({
        article: {
          article_id: articleId,
          title: `Article title for article ${articleId}`,
          topic: 'topic123',
          author: 'Author123',
          body: `article body ${articleId}`,
          created_at: '2020-11-22T11:13:00.000Z',
          votes: 26,
          article_img_url:
            'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
          comment_count: 13,
        },
      });
    } else {
      return HttpResponse.json({ message: `${articleId} requested` });
    }
  }),

  http.get('*/articles/:articleId/comments', ({ params }) => {
    const { articleId } = params;

    if (articleId === '321') {
      return HttpResponse.json(
        {
          msg: 'Not Found: article_id 321',
        },
        { status: 404 }
      );
    } else {
      return HttpResponse.json({
        comments: [
          {
            comment_id: 323,
            article_id: 123,
            body: 'comment 1 added',
            votes: 0,
            author: 'tickle122',
            created_at: '2025-04-04T10:47:21.621Z',
          },
          {
            comment_id: 324,
            article_id: 123,
            body: 'comment 2 added',
            votes: 0,
            author: 'jellybelly',
            created_at: '2025-04-04T10:47:21.621Z',
          },
        ],
      });
    }
  }),
];
