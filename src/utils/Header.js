import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
import InitialsCircle from "./InitialsCircle";

class Header extends Component {
  render() {
    return (
      <div className="w-full pb-4">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="flex justify-center xl:flex-none">

              <div className="xl:w-1/3"/>

              <div className="xl:w-1/3">
                <div className="flex justify-center">
                  <Link to="/"><img src="DashSizedFinal.png" alt="Dash" className="h-24 ml-2 xl:ml-0 mt-4 hover:border-grey-darkest border-b-2"/></Link>
                </div>
              </div>

              <div className="xl:w-1/3">
                <div className="flex justify-center mt-8 ml-8 xl:justify-end xl:mr-24">
                  <InitialsCircle/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Header);