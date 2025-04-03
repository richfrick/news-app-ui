import { Routes, Route } from 'react-router-dom';
import '../styling/App.css';
import ArticleContainer from './ArticlesContainer.jsx';
import Header from './Header.jsx';
import Article from './Article.jsx';
import { UserProvider } from '../contexts/User.jsx';
import ArticleByTopic from './ArticleByTopic.jsx';
import NavBar from './NavBar.jsx';
import ErrorPage from './ErrorPage.jsx';

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleContainer />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles" element={<ArticleByTopic />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
