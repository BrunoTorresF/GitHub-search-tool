import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './components/UserSearch.jsx'
class App extends React.Component {
  render(){
    return (
      <div>
         <img src='gitHubIcon.png' className='github-logo' class='center'/>
         <div>
            <h1 className='title'>GitHub Search Tool</h1>
         </div>
       <div>
         <UserSearch/>
       </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
