import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react'

import MovieDetails from './MovieDetails.jsx';
import { MOCK_MOVIES } from '../../mock/mockData.js';

describe('MovieDetails', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const movieDetails = renderer
      .create(
        <MovieDetails
          movie={MOCK_MOVIES[0]}
        />
      )
      .toJSON();

    expect(movieDetails).toMatchSnapshot();
  });

  it('render correctly', () => {
    const movie = MOCK_MOVIES[0];

    render(
      <MovieDetails
        movie={movie}
      />
    );

    const image = screen.getByTestId('movie-poster');
    expect(image.getAttribute('src')).toEqual(movie.poster_path);
    expect(image.getAttribute('alt')).toEqual(movie.title);

    expect(screen.getByTestId('movie-title')).toHaveTextContent(movie.title);
    expect(screen.getByTestId('movie-vote')).toHaveTextContent(movie.vote_average);
    expect(screen.getByTestId('movie-tagline')).toHaveTextContent(movie.tagline);
    expect(screen.getByTestId('movie-genres')).toHaveTextContent('Thriller, Crime');
    expect(screen.getByTestId('movie-year')).toHaveTextContent('1994');
    expect(screen.getByTestId('movie-runtime')).toHaveTextContent('2h 34min');
    expect(screen.getByTestId('movie-overview')).toHaveTextContent(movie.overview);
  });

});
