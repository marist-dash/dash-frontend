import React from "react";
import Chart from "react-google-charts";
import connect from "react-redux/es/connect/connect";

// Pie chart options
const options = {
  title: "",
  pieHole: 0.6,
  slices: [
    { color: "#5661B3"},
    { color: "#E3342F" },
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    trigger: 'selection',
    showColorCode: true
  },
  backgroundColor: 'transparent',
  pieSliceText: "value",
  pieSliceTextStyle: {
    color: "#FFF",
    fontSize: "20",
  },
  width: 350,
  height: 400,
  chartArea: {
    width: "100%",
    height: "80%"
  }
};

class Pie extends React.Component {
  constructor(props) {
    super();

    const degreeProgress = props.student.degreeProgress;
    // credits applied cannot be more than credits required because of Google Charts error
    if (degreeProgress.creditsRequired <= degreeProgress.creditsApplied) {
      degreeProgress.creditsApplied = degreeProgress.creditsRequired;

      // if credits applied == credits required, the pie text moves to middle
      // set text to transparent to hide it
      options.pieSliceTextStyle.color = 'transparent';
    }

    this.state = {
      degreeProgress: degreeProgress,
    };
  }


  render() {

    const credits = [
      ['Credits Applied', 'Remaining Credits'],
      ['Credits Applied', this.state.degreeProgress.creditsApplied],
      ['Credits Missing', this.state.degreeProgress.creditsRequired - this.state.degreeProgress.creditsApplied],
    ];

    return (
      <div>
        <div className="absolute h-50 w-48 my-24 mx-20 text-grey-darkest bg-white">
          <div className="flex justify-center text-6xl pt-16 pl-4">
            <div className="">{Math.floor((this.state.degreeProgress.creditsApplied / this.state.degreeProgress.creditsRequired) * 100)}</div>
            <div className="text-3xl mt-2">%</div>
          </div>
        </div>

        {/*<div className="absolute my-34 mx-34 text-grey-darkest text-center text-5xl">*/}
        {/*<p className="border-b-2 border-grey-dark text-indigo-dark">120</p>*/}
        {/*<p className="text-red-light">128</p>*/}
        {/*</div>*/}
        <Chart
          chartType="PieChart"
          data={credits}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  student: state.student
});

export default connect(mapStateToProps)(Pie);