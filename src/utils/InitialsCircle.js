//Sets the properties for the circle with the users initials that is displayed

//Import Statements
import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class InitialsCircle extends Component {

  constructor() {
    super();
    this.state = {
      showOptions: false
    };
  };
  {/*Setup work for a drop down menu when the user clicks that allows logout. Not done*/}
  handleClick = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  render() {
    return(
      <div className="flex">
        <button className="rounded-full h-16 w-16 flex items-center justify-center bg-red-light shadow-md"
         onClick={ () => this.handleClick()}>
          <p className="mt-1 text-red-lightest text-3xl tracking-tight">
            {/*Displays the Users Initials*/}
            {this.props.student.firstName.charAt(0)}{this.props.student.lastName.charAt(0)}
          </p>
        </button>
      </div>
    )
  }
}

// Connects to the Redux in order to access the student object
const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(InitialsCircle);