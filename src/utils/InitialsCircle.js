import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class InitialsCircle extends Component {

  constructor() {
    super();
    this.state = {
      showOptions: false
    };
  };

  handleClick = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  render() {
    return(
      <div className="flex">
        <button className="rounded-full h-16 w-16 flex items-center justify-center bg-red-light shadow-md"
                onClick={ () => this.handleClick()}>
          <p className="mt-1 text-red-lightest text-3xl tracking-tight">
            {this.props.student.firstName.charAt(0)}{this.props.student.lastName.charAt(0)}
          </p>
        </button>


      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(InitialsCircle);


