import React, {Component} from 'react';
import axios from 'axios';
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

const helpTextUrl = "https://s3.amazonaws.com/maristdash.tk/dash-help-text.json";

class Help extends Component {

  constructor() {
    super();
    this.state = {
      helpText: []
    }
  }

  componentDidMount() {
    axios.get(helpTextUrl)
      .then( (response) => {
        this.setState({
          helpText: response.data.helpText
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  toggleShowProps = (index) => {
    // copy array
    const helpText = this.state.helpText;
    // toggle showText
    helpText[index].showText = !helpText[index].showText
    // replace state array with the updated array
    this.setState({ helpText: helpText});
  };


  render() {
    if (this.state.helpText.length === 0) {
      return (
        <div className="flex justify-center pt-8">
          <div className="icon-spin"/>
        </div>
      );
    }
    return (
      <div>
        {/* Help Items */}
        <div className="flex justify-center p-4">
          <div className="flex flex-col max-w-lg p-2 bg-white rounded-lg shadow-lg">
            <p className="p-2 m-2 text-center text-3xl text-grey-darkest font-bold">Common questions about Dash</p>
            {
              this.state.helpText.map( (helpItem, index) => {
                return (
                  <button
                    onClick={() => this.toggleShowProps(index)}
                    key={index}
                    className="max-w-md m-2 p-2 rounded-lg text-grey-darkest bg-grey-light text-2xl text-left hover:bg-grey-lighter hover:border-grey border-2">

                    {/* Title and drop-down caret */}
                    <div
                      className="flex justify-between">
                      <div>{helpItem.title}</div>
                      {
                        helpItem.showText ? (
                          <div className="text-red-light"><FaAngleUp/></div>
                        ) : (
                          <div className="text-indigo"><FaAngleDown/></div>
                        )
                      }

                    </div>

                    {/* Text of help item */}
                    <div className="pt-2">
                      {
                        helpItem.showText &&
                        <p className="p-2 m-2 text-base lg:text-lg bg-white rounded-lg leading-loose border-2">{helpItem.text}</p>
                      }
                    </div>

                  </button>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}


export default Help;
