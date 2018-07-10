import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './components/UserSearch.jsx'
import Results from './components/Results.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
<<<<<<< HEAD
  //fetch('https://api.github.com/graphql', {
  //method:'GET',
  //headers: { 'Content-Type': 'application/json' },
  //body: JSON.stringify({ query: '{ posts { title } }' }),
//})
  //.then(res => res.json())
  //.then(res => console.log(res.data));



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
         <div>
           <Results/>
         </div>
      </div>
=======
  render() {
    return ( <
      div >
      <
      img src = 'gitHubIcon.png'
      className = 'github-logo' / >
      <
      div >
      <
      h1 className = 'title' > GitHub Search Tool < /h1> <
      /div> <
      div >
      <
      UserSearch / >
      <
      /div> <
      div >
      <
      Results / >
      <
      /div> <
      /div>
>>>>>>> b0d85bd308c48aa37ff25a77f3a2c0fc56882799
    )
  }
}

ReactDOM.render( < App / > , document.getElementById('app'));
