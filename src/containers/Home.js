import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Profile from "../utils/Profile";
import Requirements from "../utils/Requirements";
import {FaCog} from 'react-icons/fa';
import Header from "../utils/Header";
import Pies from "../utils/Pies";
import RedFox from "../utils/RedFox";
import Form from "../utils/Form";

class Home extends Component {

  constructor(props) {
    super();
  }

  render() {

    if (this.props.student) {
      return (
        <div className="flex w-full h-screen">

          <div>
            <Profile/>
          </div>

          <div className="w-full">

            {/* Header */}
            <Header/>


            {/* Pies */}
            <div className="flex">
              <div className="w-1/2 flex justify-center">
                <Pies/>
              </div>

              {/*Requirements */}
              <div className="w-1/2">
                <Requirements/>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
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
      return (
        <p className="text-center icon-spin text-5xl">
          <FaCog/>
        </p>
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

export default connect(mapStateToProps)(Home);
