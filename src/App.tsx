import { Routes, Route } from 'react-router-dom';
import MovieList from './components/movies/MovieList';
import PageNotFound from './pages/PageNotFound';
import Header from './components/header/Header';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="pages-container">
        <Routes>
          <Route path="/" element={<MovieList />} />
          {/* <Route path="/movie/:ID" element={<MovieDetails />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>

  );
}
export default App;
