import { Routes, Route } from 'react-router-dom';
import '../styling/App.css';
import ArticleContainer from './ArticlesContainer.jsx';
import Header from './Header.jsx';
import Article from './Article.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
