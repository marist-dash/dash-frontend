import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {FaHome, FaChartPie, FaQuestionCircle} from 'react-icons/fa';

class Footer extends Component {

  render() {
    return (
      <footer className='w-full flex justify-around sm:justify-center fixed pin-b text-center bg-indigo-light'>

        {/* Nav Buttons */}

        <Link to="/" className="text-4xl mt-2 sm:mx-20 rounded-full text-white hover:text-grey">
          <FaHome/>
        </Link>
        
        <Link to="/charts" className="text-4xl mt-2 sm:mx-20 rounded-full text-white hover:text-grey">
          <FaChartPie/>
        </Link>

        <Link to="/help" className="text-4xl mt-2 sm:mx-20 rounded-full text-white hover:text-grey">
          <FaQuestionCircle/>
        </Link>

      </footer>
    )
  }
}

export default Footer;
