import React, {Component} from 'react';
import {FaRegCheckCircle, FaTimesCircle} from "react-icons/fa";
import connect from "react-redux/es/connect/connect";

class Requirements extends Component {
  render() {

    // create local requirements variable from Redux student object
    const requirements = this.props.student.requirements;

    return (
      <div className="w-full dash-base-width p-4 m-4 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white">
        <p className="text-center font-bold text-lg text-grey-darkest">Requirements</p>
        <Requirement name={"Breadth"} status={requirements.hasBreadth}/>
        <Requirement name={"Pathway"} status={requirements.hasPathway}/>
        <Requirement name={"Foundation"} status={requirements.hasFoundation}/>
        <Requirement name={"Major Requirements"} status={requirements.hasMajor}/>
        <Requirement name={"Honors Program"} status={requirements.hasHonors}/>
        <Requirement name={"Minimum Degree Credits"} status={requirements.hasMinCredits}/>
        <Requirement name={"2.0 GPA Requirement"} status={requirements.has20GPA}/>
        <Requirement name={"Minium GPA"} status={requirements.hasMinGPA}/>
        <Requirement name={"Minium Liberal Arts Credits"} status={requirements.hasMinLibArts}/>
        <Requirement name={"Skill Requirement"} status={requirements.hasSkill}/>
        <Requirement name={"Last 30 Credits at Marist"} status={requirements.isLast30Credits}/>
      </div>
    );
  }
}

const Requirement = (props) => {
  if (props.status === "NA") {
    return null;
  } else {
    return (

      <div className="flex flex-row my-4 py-1 rounded bg-grey-light">

        <div className="flex-shrink">
          {props.status === "COMPLETE" ? (
            <FaRegCheckCircle className="mt-1 ml-2 text-2xl text-green-dark opacity-75"/>
          ) : (
            <FaTimesCircle className="mt-1 ml-2 text-2xl text-red opacity-75"/>
          )
          }
        </div>
        <div className="flex-1">
          <p className="mt-2 text-center text-grey-darkest text-lg"> {props.name}</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Requirements);