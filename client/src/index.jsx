import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery' ;

class App extends React.Component {
  render() {
    return (<BrowserRouter>
      <MuiThemeProvider>
        <Route path="/" component={PrimaryLayout}/>
      </MuiThemeProvider>
    </BrowserRouter>)
  }
};



ReactDOM.render(<App />, document.getElementById('app'))
