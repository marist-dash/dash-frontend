import React, {Component} from 'react';
import Loading from "../utils/Loading";

class Dog extends Component {
  render() {
    return (
      <Loading showSpinner={false}/>
    );
  }
}

export default Dog;
