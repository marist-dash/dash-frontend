//This is the login form that the user sees before they connect

//Import Statements
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {FaFileExport, FaCheckCircle, FaTimesCircle} from "react-icons/fa";

//Connection to the automation and parsing service
const axios = require('axios');

class Form extends Component {

  constructor() {
    super();
    this.state = {
      isAuthorized: true,
      requiredUsernameLength: 1,
      requiredPasswordLength: 6,
    };
  }

  handleChange = (event) => {
    // reset error message
    this.props.dispatch({
      type: 'ERROR_MESSAGE',
      errorMessage: ''
    });

    if (event.target.name === 'username') {

      // Easter Egg
      if (event.target.value.toLowerCase() === 'dog') {
        this.props.history.push("/dog");
      }

      this.props.dispatch({
        type: 'USERNAME',
        username: event.target.value
      });
    } else if(event.target.name === 'isAuthorized') {
      this.setState({isAuthorized: !this.state.isAuthorized});
    }
    else {
      this.props.dispatch({
        type: 'PASSWORD',
        password: event.target.value
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // error message if the user leaves fields blank
    if (this.props.username.length < this.state.requiredUsernameLength ||
      this.props.password.length < this.state.requiredPasswordLength ||
      !this.state.isAuthorized) {
      this.props.dispatch({
        type: "ERROR_MESSAGE",
        errorMessage: "Missing required fields"
      });
      return;
    }

    //Opens up the loading screen while the data is fetched and parsed
    this.getDegreeWorksText();
    this.props.dispatch({
      type: "REQUEST_SENT",
      value: true
    });
  };

  //Calls axios to get the degreeWorks text through browser automation using the users credentials
  getDegreeWorksText = () => {
    const formData = new FormData();
    formData.set('username', this.props.username);
    formData.set('password', this.props.password);

    axios({
      method: 'post',
      url: this.props.endpoints.dash_browser_automation,
      data: formData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    })
      .then((response) => {
        this.parseDegreeWorksText(response.data);
      })
      //Checks to see if there was an error logging into degreeWorks and getting the text
      .catch((error) => {
        if (error.response.status === 401) {
          this.handleBackendError("Incorrect username and/or password");
        } else {
          this.handleBackendError("Unable to fetch your DegreeWorks report.");
        }
      });
  };

  //Calls axios to parse the text obtained from degreeWorks in order to figure out student information
  parseDegreeWorksText = (degreeWorksText) => {
    const formData = new FormData();
    formData.set('degreeWorksText', degreeWorksText);

    axios({
      method: 'post',
      url: this.props.endpoints.dash_parse,
      data: formData,
      config: {headers: {'Content-Type': 'multipart/form-data'}}
    })
      .then((response) => {
        localStorage.setItem("STUDENT", JSON.stringify(response.data));
        this.props.dispatch({
          type: 'STUDENT',
          student: response.data
        });
      })
      .catch( (error) => {
        // most likely a 500
        this.handleBackendError("There was a problem parsing your DegreeWorks data. We hope to resolve this issue soon.");
      });
  };
  // If there's an error at any point, display a message
  handleBackendError = (errorMessage) => {
    // tell redux no request is in motion
    this.props.dispatch({
      type: "REQUEST_SENT",
      value: false
    });

    // reset password in redux store
    this.props.dispatch({
      type: "PASSWORD",
      password: ''
    });

    // update error message in redux store
    this.props.dispatch({
      type: "ERROR_MESSAGE",
      errorMessage: errorMessage
    });
  };

  render() {
    if (this.props.endpoints) {
      return (
        <div className="w-full dash-base-width p-4">
          <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

            {/* Username */}
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                <div className="flex justify-start">
                  <div>Username</div>
                  {
                    this.props.username.length > this.state.requiredUsernameLength ? (
                      <div className="ml-1 text-green-dark"><FaCheckCircle/></div>
                    ) : (
                      <div className="ml-1 text-red-light"><FaTimesCircle/></div>
                    )
                  }
                </div>
              </label>
              <input
                name="username"
                value={this.props.username}
                onChange={this.handleChange}
                id="username"
                autoFocus
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="firstname.lastname1"/>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                <div className="flex justify-start">
                  <div>Password</div>
                  {
                    this.props.password.length > this.state.requiredPasswordLength ? (
                      <div className="ml-1 text-green-dark"><FaCheckCircle/></div>
                    ) : (
                      <div className="ml-1 text-red-light"><FaTimesCircle/></div>
                    )
                  }
                </div>
              </label>
              <input
                name="password"
                value={this.props.password}
                onChange={this.handleChange}
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******"/>
            </div>

            {/* Authorization checkbox */}
            <div className="mb-4">
              <input
                name="isAuthorized"
                value={this.state.isAuthorized}
                onChange={this.handleChange}
                className="mr-2 leading-tight" type="checkbox" checked={this.state.isAuthorized}/>
              <span className="text-grey-darker font-bold text-sm"> Allow access to DegreeWorks
                {this.state.isAuthorized ? (
                  <span className="ml-1 text-green-dark"><FaCheckCircle/></span>
                ) : (
                  <span className="ml-1 text-red-light"><FaTimesCircle/></span>
                )}
            </span>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                onClick={this.handleSubmit}
                className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold border border-grey-light rounded shadow">
                <div className="flex px-3 py-2">
                  <div className="pr-2">View Report</div>
                  <div><FaFileExport/></div>
                </div>
              </button>
            </div>

            {/* Display error if one exists */}
            {this.props.errorMessage.length > 0 &&
            <p className="mt-4 text-sm text-center">
              <span className="mr-1 font-bold text-red-light">Error: </span>
              <span className="text-grey-darker "> {this.props.errorMessage}</span>
            </p>
            }

          </form>

          {/* Copyright */}
          <p className="text-center text-grey text-xs">
            © {new Date().getFullYear()} SpeeDegree
          </p>

        </div>
      );
    }
    return (
      <div className="flex justify-center pt-8">
        <div className="icon-spin"/>
      </div>
    )
  }
}

// Connects to the Redux and sets the user's credentials
const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  errorMessage: state.errorMessage,
  requestSent: state.requestSent,
  endpoints: state.endpoints,
});

export default connect(mapStateToProps)(withRouter(Form));