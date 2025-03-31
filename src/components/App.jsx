import { Routes, Route } from 'react-router-dom';
import '../styling/App.css';
import ArticleContainer from './ArticlesContainer.jsx';
import Header from './Header.jsx';
import ArticlesList from './ArticlesList.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
      </Routes>
    </>
  );
}

export default App;
