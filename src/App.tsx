import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './redux/hooks';
// import { searchList } from './slices/searchMovieSlice';
// import moviesAPI, { useGetAnyMoviesListQuery } from './services/movies';
import MovieList from './pages/movies/MovieList';
// import Movie from './pages/movies/Movie';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import './App.scss';

const App = () => {
  const [totaleMovieListPageNumber, settotaleMovieListPageNumber] = useState(0)

  // const dispatch = useAppDispatch()
  // const {
  //   data, error, isLoading, isError,
  // } = useGetAnyMoviesListQuery(String(totaleMovieListPageNumber));


  // šiet filtrēt visu, ko vajag

  // useEffect(() => {
  //   dispatch(searchList(data))
  //   // const apiCall = dispatch(moviesAPI.endpoints.getAnyMoviesList.initiate('0'))
  //   return () => {
  //     // apiCall.unsubscribe
  //   }
  // }, [data, dispatch])

  // if (error || isError) {
  //   return (
  //     <div className="error">
  //       <h1>ERROR while fetching movies database</h1>
  //       <p>Make sure your internet connection is active and try refreshing page!</p>
  //     </div>
  //   );
  // }
  // if (isLoading || !data) {
  //   return (
  //     <div className="error">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      <Header />
      {/* <button
        onClick={() => settotaleMovieListPageNumber(totaleMovieListPageNumber + 1)}
      >Show More = page {totaleMovieListPageNumber}</button> */}
      {/* ---- */}
      {/* {(isLoading) && <h1 className='loading-message'>Loading...</h1>} */}
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
