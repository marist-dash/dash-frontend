import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router-dom";
import OverviewHeader from "../utils/Header";

class Charts extends Component {
  render() {
    if (this.props.requestSent) {
      return (
        <div className="w-full h-screen bg-grey-lighter">

          {/* Header */}
          <OverviewHeader/>
        </div>
      );
    }
    return (
      <Redirect to='/' />
    )
  }
}

const mapStateToProps = (state) => ({
  requestSent: state.requestSent,
});

export default connect(mapStateToProps)(Charts);