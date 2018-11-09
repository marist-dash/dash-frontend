//Sets the properties for the footer, with the buttons to switch between the home and FAQ page

//Import Statements
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FaHome, FaQuestionCircle} from 'react-icons/fa';

class Footer extends Component {

  render() {
    return (
      <footer className='w-full flex justify-center fixed pin-b text-center bg-indigo-light'>

        {/* Navigation Buttons */}

        <Link to="/" className="text-4xl mt-2 mx-16 rounded-full text-white hover:text-grey">
          <FaHome/>
        </Link>

        <Link to="/help" className="text-4xl mt-2 mx-16 rounded-full text-white hover:text-grey">
          <FaQuestionCircle/>
        </Link>

      </footer>
    )
  }
}

export default Footer;
