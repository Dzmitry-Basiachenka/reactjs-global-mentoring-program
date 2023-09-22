import SearchForm from './SearchForm';

export default {
  component: SearchForm
};

export const Default = {
  args: {
    initialSearchText: 'comedy',
    placeholderText: 'What do you want to watch?',
    buttonText: 'Search',
    handleSearch: (searchText) => console.log(`search: ${searchText}`),
  },
  parameters: {
  }
};
