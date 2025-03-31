import axios from 'axios';

const newsAppAPI = axios.create({
  baseURL: 'https://news-app-ugpw.onrender.com/api',
  timeout: 5000,
});

export const getAllArticles = () => {
  return newsAppAPI.get('/articles').then(({ data }) => {
    return data;
  });
};
