import React from 'react';
import { createSearchParams, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';

import MovieDetails from './MovieDetails';

const MovieDetailsFragment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const movie = useLoaderData();

  return (
    <div>
      <span
        data-testid='close-movie-details'
        className='float-end'
        onClick={() => navigate({ pathname: '/', search: `?${createSearchParams(searchParams)}` })}
      >
        <CloseButton />
      </span>
      <MovieDetails movie={movie} />
    </div>
  );
}

export default MovieDetailsFragment;
