import { createSearchParams } from 'react-router-dom';

export const navigation = (pathname, searchParams) => ({
  pathname,
  search: `?${createSearchParams(searchParams)}`
});
