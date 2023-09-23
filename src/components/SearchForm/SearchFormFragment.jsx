import React from 'react'
import { useSearchParams } from 'react-router-dom';

import SearchForm from './SearchForm'
import { SEARCH_QUERY_PARAM, DEFAULT_SEARCH } from '../../constants/data.js';

const SearchFormFragment = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (key, value) => {
    setSearchParams(params => {
      params.set(key, value);
      return params;
    });
  }

  const search = searchParams.get(SEARCH_QUERY_PARAM) || DEFAULT_SEARCH;

  return (
    <div>
      <SearchForm
        initialSearchText={search}
        placeholderText='What do you want to watch?'
        buttonText='Search'
        handleSearch={(value) => updateSearchParams(SEARCH_QUERY_PARAM, value)}
      />
    </div>
  )
}

export default SearchFormFragment;
