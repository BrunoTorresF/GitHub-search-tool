import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './components/UserSearch.jsx'
class App extends React.Component {
  render(){
    return (
      <div>
      <h1>GitHub Search Tool</h1>
      <div>
      <UserSearch/>
      </div>
      </div>



    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
