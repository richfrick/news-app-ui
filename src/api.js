import axios from 'axios';

const newsAppAPI = axios.create({
  baseURL: 'https://news-app-ugpw.onrender.com/api',
});

export const getAllArticles = async () => {
  try {
    const { data } = await newsAppAPI.get('/articles');
    return data;
  } catch (error) {
    console.error('error getting articles', error);
  }
};

export const getArticleById = async (article_id) => {
  try {
    const { data } = await newsAppAPI.get(`articles/${article_id}`);
    return data;
  } catch (error) {
    console.log('error retreving article', error);
  }
};
