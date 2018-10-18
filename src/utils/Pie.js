import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const data = [
  ['Section', 'Completed Credits'],
		['Major Credits', 30],
//	['Major 2', maj2Creds],
//	['Major 3',     0],
		['Minor Credits', 60],
//	['Minor 2', min2Creds],
//	['Minor 3',     1],
		['Core Credits', 20],
		['Incomplete Credits', 10]
	
];
const options = {
  height: 400,
						pieHole: 0.55,
						pieSliceBorderColor: 'black',
            backgroundColor: '#F1F5F8',
						slices: {
							0: { color: '#9B2335'},
							5: { color: '#DFCFBE'},
							4: { color: '#55B4B0'},
							3: { color: '#E15D44'},
							2: { color: '#C3447A'},
							1: { color: '#98B4D4'}
            }
};

class Pie extends React.Component {
  render() {
    return (
      <div className="Pie">
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Pie />, rootElement);

export default Pie;