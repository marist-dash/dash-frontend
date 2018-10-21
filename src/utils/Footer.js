import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FaHome, FaChartPie, FaQuestionCircle, FaSignOutAlt} from 'react-icons/fa';

class Footer extends Component {

  render() {
    return (
      <footer className='w-full fixed pin-b pt-2 text-center bg-indigo-light'>

        {/* Nav Buttons */}
        <Link to="/" className="text-4xl mb-1rounded-full text-white hover:text-grey">
          <FaSignOutAlt/>
        </Link>

        <Link to="/overview" className="text-4xl mb-1 mx-16 rounded-full text-white hover:text-grey">
          <FaHome/>
        </Link>
        
        <Link to="/help" className="text-4xl mb-1 rounded-full text-white hover:text-grey">
          <FaChartPie/>
        </Link>

        <Link to="/help" className="text-4xl mb-1 mx-16 rounded-full text-white hover:text-grey">
          <FaQuestionCircle/>
        </Link>

      </footer>
    )
  }
}

export default Footer;
