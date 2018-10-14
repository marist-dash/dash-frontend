import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FaHome, FaChartPie, FaQuestion} from 'react-icons/fa';

class Footer extends Component {

  render() {
    return (
      <footer className='bg-indigo-light pt-2 border-t border-red-light'>

        {/* Nav Buttons */}
        <Link to="/" className="text-white text-4xl mb-1 mx-4 rounded-full hover:text-grey">
          <FaHome/>
        </Link>

        <Link to="/overview" className="text-white text-4xl mb-1 mx-4 rounded-full hover:text-grey">
          <FaChartPie/>
        </Link>

        <Link to="/help" className="text-white text-3xl mb-2 ml-8 rounded-full hover:text-grey">
          <FaQuestion/>
        </Link>

      </footer>
    )
  }
}

export default Footer;

