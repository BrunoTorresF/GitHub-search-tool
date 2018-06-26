import React from 'react';

class UserSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location : '' ,
      language : ''
    }



  }


  updateLocation(event){
   this.setState({
     location: event.target.value
   })
 }


 updateLanguage(event){
    this.setState({
      language: event.target.value
    })
  }

render(){
  return(
    <div>
    <input type="text" name="location" placeHolder='location'/>
    <input type="text" name="language" placeHolder='language'/>
    </div>
  );
}
}

export default UserSearch;
