import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router-dom";
import Header from "../utils/Header";

class Charts extends Component {
  render() {
    if (this.props.student) {
      return (
        <div className="w-full h-screen bg-grey-lighter">

          {/* Header */}
          <Header/>
        </div>
      );
    }
    return (
      <Redirect to='/' />
    )
  }
}

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(Charts);