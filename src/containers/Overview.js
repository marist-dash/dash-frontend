import React, {Component} from 'react';
import {FaRegCheckCircle, FaTimesCircle} from "react-icons/fa";

class Overview extends Component {

  constructor() {
    super();
    this.state = {
      student: {
        firstName: 'Tyler',
        lastName: 'Galske',
        GPA: 3.55,
        CWID: 20064184,
        majors: [
          "Computer Science"
        ],
        minors: [
          "Cybersecurity",
          "Information Technology",
          "Information Systems",
        ],
        requirements: {
          has20GPA: "COMPLETE",
          hasBreadth: "COMPLETE",
          hasFoundation: "COMPLETE",
          hasHonors: "NA",
          hasMajor: "INCOMPLETE",
          hasMinCredits: "INCOMPLETE",
          hasMinGPA: "COMPLETE",
          hasMinLibArts: "COMPLETE",
          hasPathway: "COMPLETE",
          hasSkill: "COMPLETE",
          isLast30Credits: "COMPLETE"
        }
      }
    };
  };

  render() {
    console.log(this.state.student);
    return (
      <div>
        <Header firstName={this.state.student.firstName} lastName={this.state.student.lastName}
                CWID={this.state.student.CWID}/>
        <RequirementsTab requirements={this.state.student.requirements}/>
      </div>
    );
  }
}

function Header(props) {
  return (
    <div className="block sm:flex sm:justify-between">

      {/* Left side header */}
      <div>
        <p className="text-3xl text-center sm:text-left sm:pl-8 pt-8 text-grey-darkest">Overview</p>
        <p className="text-center sm:text-left sm:pl-8 pt-1 text-grey-dark">View your degree progress</p>
      </div>

      {/* Right side header */}
      <div>
        {/* Name */}
        <p className="sml:pr-8 pt-10 text-center sm:text-right text-grey-darkest font-extrabold">
          {props.firstName} {props.lastName}
        </p>

        {/* CWID */}
        <p className="sm:pr-8 pt-1 text-center sm:text-right text-grey-dark">
          {props.CWID}
        </p>
      </div>
    </div>
  );
}

function RequirementsTab(props) {
  return (
    <div className="max-w-sm m-8 pt-2 border-t-4 border-indigo-light">
      <p className="text-center font-bold text-lg text-grey-darkest">Requirements</p>
      <Requirement name={"Breadth"} status={props.requirements.hasBreadth}/>
      <Requirement name={"Pathway"} status={props.requirements.hasPathway}/>
      <Requirement name={"Foundation"} status={props.requirements.hasFoundation}/>
      <Requirement name={"Major Requirements"} status={props.requirements.hasMajor}/>
      <Requirement name={"Honors Program"} status={props.requirements.hasHonors}/>
      <Requirement name={"Minimum Degree Credits"} status={props.requirements.hasMinCredits}/>
      <Requirement name={"2.0 GPA Requirement"} status={props.requirements.has20GPA}/>
      <Requirement name={"Minium GPA"} status={props.requirements.hasMinGPA}/>
      <Requirement name={"Minium Liberal Arts Credits"} status={props.requirements.hasMinLibArts}/>
      <Requirement name={"Skill Requirement"} status={props.requirements.hasSkill}/>
      <Requirement name={"Last 30 Credits at Marist"} status={props.requirements.isLast30Credits}/>
    </div>
  );
}

function Requirement(props) {
  if (props.status === "NA") {
    return null;
  } else {
    return (
      <div className="flex flex-row my-4 shadow-md rounded-lg bg-grey-lighter hover:bg-grey-light">
        <div className="flex-shrink">
          {props.status === "COMPLETE" ? (
            <FaRegCheckCircle className="mt-2 ml-12 text-4xl text-green-dark opacity-75"/>
          ) : (
            <FaTimesCircle className="mt-2 ml-12 text-4xl text-red opacity-75"/>
          )
          }
        </div>
        <div className="flex-1">
          <p className="my-4 -ml-8 text-center text-grey-darkest text-xl"> {props.name}</p>
        </div>
      </div>
    );
  }
}


export default Overview;
