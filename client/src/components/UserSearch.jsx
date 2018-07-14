import React from 'react';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      language: '',
    };
    this.updateLocation = this.updateLocation.bind(this);
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLocation(event) {
    this.setState({
      location: event.target.value,
    });
  }

  updateLanguage(event) {
    this.setState({
      language: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          Location:{' '}
          <input
            onChange={this.updateLocation}
            value={this.state.location}
            type="text"
            name="location"
            className="location-input"
          />
        </div>
        <div>
          Language:{' '}
          <input
            onChange={this.updateLanguage}
            value={this.state.language}
            type="text"
            name="language"
            className="language-input"
          />
        </div>
        <div>
          <button
            onClick={e => this.handleClick(e)}
            label="Go!"
            className="search-button">
            {' '}
            Search{' '}
          </button>
        </div>
      </div>
    );
  }
}

export default UserSearch;
