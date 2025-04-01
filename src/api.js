import axios from 'axios';

const newsAppAPI = axios.create({
  baseURL: 'https://news-app-ugpw.onrender.com/api',
});

export const getAllArticles = async () => {
  try {
    const { data } = await newsAppAPI.get('/articles');
    return data.articles;
  } catch (error) {
    console.error('error getting articles', error);
  }
};

export const getArticleById = async (article_id) => {
  try {
    const { data } = await newsAppAPI.get(`/articles/${article_id}`);
    return data.article;
  } catch (error) {
    console.log('error retreving article', error);
  }
};

export const getCommentsByArticleId = async (article_id) => {
  try {
    const { data } = await newsAppAPI.get(`/articles/${article_id}/comments`);
    return data.comments;
  } catch (error) {
    console.log('error retrieving comments', error);
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
    console.log('error while updating votes', error);
    throw error;
  }
};
