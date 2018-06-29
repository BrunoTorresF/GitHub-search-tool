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
        <div>
          <input type="text" name="location" placeholder='location' className="location-input"/>
        </div>
         <div>
           <input type="text" name="language" placeholder='language' className="language-input"/>
         </div>
      <div>
      <button onClick={(e) => this.handleClick(e)} label="Go!" className="search-button">Search</button>
      </div>
    </div>
  );
}
}

export default UserSearch;
