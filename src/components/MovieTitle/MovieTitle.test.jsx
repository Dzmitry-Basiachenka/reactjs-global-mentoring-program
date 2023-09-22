import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react'

import MovieTitle from './MovieTitle.jsx';
import { MOCK_MOVIES } from '../../mock/mockData.js';

describe('MovieTitle', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const movieTitle = renderer
      .create(
        <MovieTitle
          movie={MOCK_MOVIES[0]}
        />
      )
      .toJSON();

    expect(movieTitle).toMatchSnapshot();
  });

  it('render correctly', () => {
    const movie = MOCK_MOVIES[0];

    render(
      <MovieTitle
        movie={movie}
      />
    );

    const image = screen.getByTestId('movie-poster');
    expect(image.getAttribute('src')).toEqual(movie.poster_path);
    expect(image.getAttribute('alt')).toEqual(movie.title);

    expect(screen.getByTestId('movie-title')).toHaveTextContent(movie.title);
    expect(screen.getByTestId('movie-year')).toHaveTextContent('1994');
    expect(screen.getByTestId('movie-genres')).toHaveTextContent('Thriller, Crime');
  });

});
