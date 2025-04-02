import { Routes, Route } from 'react-router-dom';
import '../styling/App.css';
import ArticleContainer from './ArticlesContainer.jsx';
import Header from './Header.jsx';
import Article from './Article.jsx';
import { UserProvider } from '../contexts/User.jsx';

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleContainer />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
