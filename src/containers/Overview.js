import React, {Component} from 'react';
import {FaRegCheckCircle, FaTimesCircle} from "react-icons/fa";
import InitialsCircle from "../utils/InitialsCircle";

class Overview extends Component {

  constructor() {
    super();
    this.state = {
      student: {
        firstName: 'Tyler',
        lastName: 'Galske',
        GPA: 3.55,
        CWID: 20064184,
        grade: "Senior",
        isUndergraduate: true,
        school: "Computer Science & Mathematics",
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
    return (
      <div className="w-full h-screen bg-grey-lighter">
        <Header firstName={this.state.student.firstName} lastName={this.state.student.lastName}
                CWID={this.state.student.CWID}/>

        <div className="flex justify-center">
          <Profile student={this.state.student}/>
          <RequirementsTab requirements={this.state.student.requirements}/>
        </div>



      </div>
    );
  }
}



const Profile = (props) => {
  return (
    <div className="profile h-full py-4 px-8 rounded-lg shadow-lg text-grey-darkest">

      <div className="flex justify-center">
        <InitialsCircle className="flex" firstName={props.student.firstName} lastName={props.student.lastName}/>
      </div>

      <p className="pt-3 font-bold text-center text-xl">{props.student.firstName} {props.student.lastName}</p>
      <p className="pt-1 text-center text-grey-dark">
        {
          props.student.isUndergraduate &&
          <span>Undergraduate {props.student.grade}</span>
        }
      </p>

      <div className="flex flex-col pt-5 text-lg">

        {/* School */}
        <div className="flex pb-4">
          <div className="font-bold w-10">School</div>
          <div className="pl-8">{props.student.school}</div>
        </div>


        {/* GPA */}
        <div className="flex pb-4">
          <div className="w-10 font-bold">GPA</div>
          <div className="pl-8">{props.student.GPA}</div>
        </div>

        {/* Majors and minors */}
        <Studies studies={props.student.majors} type={"Major"}/>
        <Studies studies={props.student.minors} type={"Minor"}/>

      </div>
    </div>
  );
};

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
        props.studies.map((study, index) => <p key={index} className="pt-1 pl-4 font-normal">{study}</p>)
      }
    </div>
  );
};

function Header(props) {
  return (
    <div className="block sm:flex sm:justify-between">

      {/* Left side */}
      <div>
        <p className="text-3xl text-center sm:text-left sm:pl-8 pt-8 text-grey-darkest">Overview</p>
        <p className="text-center sm:text-left sm:pl-8 pt-1 text-grey-dark">View your degree progress</p>
      </div>

      {/* Right side */}
      <div>
        {/* Name */}
        <p className="sm:pr-8 pt-10 text-center sm:text-right text-grey-darkest font-extrabold">
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
    <div className="w-80 p-4 m-8 pt-2 border-t-4 rounded-b-lg shadow-lg border-indigo-light bg-grey-lightest">
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
}


export default Overview;
