import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home";
import Overview from "./containers/Overview";
import Help from "./containers/Help";
import Footer from "./utils/Footer";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requestSent: false,
      responseReceived: false,
    };
  };

  fetcherCallback = (studentResponse) => {
    this.setState({
      student: studentResponse,
    });
  };

  render() {
    return (

      <Router>
        <div className="min-h-screen flex flex-col">

          {/* Home route */}
          <Route
            exact path="/"
            render={(props) => <Home {...props} callbackFromApp={this.fetcherCallback}/>}
          />

          {/* Overview route */}
          <Route
            path="/overview"
            render={(props) => <Overview {...props} student={this.state.student}/>}
          />

          {/* Help route */}
          <Route path="/help" component={Help}/>


          {/* Fixed footer with spacing*/}
          <div className="h-16"/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
