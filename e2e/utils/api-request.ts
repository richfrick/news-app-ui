import { APIRequestContext } from '@playwright/test';
import { Article, Comment } from '../types';

async function responseHandler<T>(response: any): Promise<T> {
  if (!response.ok()) {
    const text = await response.text();
    throw new Error(`API Error: ${response.status()} - ${text}`);
  }
  return await response.json();
}

export async function createComment(
  api: APIRequestContext,
  article_id: number,
  author: string,
  text: string
): Promise<{ data: { comment: Comment } }> {
  try {
    const response = await api.post(
      `${process.env.VITE_API_URL}/articles/${article_id.toString()}/comments`,
      {
        data: {
          author,
          body: text,
        },
      }
    );

    return responseHandler(response);
  } catch (error) {
    console.log(`Error creating comment:`, error);
    throw error;
  }
}

export async function deleteArticle(
  api: APIRequestContext,
  article_id: number
): Promise<void> {
  try {
    const response = await api.delete(
      `${process.env.VITE_API_URL}/articles/${article_id.toString()}`
    );
    if (!response.ok()) {
      throw new Error(`Failed to delete comment from article ${article_id}`);
    }
  } catch (error) {
    console.log(`Error deleting article: `, error);
    throw error;
  }
}

export async function createArticle(
  api: APIRequestContext,
  authorOrObject: string | Article
): Promise<{ data: { article: Article } }> {
  try {
    const input =
      typeof authorOrObject === 'string'
        ? {
            author: authorOrObject,
            title: `test title ${Date.now()}`,
            body: 'Lorem ipsum dolor sit amet',
            topic: 'football',
            article_img_url:
              'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
          }
        : authorOrObject;

    const response = await api.post(`${process.env.VITE_API_URL}/articles`, {
      data: input,
    });

    return responseHandler(response);
  } catch (error) {
    console.error(`Error creating article:`, error);
    throw error;
  }
}
