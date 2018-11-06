import React from "react";
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";
import connect from "react-redux/es/connect/connect";
import {FaCircle, FaArrowRight, FaArrowLeft} from "react-icons/fa";

const colors = ["#5661B3", "#E3342F"];

class Pies extends React.Component {
  constructor(props) {
    super();

    const degreeProgress = props.student.degreeProgress;
    // credits applied cannot be more than credits required
    if (degreeProgress.creditsRequired <= degreeProgress.creditsApplied) {
      degreeProgress.creditsApplied = degreeProgress.creditsRequired;
    }

    var degreeWorksPies = [];

    degreeWorksPies.push({
      name: "Total Credits",
      type: null,
      credits: [
        {
          name: 'Credits Applied',
          value: props.student.degreeProgress.creditsApplied,
        },
        {
          name: 'Credits Missing',
          value: props.student.degreeProgress.creditsRequired - props.student.degreeProgress.creditsApplied
        }
      ]
    });

    // push majors to pie array
    props.student.majors.forEach( major => {

      // add check for when student has more credits than required
      if (major.creditsRequired <= major.creditsApplied) {
        major.creditsApplied = major.creditsRequired;
      }
      degreeWorksPies.push({
        name: major.name,
        type: "Major",
        credits: [
          {
            name: 'Credits Applied',
            value: major.creditsApplied
          },
          {
            name: 'Credits Missing',
            value: major.creditsRequired - major.creditsApplied
          }
        ]
      })
    });

    // push minors to pie array
    props.student.minors.forEach( minor => {
      // add check for when student has more credits than required
      if (minor.creditsRequired <= minor.creditsApplied) {
        minor.creditsApplied = minor.creditsRequired;
      }
      degreeWorksPies.push({
        name: minor.name,
        type: "Minor",
        credits: [
          {
            name: 'Credits Applied',
            value: minor.creditsApplied
          },
          {
            name: 'Credits Missing',
            value: minor.creditsRequired - minor.creditsApplied
          }
        ]
      })
    });

    this.state = {
      degreeProgress: degreeProgress,
      degreeWorksPies: degreeWorksPies,
      currentPieIndex: 0
    };
  }

  changePie = (goForward) => {
    const index = this.state.currentPieIndex;
    const pies = this.state.degreeWorksPies;

    if (goForward) {
      if (index === pies.length - 1) {
        this.setState({ currentPieIndex: 0});
      } else {
        this.setState({ currentPieIndex: 1 + this.state.currentPieIndex });
      }
    } else {
      if (index === 0) {
        this.setState({ currentPieIndex: this.state.degreeWorksPies.length - 1});
      } else {
        this.setState({ currentPieIndex: this.state.currentPieIndex - 1});
      }
    }
  };



  render() {

    const index = this.state.currentPieIndex;
    const pies = this.state.degreeWorksPies;

    return (
      <div className="w-full dash-base-width p-4 m-4 border-t-4 border-indigo-light rounded-b-lg shadow-lg bg-white">

        {/* Display the title of the pie, ex: Computer Science Major Progress */}
        <p className="h-12 text-center font-bold text-lg text-grey-darkest">{pies[index].name} {pies[index].type} Progress</p>


        {/* Arrows */}
        <div className="flex text-4xl bg-grey-light rounded-lg text-center">
          <button className="w-1/2 pt-1 text-grey-darkest hover:text-red-light hover:bg-grey rounded-l-lg border-r-2 border-grey"
                  onClick={() => this.changePie(false)}>
            <FaArrowLeft/>
          </button>
          <button className="w-1/2 pt-1 text-grey-darkest hover:text-indigo hover:bg-grey rounded-r-lg"
                  onClick={ () => this.changePie(true)}>
            <FaArrowRight/>
          </button>
        </div>

        {/* The Pie */}
        <div className="flex justify-center">
          {/* % in middle */ }
          <div className="absolute my-24 text-grey-darkest bg-transparent">
            <div className="flex justify-center text-6xl pt-6 pl-4">
              <div className="">{Math.floor(pies[index].credits[0].value / (pies[index].credits[0].value + pies[index].credits[1].value) * 100)}</div>
              <div className="text-3xl mt-2">%</div>
            </div>
          </div>


          <div className="flex" style={{width: '100%', height: '20rem'}}>
            <ResponsiveContainer height="100%" width="100%">
              <PieChart margin={{top: -25, right: -30, left: -30, bottom: -25}} >
                <Pie
                  dataKey="value"
                  data={this.state.degreeWorksPies[this.state.currentPieIndex].credits}
                  paddingAngle={2}
                  innerRadius={90}
                >
                  {
                    this.state.degreeWorksPies[this.state.currentPieIndex].credits.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)
                  }
                </Pie>
                <Tooltip/>

              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* legend */}
        <div className="flex flex-col py-4 bg-grey-light rounded-lg">
          <div className="flex justify-center pb-4 text-3xl text-indigo-dark">
            <div className="px-2">Credits Applied</div>
            <FaCircle/>
          </div>
          <div className="flex justify-center text-3xl text-red">
            <div className="px-2">Credits Missing</div>
            <FaCircle/>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Pies);