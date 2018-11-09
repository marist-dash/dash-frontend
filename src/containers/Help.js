import React, {Component} from 'react';
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import connect from "react-redux/es/connect/connect";
const HtmlToReactParser = require('html-to-react').Parser;

class Help extends Component {

  constructor(props) {
    super();
    this.state = {
      helpText: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.helpText !== this.state.helpText) {
      this.setState({
        helpText: this.props.helpText
      });
    }
  }

  componentDidMount() {
    if (this.props.helpText) {
      this.setState({
        helpText: this.props.helpText
      })
    }
  }

  toggleShowProps = (index) => {
    // copy array
    const helpText = this.state.helpText;
    // toggle showText
    helpText[index].showText = !helpText[index].showText;
    // replace state array with the updated array
    this.setState({ helpText: helpText});
  };

  render() {
    const htmlToReactParser = new HtmlToReactParser();
    if (this.state.helpText.length > 0) {
      return (
        <div>
          <div className="flex justify-center p-4 mb-4">
            <div className="flex flex-col max-w-md p-2 bg-white rounded-lg shadow-lg">

              {/* FAQ title */}
              <p className="p-2 m-2 text-center text-3xl text-grey-darkest font-bold">Common questions about Dash</p>

              {/* Map through help items */}
              {
                this.state.helpText.map( (helpItem, index) => {
                  return (
                    <div key={index} className="border-b-2 border-grey py-2 mb-2">

                      <div
                        className="flex justify-between m-2 p-2 hoverableDiv text-grey-darkest text-2xl text-left"
                        onClick={() => this.toggleShowProps(index)}>
                        {/* Title */}
                        <div> {helpItem.title} </div>

                        {/* Drop down/up caret */}
                        <div>
                          {
                            helpItem.showText ? (
                              <div className="flex-1 text-red-light hover:text-grey-darkest">
                                <FaAngleUp/>
                              </div>
                            ) : (
                              <div className="flex-1 text-indigo hover:text-grey-darkest">
                                <FaAngleDown/>
                              </div>
                            )
                          }
                        </div>
                      </div>

                      {/* Text of help item */}
                      <div className="">
                        {
                          helpItem.showText &&
                          <p className="m-2 text-grey-darkest text-base lg:text-lg bg-white leading-loose">{htmlToReactParser.parse(helpItem.text)}</p>
                        }
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="flex justify-center pt-8">
        <div className="icon-spin"/>
      </div>
    );

  }
}


const mapStateToProps = (state) => ({
  helpText: state.helpText,
});

export default connect(mapStateToProps) (Help);
