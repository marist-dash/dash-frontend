import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home";
import Help from "./containers/Help";
import Charts from "./containers/Charts";
import Footer from "./utils/Footer";
import connect from "react-redux/es/connect/connect";

class App extends Component {

  constructor(props) {
    super();

    if (null !== localStorage.getItem("STUDENT")) {
      const studentAsString = localStorage.getItem("STUDENT");
      const studentAsObject = JSON.parse(studentAsString);
      props.dispatch({
        type: 'STUDENT',
        student: studentAsObject
      });
    }
  }

  render() {
    return (

      <Router>
        <div className="flex flex-col">

          {/* Home route */}
          <Route exact path="/" component={Home} />

          {/* Charts route */}
          <Route path="/charts" component={Charts} />

          {/* Help route */}
          <Route path="/help" component={Help} />

          {/* Fixed footer with spacing*/}
          <Footer className="pt-10"/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps) (App);
