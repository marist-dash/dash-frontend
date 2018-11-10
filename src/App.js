import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./containers/Home";
import Help from "./containers/Help";
import Footer from "./utils/Footer";
import connect from "react-redux/es/connect/connect";
import Header from "./utils/Header";
const axios = require('axios');
require('dotenv').config();

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

  componentDidMount() {
    this.fetchExternalConfigs();
  }

  fetchExternalConfigs() {
    axios.get(process.env.REACT_APP_EXTERNAL_CONFIGS_URL)
      .then( response => {
        this.props.dispatch({
          type: 'ENDPOINTS',
          endpoints: {
            dash_browser_automation: response.data.dash_browser_automation_endpoint,
            dash_parse: response.data.dash_parse_endpoint
          }
        });
        this.props.dispatch({
          type: 'HELP_TEXT',
          helpText: response.data.help_text
        });
      })
      .catch( error => {
        this.props.dispatch({
          type: 'ERROR_MESSAGE',
          errorMessage: 'Unable to load configurations. Please try again later.'
        })
      });
  }

  render() {
    return (
      <Router>
        <div className="w-full">
          <div className="flex justify-center">
            <div className="w-full">

              <Route component={Header}/>

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
  externalConfigs: state.externalConfigs,
});

export default connect(mapStateToProps) (App);
