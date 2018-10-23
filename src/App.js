import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home";
import Overview from "./containers/Overview";
import Help from "./containers/Help";
import Footer from "./utils/Footer";

class App extends Component {

  render() {
    return (

      <Router>
        <div className="flex flex-col">

          {/* Home route */}
          <Route exact path="/" component={Home} />

          {/* Overview route */}
          <Route path="/overview" component={Overview} />

          {/* Help route */}
          <Route path="/help" component={Help}/>

          {/* Fixed footer with spacing*/}
          <Footer className="pt-10"/>
        </div>
      </Router>
    );
  }
}

export default App;
