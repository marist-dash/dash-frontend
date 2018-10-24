import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import InitialsCircle from "./InitialsCircle";

class Profile extends Component {
  render() {
    return (
      <div className="profile h-full p-4 m-8 pt-2 border-t-4 border-indigo-light rounded-b-lg shadow-lg text-grey-darkest bg-white">

        <div className="flex justify-center">
          <InitialsCircle className="flex"/>
        </div>

        <p className="pt-3 font-bold text-center text-xl">{this.props.student.firstName} {this.props.student.lastName}</p>
        <p className="pt-1 text-center text-grey-dark">
          {
            this.props.student.isUndergraduate &&
            <span>Undergraduate {this.props.student.grade}</span>
          }
        </p>

        <div className="flex flex-col pt-5 text-lg">

          {/* School */}
          <div className="flex pb-4">
            <div className="font-bold w-10">School</div>
            <div className="pl-8">{this.props.student.school}</div>
          </div>


          {/* GPA */}
          <div className="flex pb-4">
            <div className="w-10 font-bold">GPA</div>
            <div className="pl-8">{this.props.student.GPA}</div>
          </div>

          {/* Majors and minors */}
          <Studies studies={this.props.student.majors} type={"Major"}/>
          <Studies studies={this.props.student.minors} type={"Minor"}/>

        </div>
      </div>
    );
  }
}

// Represents a major or minor
const Studies = (props) => {
  return (
    <div className="font-bold pb-4">
      {props.studies.length > 1 ? (
        <span>{props.type}s</span>
      ) : (
        <span>{props.type}</span>
      )}
      {
        props.studies.map((study, index) => <p key={index} className="pt-1 pl-4 font-normal">{study.name}</p>)
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Profile);