import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import axios from 'axios';
import {FaForward} from "react-icons/fa";

const mediaEndpoint = "https://random.dog/woof.json";

class Loading extends Component {

  constructor() {
    super();
    this.state = {
      mediaUrl: '',
      isImage: true
    }
  }

  componentDidMount() {
    this.fetchMediaItem();
  }

  fetchMediaItem = () => {
    axios.get(mediaEndpoint)
      .then( (response) => {
        this.setState({ mediaUrl: response.data.url });
        const fileExtension = this.state.mediaUrl
          .substring(this.state.mediaUrl.length - 3, this.state.mediaUrl.length)
          .toLowerCase();
        if (fileExtension === 'jpg' || fileExtension === 'png' || fileExtension === 'gif') {
          this.setState({ isImage: true });
        } else {
          this.setState({ isImage: false });
        }
      }).catch( (response) => {
    });
  };

  render() {

    const mediaStyles = {
      display: 'block',
      maxWidth: '30rem',
      maxHeight: '30rem',
      width: 'auto',
      height: 'auto',
    };

    return (
      <div>
        <div className="flex justify-center  py-8 text-5xl text-indigo">
          <FaForward onClick={ () => this.fetchMediaItem()} className="hover:text-indigo-dark"/>
        </div>
        <div className="flex justify-center pb-8">
          {
            this.state.isImage ? (
              <img src={this.state.mediaUrl} style={mediaStyles} className="rounded-lg shadow-lg" alt="doggo"/>
            ) : (
              <video style={mediaStyles} controls autoPlay className="rounded-lg shadow-lg" >
                <source src={this.state.mediaUrl} type="video/mp4"/>
              </video>
            )
          }

        </div>

        <div className="flex justify-center">
          <p className="text-center icon-spin"/>
        </div>


        <p className="text-center text-grey-darkest text-4xl">Loading your DegreeWorks report</p>


      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(Loading);


