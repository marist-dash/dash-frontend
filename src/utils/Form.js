import React, {Component} from 'react';
import {connect} from "react-redux";

const axios = require('axios');
const BROWSER_ENDPOINT = "http://maristdash.tk:8080";
const PARSE_ENDPOINT = "http://maristdash.tk:8081";

class Form extends Component {

  handleChange = (event) => {
    if (event.target.name === 'username') {
      this.props.dispatch({
        type: 'USERNAME',
        username: event.target.value
      });
    } else {
      this.props.dispatch({
        type: 'PASSWORD',
        password: event.target.value
      });
    }
  };

  handleSubmit = (event) => {
    this.getDegreeWorksText();
    this.props.dispatch({
      type: "REQUEST_SENT"
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
      config: {headers: {'Content-Type': 'multipart/form-data'}}
    })
      .then((response) => {
        this.parseDegreeWorksText(response.data);
      })
      .catch(function (response) {
        console.log(response);
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
        this.props.dispatch({
          type: 'RESPONSE_RECEIVED'
        });
        console.log(response.data);
        this.props.callbackFromHome(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    return (
      <div className="w-full max-w-xs p-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

          {/* Username */}
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              name="username"
              onChange={this.handleChange}
              id="username"
              autoFocus
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"/>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              onChange={this.handleChange}
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="********"/>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              onClick={this.handleSubmit}
              type="button"
              className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">
              View Report
            </button>
          </div>

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
  requestSent: state.requestSent,
  responseReceived: state.responseReceived
});

export default connect(mapStateToProps)(Form);