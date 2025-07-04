import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://news-app-ugpw.onrender.com/api/articles', ({ request }) => {
    const url = new URL(request.url);
    const topic = url.searchParams.get('topic');

    if (topic === 'football') {
      return HttpResponse.json({
        articles: [
          {
            article_id: 21,
            title: 'Agility Training Drills For Football Players',
            topic: 'football',
            author: 'tickle122',
            created_at: '2020-10-26T10:05:00.000Z',
            votes: 5,
            article_img_url:
              'https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?w=700&h=700',
            comment_count: 10,
          },
          {
            article_id: 19,
            title: 'Who are the most followed clubs and players on Instagram?',
            topic: 'football',
            author: 'jessjelly',
            created_at: '2020-09-13T13:02:00.000Z',
            votes: 0,
            article_img_url:
              'https://images.pexels.com/photos/685382/pexels-photo-685382.jpeg?w=700&h=700',
            comment_count: 13,
          },
        ],
      });
    } else if (topic === 'cooking') {
      return HttpResponse.json({
        articles: [
          {
            article_id: 34,
            title: 'The Notorious MSG’s Unlikely Formula For Success',
            topic: 'cooking',
            author: 'grumpy19',
            created_at: '2020-11-22T11:13:00.000Z',
            votes: 26,
            article_img_url:
              'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
            comment_count: 13,
          },
          {
            article_id: 33,
            title: 'Seafood substitutions are increasing',
            topic: 'cooking',
            author: 'weegembump',
            created_at: '2020-09-16T17:26:00.000Z',
            votes: 1,
            article_img_url:
              'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?w=700&h=700',
            comment_count: 7,
          },
        ],
      });
    } else if (topic === 'coding') {
      return HttpResponse.json({
        articles: [
          {
            article_id: 12,
            title: 'The battle for Node.js security has only begun',
            topic: 'coding',
            author: 'tickle122',
            created_at: '2020-11-15T13:25:00.000Z',
            votes: 4,
            article_img_url:
              'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
            comment_count: 8,
          },
          {
            article_id: 6,
            title:
              'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
            topic: 'coding',
            author: 'grumpy19',
            created_at: '2020-11-11T15:09:00.000Z',
            votes: 9,
            article_img_url:
              'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700',
            comment_count: 11,
          },
        ],
      });
    } else {
      return HttpResponse.json(
        {
          msg: 'Not Found: article_id 321',
        },
        { status: 404 }
      );
    }
  }),

  http.get(
    'https://news-app-ugpw.onrender.com/api/articles/:articleId',
    ({ params }) => {
      const { articleId } = params;

      if (articleId === '123') {
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
      } else if (articleId === '321') {
        return HttpResponse.json(
          {
            msg: 'Not Found: article_id 321',
          },
          { status: 404 }
        );
      } else {
        return HttpResponse.json({ message: `${articleId} requested` });
      }
    }
  ),

  http.get(
    'https://news-app-ugpw.onrender.com/api/articles/:articleId/comments',
    ({ params }) => {
      const { articleId } = params;

      if (articleId === '123') {
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
      } else {
        return HttpResponse.json(
          {
            msg: 'Not Found: article_id 321',
          },
          { status: 404 }
        );
      }
    }
  ),

  http.get('*', ({ request }) => {
    console.warn('Unhandled GET:', request.url);
    return HttpResponse.error();
  }),
];
