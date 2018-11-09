//Displays Student information: Name, Year, School, GPA, Advisor, Major, and Minor

//Import Statements
import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

class Profile extends Component {

  render() {
    return (
      <div className="w-full dash-base-width p-4 m-4 border-indigo-light border-t-4 shadow-lg rounded-b-lg text-grey-darkest bg-white">

        {/*Name*/}
        <p className="font-bold text-center text-xl">{this.props.student.firstName} {this.props.student.lastName}</p>
        {/*Year*/}
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
              {/*Checks to see if there is more than one advisor*/}
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
              {/*Checks to see if there is more than one major*/}
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
          {/*Checks to see if there is a minor at all. If not, it doesn't display*/}
          {this.props.student.minors.length > 0 &&
          <div className="flex pb-4">
            <div className="w-2/5 pr-4 font-bold text-right">
              {/*Checks to see if there is more than one minor*/}
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

      </div>
    );
  }
}

// Connects to the Redux in order to access the student object
const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Profile);