import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home";
import Help from "./containers/Help";
import Footer from "./utils/Footer";
import connect from "react-redux/es/connect/connect";
import Header from "./utils/Header";

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
        <div className="w-full">
          <div className="flex justify-center">
            <div className="w-full">

              <Header/>

              {/* Home route */}
              <Route exact path="/" component={Home} />

              {/* Help route */}
              <Route path="/help" component={Help} />

              {/* Fixed footer */}
              <div className="pt-16">
                <Footer/>
              </div>

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps) (App);
