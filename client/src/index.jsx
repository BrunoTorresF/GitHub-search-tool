import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './components/UserSearch.jsx'
import Results from './components/Results.jsx';


class App extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.state = {

    }
  }

    searchForUser(location, language) {
     axios.get('https://api.github.com/search/users?q=location:'+location)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }

=======
>>>>>>> b6cabd54b1ce20686ed24a7dfe025e872a947d8c
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
