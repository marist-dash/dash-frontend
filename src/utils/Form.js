import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {FaFileExport, FaCheckCircle, FaTimesCircle} from "react-icons/fa";

const axios = require('axios');
const BROWSER_ENDPOINT = "https://dash-browser-automation.maristdash.tk";
const PARSE_ENDPOINT = "https://dash-parse.maristdash.tk";

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

    if (this.props.username.length < this.state.requiredUsernameLength ||
      this.props.password.length < this.state.requiredPasswordLength ||
      !this.state.isAuthorized) {
      this.props.dispatch({
        type: "ERROR_MESSAGE",
        errorMessage: "Missing required fields"
      });
      return;
    }

    this.getDegreeWorksText();
    this.props.dispatch({
      type: "REQUEST_SENT",
      value: true
    });
  };

  getDegreeWorksText = () => {
    const formData = new FormData();
    formData.set('username', this.props.username);
    formData.set('password', this.props.password);

    axios({
      method: 'post',
      url: BROWSER_ENDPOINT,
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
      .catch((error) => {

        // cancel request and reset password
        this.props.dispatch({
          type: "REQUEST_SENT",
          value: false
        });
        this.props.dispatch({
          type: "PASSWORD",
          password: ''
        });

        // check HTTP response to display best message
        if (error.response.status === 401) {
          this.props.dispatch({
            type: "ERROR_MESSAGE",
            errorMessage: "Incorrect username and/or password"
          });
        } else {
          this.props.dispatch({
            type: "ERROR_MESSAGE",
            errorMessage: "Unable to fetch DegreeWorks report"
          });
        }

      });
  };

  parseDegreeWorksText = (degreeWorksText) => {
    const formData = new FormData();
    formData.set('degreeWorksText', degreeWorksText);

    axios({
      method: 'post',
      url: PARSE_ENDPOINT,
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
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    return (
      <div className="form p-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

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
              placeholder="firstname.lastname1" />
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
              placeholder="******" />
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
              ): (
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
        <p className="text-center text-grey text-xs">
          © {new Date().getFullYear()} Dash. All rights reserved.
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  errorMessage: state.errorMessage,
  requestSent: state.requestSent,
});

export default connect(mapStateToProps)(withRouter(Form));