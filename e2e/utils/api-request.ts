import { APIRequestContext } from '@playwright/test';

export async function createComment(
  api: APIRequestContext,
  article_id: number,
  author: string,
  text: string
) {
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

    if (!response.ok()) {
      throw new Error(
        `Failed to create comment ${response.status()} ${response.statusText()}}`
      );
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.log(`Error creating comment:`, error);
    throw error;
  }
}

export async function deleteArticle(
  api: APIRequestContext,
  article_id: number
) {
  try {
    const response = await api.delete(
      `${process.env.VITE_API_URL}/articles/${article_id.toString()}`
    );

    if (!response.ok()) {
      throw new Error(
        `Error deleting article ${response.status()} ${response.statusText()}`
      );
    }
  } catch (error) {
    console.log(`Error deleting article: `, error);
    throw error;
  }
}

export async function createArticle(api: APIRequestContext, author: string) {
  try {
    const response = await api.post(`${process.env.VITE_API_URL}/articles`, {
      data: {
        author,
        title: 'test title',
        body: 'test body',
        topic: 'football',
        article_img_url:
          'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
      },
    });

    if (!response.ok()) {
      throw new Error(
        `Failed to create article ${response.status()} ${response.statusText()}`
      );
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error(`Error creating article:`, error);
    throw error;
  }
}
