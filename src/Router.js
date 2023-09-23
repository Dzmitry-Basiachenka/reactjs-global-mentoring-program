import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SearchFormFragment from './components/SearchForm/SearchFormFragment';
import MovieDetailsFragment from './components/MovieDetails/MovieDetailsFragment';
import { MovieService } from './services/MovieService';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <SearchFormFragment />
      },
      {
        path: '/:movieId',
        element: <MovieDetailsFragment />,
        loader: ({ params }) => MovieService.getMovie(params.movieId)
      }
    ]
  }
]);

export default Router;
