import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Profile from "../utils/Profile";
import Requirements from "../utils/Requirements";
import Pies from "../utils/Pies";
import Form from "../utils/Form";
import Loading from "../utils/Loading";
import HelpfulLinks from "../utils/HelpfulLinks";

class Home extends Component {

  render() {
    // if the student object is loaded
    // xl:relative xl:flex xl:justify-start xl:justify-end xl:text-right xl:justify-end xl:mt-8 xl:mr-24

    if (this.props.student) {
      return (
        <div className="w-full">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="block xl:flex  xl:justify-center">

                <div className="xl:w-1/3">
                  <div className="flex justify-center">
                    <Profile/>
                  </div>
                  <div className="flex justify-center">
                    <HelpfulLinks/>
                  </div>
                </div>


                {/* Pies */}
                <div className="xl:w-1/3">
                  <div className="flex justify-center">
                    <Pies/>
                  </div>
                </div>

                {/*Requirements */}
                <div className="xl:w-1/3">
                  <div className="flex justify-center">
                    <Requirements/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <Loading/>
      );

      // // the form hasn't been submitted yet, so show form
      // if (!this.props.requestSent) {
      //   return (
      //     <div>
      //
      //       <div className="flex justify-center">
      //         <Form/>
      //       </div>
      //
      //     </div>
      //   );
      // }
      // if no student object but form submitted, show loading screen

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
