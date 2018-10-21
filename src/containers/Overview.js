import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router-dom";
import Profile from "../utils/Profile";
import Requirements from "../utils/Requirements";
import {FaCog} from 'react-icons/fa';
import OverviewHeader from "../utils/OverviewHeader";

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

            {/*Requirements */}
            <Requirements requirements={this.props.student.requirements}/>
          </div>
        </div>
      );
    } else if (!this.props.requestSent) {
      return (
        <Redirect to="/"/>
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
