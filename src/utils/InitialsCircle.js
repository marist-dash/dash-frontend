//Sets the properties for the circle with the users initials that is displayed

import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import LogoutButton from "./LogoutButton";

class InitialsCircle extends Component {

  constructor() {
    super();
    this.state = {
      showLogout: false
    };
  };

  handleClick = () => {
    this.setState({ showLogout: !this.state.showLogout });
  };

  render() {
    if (!this.props.student) {
      return null;
    }
    return(
      <div>
        <div className="flex justify-end">
          <div className="h-16 w-16 flex items-center justify-center hoverableDiv rounded-full  bg-red-light shadow-lg"
               onClick={ () => this.handleClick()}>
            {/* Initials */}
            <p className="mt-1 text-red-lightest text-3xl tracking-tight">
              {this.props.student.firstName.charAt(0)}{this.props.student.lastName.charAt(0)}
            </p>
          </div>
        </div>
        { this.state.showLogout &&
        <div className="fixed mt-1 pin-r xl:pin-none xl:-ml-5">
          <LogoutButton/>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(InitialsCircle);