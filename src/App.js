import './App.css';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';

function App() {
  return (
    <div className='App'>
      <h3>Counter</h3>
      <Counter initialValue='1' />

      <h3>SearchForm</h3>
      <SearchForm
        initialSearchText=''
        placeholderText='What do you want to watch?'
        buttonText='Search'
        handleSearch={(searchText) => console.log(`search: ${searchText}`)}
      />

      <h3>GenreSelect</h3>
      <GenreSelect
        genres={['Documentary', 'Comedy', 'Horror', 'Crime']}
        selectedGenres={['Documentary', 'Comedy']}
        onSelect={(genre, selection) => console.log(`genre: ${genre}, selection: ${selection}`)}
      />
    </div>
  );
}

export default App;
