import React, {Component} from 'react';
import RedFox from '../utils/RedFox';
import Form from "../utils/Form";
import connect from "react-redux/es/connect/connect";
import LogoutButton from "../utils/LogoutButton";
import InitialsCircle from "../utils/InitialsCircle";

class Home extends Component {

  render() {
    if (!this.props.student) {
      return (
        <div className="h-screen bg-grey-lighter">

          <div className="text-center">
            <RedFox/>
          </div>

          <div className="flex justify-center">
            <Form/>
          </div>

        </div>
      );
    } else {
      return (
        <div className="h-screen bg-grey-lighter">
          <div className="flex justify-center">
            <HomePageLogout/>
          </div>
        </div>
      )
    }
  }
}

const HomePageLogout = () => {
  return (
    <div className="w-48 mt-24 pt-4 pb-8 px-4 bg-white text-center shadow-md rounded">
      <div className="flex justify-center pb-4">
        <InitialsCircle/>
      </div>
      <div>
        <LogoutButton/>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(Home);
