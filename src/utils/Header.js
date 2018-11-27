
import React, { Component } from 'react';
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
                <div className="flex justify-center max-w-md ">
                  <Link to="/"><img src="speedegree.png" alt="Dash" className="ml-2 xl:ml-0 mt-4"/></Link>
                </div>
              </div>

              <div className="xl:w-1/3">
                {
                  this.props.location.pathname === '/help'  ? (
                    <div className="fixed pin-t mt-1 pin-r mr-1 z-50 xl:relative xl:flex xl:mt-8 xl:-ml-4">
                      <InitialsCircle/>
                    </div>
                  ) : (
                    <div className="fixed pin-t mt-1 pin-r mr-1 z-50 xl:relative xl:flex xl:justify-start xl:justify-end xl:text-right xl:justify-end xl:mt-8 xl:mr-24">
                      <InitialsCircle/>
                    </div>
                  )
                }
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
