import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://news-app-ugpw.onrender.com/api/articles/321', () => {
    return HttpResponse.json(
      {
        msg: 'Not Found: article_id 321',
      },
      { status: 404 }
    );
  }),

  http.get(
    'https://news-app-ugpw.onrender.com/api/articles/321/comments',
    () => {
      return HttpResponse.json(
        {
          msg: 'Not Found',
        },
        { status: 404 }
      );
    }
  ),

  http.get('https://news-app-ugpw.onrender.com/api/articles/123', () => {
    return HttpResponse.json({
      article: {
        article_id: 123,
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        topic: 'cooking',
        author: 'grumpy19',
        body: "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.",
        created_at: '2020-11-22T11:13:00.000Z',
        votes: 26,
        article_img_url:
          'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
        comment_count: 13,
      },
    });
  }),

  http.get(
    'https://news-app-ugpw.onrender.com/api/articles/123/comments',
    () => {
      return HttpResponse.json({
        comments: [
          {
            comment_id: 323,
            article_id: 123,
            body: 'can I add a comment',
            votes: 0,
            author: 'tickle122',
            created_at: '2025-04-04T10:47:21.621Z',
          },
        ],
      });
    }
  ),
];
