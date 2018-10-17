import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class OverviewHeader extends Component {
  render() {
    return (
      <div className="block sm:flex sm:justify-between xl:justify-around">

        {/* Left side */}
        <div>
          <p className="text-3xl text-center sm:text-left sm:pl-8 pt-8 text-grey-darkest">Overview</p>
          <p className="text-center sm:text-left sm:pl-8 pt-1 text-grey-dark">View your degree progress</p>
        </div>

        {/* Right side */}
        <div>
          {/* Name */}
          <p className="sm:pr-8 pt-10 text-center sm:text-right text-grey-darkest font-extrabold">
            {this.props.student.firstName} {this.props.student.lastName}
          </p>

          {/* CWID */}
          <p className="sm:pr-8 pt-1 text-center sm:text-right text-grey-dark">
            {this.props.student.CWID}
            20064184
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(OverviewHeader);