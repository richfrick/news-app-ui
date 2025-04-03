import axios from 'axios';

const newsAppAPI = axios.create({
  baseURL: 'https://news-app-ugpw.onrender.com/api',
});

export const getAllArticles = async (topic, sortBy, order) => {
  try {
    const {
      data: { articles },
    } = await newsAppAPI.get('/articles', {
      params: { topic: topic, sort_by: sortBy, order: order },
    });
    return articles;
  } catch (error) {
    console.error('error getting articles', error);
    throw error;
  }
};

export const getArticleById = async (article_id) => {
  try {
    const {
      data: { article },
    } = await newsAppAPI.get(`/articles/${article_id}`);
    return article;
  } catch (error) {
    console.error('error retreving article', error);
    throw error;
  }
};

export const getCommentsByArticleId = async (article_id) => {
  try {
    const {
      data: { comments },
    } = await newsAppAPI.get(`/articles/${article_id}/comments`);
    return comments;
  } catch (error) {
    console.error('error retrieving comments', error);
  }
};

export const patchUpOrDownVote = async (article_id, upOrDownVoteNum) => {
  try {
    const requestObject = { addOrRemoveVotes: upOrDownVoteNum };
    const { data } = await newsAppAPI.patch(
      `/articles/${article_id}`,
      requestObject
    );
    return data;
  } catch (error) {
    console.error('error while updating votes', error);
    throw error;
  }
};

export const postNewComment = async (article_id, author, body) => {
  try {
    const requestObject = {
      author: author,
      body: body,
    };
    const { data } = await newsAppAPI.post(
      `/articles/${article_id}/comments`,
      requestObject
    );
    return data;
  } catch (error) {
    console.error('error while creating comment', error);
    throw error;
  }
};

export const deleteComment = async (comment_id) => {
  try {
    const { data } = await newsAppAPI.delete(`/comments/${comment_id}`);
    return data;
  } catch (error) {
    console.error('error while deleting comment', error);
    throw error;
  }
};
