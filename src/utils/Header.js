import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class Header extends Component {
  render() {
    return (
      <div className="block sm:flex sm:justify-between xl:justify-around">

        {/* Left side */}
        <div>
          <p className="sm:text-left sm:pl-8 pt-8 text-3xl text-center text-grey-darkest">Dash</p>
          <p className="sm:text-left sm:pl-8 pt-1 text-center text-grey-dark">View your degree progress</p>
        </div>

        {/* Right side */}
        <div>
          <div className="flex justify-center">
            <div>
              {/* Name */}
              <p className="sm:pr-8 pt-10 text-center sm:text-right text-grey-darkest font-extrabold">
                {this.props.student.firstName} {this.props.student.lastName}
              </p>

              {/* CWID */}
              <p className="sm:pr-8 pt-1 text-center sm:text-right text-grey-dark">
                {this.props.student.CWID}
              </p>
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