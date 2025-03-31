import axios from 'axios';

const newsAppAPI = axios.create({
  baseURL: 'https://news-app-ugpw.onrender.com/api',
});

export const getAllArticles = () => {
  return newsAppAPI.get('/articles').then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return newsAppAPI.get(`articles/${article_id}`).then(({ data }) => {
    return data;
  });
};
