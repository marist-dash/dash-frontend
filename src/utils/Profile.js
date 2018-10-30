import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import InitialsCircle from "./InitialsCircle";
import LogoutButton from "./LogoutButton";
import {FaFileAlt, FaChalkboardTeacher} from "react-icons/fa";

class Profile extends Component {

  render() {
    return (
      <div className="profile h-full pt-4 border-indigo-light border-l-4 shadow-lg text-grey-darkest bg-white">

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
          <div className="flex pb-6">
            <div className="w-2/5 pr-4 font-bold text-right">School</div>
            <div className="w-3/5">{this.props.student.school}</div>
          </div>


          {/* GPA */}
          <div className="flex pb-6">
            <div className="w-2/5 pr-4 font-bold text-right">GPA</div>
            <div className="w-3/5">{this.props.student.GPA}</div>
          </div>

          {/* Advisor(s) */}
          <div className="flex pb-4">
            <div className="w-2/5 pr-4 font-bold text-right">
              {this.props.student.advisors.length > 1 ? (
                <span>Advisors</span>
              ) : (
                <span>Advisor</span>
              )}
            </div>
            <div className="w-3/5 flex flex-col">
              {this.props.student.advisors.map( (advisor, index) =>
                <div key={index} className="pb-2">{advisor.firstName} {advisor.lastName}</div>
              )}
            </div>
          </div>

          {/* Major(s) */}
          <div className="flex pb-4">
            <div className="w-2/5 pr-4 font-bold text-right">
              {this.props.student.majors.length > 1 ? (
                <span>Majors</span>
              ) : (
                <span>Major</span>
              )}
            </div>
            <div className="w-3/5 flex flex-col">
              {this.props.student.majors.map( (major, index) =>
                <div key={index} className="pb-2">{major.name}</div>
              )}
            </div>
          </div>

          {/* Minor(s) */}
          {this.props.student.minors.length > 0 &&
          <div className="flex pb-4">
            <div className="w-2/5 pr-4 font-bold text-right">
              {this.props.student.minors.length > 1 ? (
                <span>Minors</span>
              ) : (
                <span>Minor</span>
              )}
            </div>
            <div className="w-3/5 flex flex-col">
              {this.props.student.minors.map((minor, index) =>
                <div key={index} className="pb-2">{minor.name}</div>
              )}
            </div>
          </div>
          }
        </div>

        {/* Helpful links */}
        <div className="flex flex-col py-12">
          <p className="pb-2 text-lg text-center text-grey-dark">Helpful Links</p>
          <div className="flex justify-center pb-4">
            <DegreeWorksButton />
          </div>
          <div className="flex justify-center pb-4">
            <ILearnButton />
          </div>
          <div className="flex justify-center">
            <LogoutButton/>
          </div>
        </div>

      </div>
    );
  }
}

const DegreeWorksButton = () => {
  const degreeWorksLink = "https://degreeworks.banner.marist.edu/dashboard/dashboard";
  return (
    <div>
      <a href={degreeWorksLink} target={"_blank"}>
        <button
          className="rounded shadow-md border border-indigo-light bg-grey-lightest text-indigo hover:bg-indigo-light hover:text-grey-lightest">
          <div className="flex">
            <div className="flex-1 py-2 px-2">
              DegreeWorks
            </div>
            <div className="flex-1 py-2 pr-2">
              <FaFileAlt/>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
};

const ILearnButton = () => {
  const iLearnLink = "https://ilearn.marist.edu/";
  return (
    <div>
      <a href={iLearnLink} target={"_blank"}>
        <button
          className="rounded shadow-md border border-indigo-light bg-grey-lightest text-indigo hover:bg-indigo-light hover:text-grey-lightest">
          <div className="flex">
            <div className="flex-1 py-2 px-2">
              iLearn
            </div>
            <div className="flex-1 py-2 pr-2">
              <FaChalkboardTeacher/>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Profile);