import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './components/UserSearch.jsx'
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
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
