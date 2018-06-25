import React from 'react';

class UserSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location : '' ,
      language : '' ,
    }


    this.updateLocation = this.updateLocation.bind(this);
    this.updateLanguage = this.UpdateLocation.bind(this);


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


}
