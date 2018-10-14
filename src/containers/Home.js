import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import RedFox from '../utils/RedFox';
import Form from "../utils/Form";

class Home extends Component {

  fetcherCallback = (studentResponse) => {
    this.props.callbackFromApp(studentResponse, () => {
      return <Redirect to='/overview'/>;
    });
  };

  render() {

    if (this.props.requestSent) {
      return <Redirect to='/overview'/>
    }

    return (
      <div>

        <div className="text-center">
          <RedFox/>
        </div>

        <div className="flex justify-center">
          <Form callbackFromHome={this.fetcherCallback}/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  requestSent: state.requestSent,
});

export default connect(mapStateToProps)(Home);
