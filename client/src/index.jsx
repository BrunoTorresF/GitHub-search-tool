import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './components/UserSearch.jsx'
import Results from './components/Results.jsx';


class App extends React.Component {
  render() {
    return (
      <div >
      <img src = 'gitHubIcon.jpg'
      className = 'github-logo' / >
      <div >
        <h1 className = 'title'> GitHub Search Tool </h1>
      </div>
      <div>
        <UserSearch />
      </div>
      <div>
        <Results / >
      </div>
      </div>
    )
  }
}

ReactDOM.render( < App / > , document.getElementById('app'));
