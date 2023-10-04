import React, { useState, useEffect } from 'react';
import { Container, Col, Row, CloseButton } from 'react-bootstrap';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieCounter from '../MovieCounter/MovieCounter';
import MovieListPage from '../MovieListPage/MovieListPage';
import { MovieService } from '../../services/MovieService';
import { GENRES, SORT_OPTIONS, DEFAULT_SEARCH, DEFAULT_GENRES, DEFAULT_SORT } from '../../constants/data.js';

const Home = () => {
  const [search, setSearch] = useState(DEFAULT_SEARCH);
  const [genres, setGenres] = useState(DEFAULT_GENRES);
  const [sort, setSort] = useState(DEFAULT_SORT);

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    MovieService.getMovies({ search, genres, sort },
      (data) => {
        setMovies(data);
        setFetching(false);
      },
      (error) => {
        setMovies([]);
        setFetching(false);
        alert('Backend service is unavailable: ' + error);
      }
    );
  }, [search, genres, sort]);

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Container>
        {!selectedMovie &&
          <div>
            <SearchForm
              initialSearchText={search}
              placeholderText='What do you want to watch?'
              buttonText='Search'
              handleSearch={setSearch}
            />
          </div>
        }
        {selectedMovie &&
          <div>
            <span data-testid='close-movie-details' className='float-end' onClick={() => setSelectedMovie(null)} ><CloseButton /></span>
            <MovieDetails movie={selectedMovie} />
          </div>
        }
      </Container>
      <Container>
        <Row>
          <Col md={9}>
            <GenreSelect
              genres={GENRES}
              selectedGenres={genres}
              onSelect={setGenres}
            />
          </Col>
          <Col md={3}>
            <SortControl
              sortOptions={SORT_OPTIONS}
              defaultSort={sort}
              handleChange={setSort}
            />
          </Col>
        </Row>
        <MovieCounter count={movies.length} />
      </Container>
      <div>
        {fetching && <span>Fetching movies...</span>}
        {!fetching && <MovieListPage movies={movies} setSelectedMovie={setSelectedMovie} />}
      </div>
    </ErrorBoundary>
  );
}

export default Home;
