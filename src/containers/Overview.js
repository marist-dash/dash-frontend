import React, {Component} from 'react';

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
        ]
      }
    };
  };

  render() {
    return (
      <div>
        <h1 className="pl-4 pt-4 text-grey-darkest">Overview</h1>
        <p className="pl-4 pt-2 text-grey-dark">View your degree progress</p>

        <Header student={this.state.student}/>

      </div>
    );
  }
}

function Header(props) {
  return (
    <div>
      <p className="text-right">Lastname: {props.student.lastName}</p>
    </div>
  )
}

export default Overview;
