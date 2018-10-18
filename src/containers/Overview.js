import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Profile from "../utils/Profile";
import Requirements from "../utils/Requirements";
import Form from "../utils/Form";
import {FaCog} from 'react-icons/fa';
import OverviewHeader from "../utils/OverviewHeader";
import RedFox from "../utils/RedFox";
import Pie from "../utils/Pie";

class Overview extends Component {

  render() {
    if (this.props.student) {
      return (
        <div className="w-full h-screen bg-grey-lighter">

          {/* Header */ }
            <OverviewHeader/>

          <div className="flex justify-center">
            {/* Profile */}
            <Profile student={this.props.student}/>
          <Pie/>
            {/*Requirements */}
            <Requirements requirements={this.props.student.requirements}/>
          </div>
        </div>
      );
    } else if (!this.props.requestSent) {
      return (
        <div className="w-full h-screen bg-grey-lighter">

          <div className="text-center">
            <RedFox/>
          </div>

          <div className="flex justify-center pt-4 pb-2">
            <p className="p-4 rounded shadow-md text-red bg-white ">
              Please sign in with your Marist username and password.
            </p>
          </div>

          <div className="flex justify-center">
            <Form/>
          </div>

        </div>
      );
    } else {
      return (
        <div>
          <p className="text-center icon-spin text-5xl">
            <FaCog/>
          </p>
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  student: state.student,
  requestSent: state.requestSent,
});

export default connect(mapStateToProps)(Overview);
