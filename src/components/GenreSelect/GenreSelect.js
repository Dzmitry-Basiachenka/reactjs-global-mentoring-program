import React from 'react';

class GenreSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGenres: this.props.selectedGenres
    }
  }

  render() {
    return <fieldset>
      <legend>Select Genre</legend>
      {
        this.props.genres.map((genre, key) => {
          return <div key={genre}>
            <input
              type='checkbox'
              defaultChecked={this.state.selectedGenres.includes(genre) ? 'checked' : ''}
              id={genre}
              name={genre}
              value={genre}
              onClick={this.handleClick}>
            </input>
            <label
              htmlFor={genre}>
              {genre}
            </label>
          </div>
        })
      }
    </fieldset>
  }

  handleClick = (event) => {
    const selectedGenres = [...this.state.selectedGenres];
    const selectedGenre = event.target.value;

    if (selectedGenres.includes(selectedGenre)) {
      selectedGenres.splice(selectedGenres.indexOf(selectedGenre), 1);

      this.setState(prevState => ({ ...prevState, selectedGenres: selectedGenres }));
      this.props.onSelect(selectedGenre, false);
    } else {
      selectedGenres.push(selectedGenre);

      this.setState(prevState => ({ ...prevState, selectedGenres: selectedGenres }));
      this.props.onSelect(selectedGenre, true)
    }
  }

}

export default GenreSelect;
