import GenreSelect from './GenreSelect';

export default {
  component: GenreSelect
};

export const AllUnchecked = {
  args: {
    genres: ['Documentary', 'Comedy', 'Horror', 'Crime'],
    selectedGenres: [],
    onSelect: (genre, selection) => console.log(`genre: ${genre}, selection: ${selection}`),
  },
  parameters: {
  }
};

export const AllChecked = {
  args: {
    genres: ['Documentary', 'Comedy', 'Horror', 'Crime'],
    selectedGenres: ['Documentary', 'Comedy', 'Horror', 'Crime'],
    onSelect: (genre, selection) => console.log(`genre: ${genre}, selection: ${selection}`),
  },
  parameters: {
  }
};
