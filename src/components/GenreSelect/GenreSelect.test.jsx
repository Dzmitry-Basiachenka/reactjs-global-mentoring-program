import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import GenreSelect from './GenreSelect';

describe('GenreSelect', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const genreSelect = renderer
      .create(
        <GenreSelect
          genres={['Documentary', 'Comedy', 'Horror', 'Crime']}
          selectedGenres={['Documentary', 'Comedy']}
        />
      )
      .toJSON();

    expect(genreSelect).toMatchSnapshot();
  });

  // Test that component renders all genres passed in props
  it('should render correctly', () => {
    const genres = ['Documentary', 'Comedy', 'Horror', 'Crime'];
    const selectedGenres = ['Documentary', 'Comedy'];

    render(
      <GenreSelect
        genres={genres}
        selectedGenres={selectedGenres}
      />
    );

    const genreLabels = screen.getAllByRole('label')
      .map(label => label.innerHTML);
    expect(genreLabels).toEqual(genres);
  });

  // Test that component highlights a selected genre passed in props
  it('should highlight a selected genre', () => {
    const genres = ['Documentary', 'Comedy', 'Horror', 'Crime'];
    const selectedGenres = ['Documentary', 'Comedy'];

    render(
      <GenreSelect
        genres={genres}
        selectedGenres={selectedGenres}
        onSelect={console.log}
      />
    );

    const genreCheckboxes = screen.getAllByRole('checkbox')
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    expect(genreCheckboxes).toEqual(selectedGenres);
  });

  // Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments
  it('should call the handler', () => {
    const genres = ['Documentary', 'Comedy', 'Horror', 'Crime'];
    const selectedGenres = ['Documentary', 'Comedy'];
    const handleSelectMock = jest.fn();

    render(
      <GenreSelect
        genres={genres}
        selectedGenres={selectedGenres}
        onSelect={handleSelectMock}
      />
    );

    const deselectingGenre = genres[1];
    const deselectingCheckbox = screen.getByText(deselectingGenre);
    fireEvent.click(deselectingCheckbox, { target: { innerText: deselectingCheckbox.innerHTML } });
    expect(handleSelectMock).toHaveBeenCalledWith(deselectingGenre, false);

    const selectingGenre = genres[2];
    const selectingCheckbox = screen.getByText(selectingGenre);
    fireEvent.click(selectingCheckbox, { target: { innerText: selectingCheckbox.innerHTML } });
    expect(handleSelectMock).toHaveBeenCalledWith(selectingGenre, true);
  });

});
