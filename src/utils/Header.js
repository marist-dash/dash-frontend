//Sets the properties for the header

//Import Statements
import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";

//Displays the header, which is just the Dash logo right now
class Header extends Component {
  render() {
    return (
      <div className="w-full pb-4">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="flex justify-center">
              <Link to="/"><img src="DashSizedFinal.png" alt="Dash" className="h-16 sm:h-24 mt-4 hover:border-grey-darkest border-b-2"/></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Connects to the Redux in order to access the student object
const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Header);