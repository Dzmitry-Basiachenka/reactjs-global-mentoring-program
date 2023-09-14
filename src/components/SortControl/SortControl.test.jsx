import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import SortControl from './SortControl';
import { MOCK_SORT_OPTIONS } from '../../mock/mockData.js';

describe('SortControl', () => {

  afterEach(cleanup);

  it('should match snapshot', () => {
    const sortControl = renderer
      .create(
        <SortControl
          sortOptions={MOCK_SORT_OPTIONS}
          defaultSortBy={MOCK_SORT_OPTIONS[1].value}
        />
      )
      .toJSON();

    expect(sortControl).toMatchSnapshot();
  });

  it('render correctly', () => {
    render(
      <SortControl
        sortOptions={MOCK_SORT_OPTIONS}
        defaultSortBy={MOCK_SORT_OPTIONS[1].value}
      />
    );

    expect(screen.getByRole('combobox')).toHaveValue('title');
    expect(screen.getByRole('option', { name: 'Release date' }).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Title' }).selected).toBe(true);
  });

  it('should select value', async () => {
    const { user } = {
      user: userEvent.setup(),
      ...render(
        <SortControl
          sortOptions={MOCK_SORT_OPTIONS}
          defaultSortBy={MOCK_SORT_OPTIONS[1].value}
          handleChange={(event) => console.log(`sort by: ${event.target.value}`)}
        />
      )
    };

    expect(screen.getByRole('combobox')).toHaveValue('title');
    expect(screen.getByRole('option', { name: 'Release date' }).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Title' }).selected).toBe(true);

    await waitFor(async () => {
      await user.selectOptions(screen.getByRole('combobox'), 'release_date');
    });

    expect(screen.getByRole('combobox')).toHaveValue('release_date');
    expect(screen.getByRole('option', { name: 'Release date' }).selected).toBe(true);
    expect(screen.getByRole('option', { name: 'Title' }).selected).toBe(false);
  });

});
