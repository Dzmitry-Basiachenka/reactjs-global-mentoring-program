import React from 'react';

const KEY_ENTER_CODE = 13;

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.initialSearchText || ''
    };
  }

  render() {
    const searchText = this.state.searchText;

    return <div>
      <input
        type='text'
        data-testid='search-input'
        value={searchText}
        onChange={this.handleInputChange}
        onKeyDown={this.handleInputKeyDown}
        placeholder={this.props.placeholderText}
        title={this.props.placeholderText}
      />

      <button
        type='button'
        data-testid='search-button'
        onClick={this.handleButtonClick}
        disabled={!searchText.length && 'disabled'}
      >
        {this.props.buttonText}
      </button>
    </div>
  }

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  handleInputKeyDown = (event) => {
    if (event.keyCode === KEY_ENTER_CODE) {
      this.props.handleSearch(this.state.searchText);
    }
  }

  handleButtonClick = () => {
    this.props.handleSearch(this.state.searchText);
  }

}

export default SearchForm;
