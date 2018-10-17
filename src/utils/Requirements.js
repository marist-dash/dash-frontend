import React, {Component} from 'react';
import {FaRegCheckCircle, FaTimesCircle} from "react-icons/fa";

class Requirements extends Component {
  render() {
    return (
      <div className="w-80 p-4 m-8 pt-2 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white">
        <p className="text-center font-bold text-lg text-grey-darkest">Requirements</p>
        <Requirement name={"Breadth"} status={this.props.requirements.hasBreadth}/>
        <Requirement name={"Pathway"} status={this.props.requirements.hasPathway}/>
        <Requirement name={"Foundation"} status={this.props.requirements.hasFoundation}/>
        <Requirement name={"Major Requirements"} status={this.props.requirements.hasMajor}/>
        <Requirement name={"Honors Program"} status={this.props.requirements.hasHonors}/>
        <Requirement name={"Minimum Degree Credits"} status={this.props.requirements.hasMinCredits}/>
        <Requirement name={"2.0 GPA Requirement"} status={this.props.requirements.has20GPA}/>
        <Requirement name={"Minium GPA"} status={this.props.requirements.hasMinGPA}/>
        <Requirement name={"Minium Liberal Arts Credits"} status={this.props.requirements.hasMinLibArts}/>
        <Requirement name={"Skill Requirement"} status={this.props.requirements.hasSkill}/>
        <Requirement name={"Last 30 Credits at Marist"} status={this.props.requirements.isLast30Credits}/>
      </div>
    );
  }
}

const Requirement = (props) => {
  if (props.status === "NA") {
    return null;
  } else {
    return (
      <div className="flex flex-row my-4 shadow-md rounded bg-grey-lighter hover:bg-grey-light">
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

export default Requirements;