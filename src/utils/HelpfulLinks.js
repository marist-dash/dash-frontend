//Sets the properties for the links for iLearn and DegreeRorks that pop up

//Import Statements
import React, { Component } from 'react';
import {FaChalkboardTeacher, FaFileAlt} from "react-icons/fa";
import LogoutButton from "./LogoutButton";

class HelpfulLinks extends Component {
  render() {
    return (
      //Displays the three links
      <div className="w-full dash-base-width p-4 m-4 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white">
        <p className="pb-4 text-center font-bold text-lg text-grey-darkest">Helpful Links</p>
        <div className="flex justify-center pb-4">
          <DegreeWorksButton />
        </div>
        <div className="flex justify-center pb-4">
          <ILearnButton />
        </div>
        <div className="flex justify-center">
          {/*Note that LogoutButton is defined in a different file, since it has to have more functionailty than a usual link*/}
          <LogoutButton/>
        </div>
      </div>
    );
  }
}

//Formatting and link for DegreeWorks
const DegreeWorksButton = () => {
  const degreeWorksLink = "https://degreeworks.banner.marist.edu/dashboard/dashboard";
  return (
    <div>
      <a href={degreeWorksLink} target={"_blank"}>
        <button
          className="rounded shadow-md border border-indigo-light bg-grey-lightest text-indigo hover:bg-indigo-light hover:text-grey-lightest">
          <div className="flex">
            <div className="flex-1 py-2 px-2">
              {/*Link Text*/}
              DegreeWorks
            </div>
            <div className="flex-1 py-2 pr-2">
              {/*Icon for the link*/}
              <FaFileAlt/>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
};

//Formatting and link for iLearn
const ILearnButton = () => {
  const iLearnLink = "https://ilearn.marist.edu/";
  return (
    <div>
      <a href={iLearnLink} target={"_blank"}>
        <button
          className="rounded shadow-md border border-indigo-light bg-grey-lightest text-indigo hover:bg-indigo-light hover:text-grey-lightest">
          <div className="flex">
            <div className="flex-1 py-2 px-2">
              {/*Link Text*/}
              iLearn
            </div>
            <div className="flex-1 py-2 pr-2">
              {/*Icon for the link*/}
              <FaChalkboardTeacher/>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
};

//Exports to Home
export default HelpfulLinks;