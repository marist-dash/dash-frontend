import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Profile from "../utils/Profile";
import Requirements from "../utils/Requirements";
import {FaCog} from 'react-icons/fa';
import Header from "../utils/Header";
import Pie from "../utils/Pie";
import RedFox from "../utils/RedFox";
import Form from "../utils/Form";

class Home extends Component {

  render() {

    // show login form if user hasn't logged in
    if (!this.props.requestSent) {
      return (
        <div className="h-screen">

          <div className="text-center">
            <RedFox/>
          </div>

          <div className="flex justify-center">
            <Form/>
          </div>

        </div>
      );
    }

    // if student response has been received, show report
    if (!this.props.student) {
      return (
        <p className="text-center icon-spin text-5xl">
          <FaCog/>
        </p>
      );
    }

    return (
      <div className="w-full h-screen">

        {/* Header */}
        <Header/>

        <div className="flex justify-center">
          {/* Profile */}
          <Profile/>

          {/* Pie */}
          <Pie/>

          {/*Requirements */}
          <Requirements/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  student: state.student,
  requestSent: state.requestSent,
});

export default connect(mapStateToProps)(Home);
