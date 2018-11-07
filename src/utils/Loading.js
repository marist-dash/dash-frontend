import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import axios from 'axios';
import {FaAngleRight} from "react-icons/fa";

const mediaEndpoint = "https://random.dog/woof.json";

class Loading extends Component {

  constructor() {
    super();
    const isMobile = window.innerWidth <= 800 && window.innerHeight <= 600;
    this.state = {
      mediaUrl: '',
      isImage: true,
      isMobile: isMobile
    };
  }

  componentDidMount() {
    this.fetchMediaItem();
  }

  fetchMediaItem = () => {
    axios.get(mediaEndpoint)
      .then( (response) => {
        this.setState({ mediaUrl: response.data.url }, () => {
          // get file type
          const fileExtension = this.state.mediaUrl
            .substring(this.state.mediaUrl.length - 3, this.state.mediaUrl.length)
            .toLowerCase();

          // check for image or video
          if (fileExtension === 'jpg' || fileExtension === 'png') {
            this.setState({ isImage: true });
          } else {
            if (this.state.isMobile) {
              // don't show videos on mobile (including gifs)
              this.fetchMediaItem();
            } else {
              this.setState({ isImage: false });
            }
          }
        });
      }).catch( (response) => {
    });
  };

  render() {

    const mediaStyles = {
      objectFit: 'cover',
      width: 'auto',
    };
    mediaStyles.height = this.state.isMobile ? '20rem' : '30rem'

    return (
      <div>

        <div className="flex justify-center mx-2 rounded-lg">
          {
            this.state.isImage ? (
              <img style={mediaStyles} src={this.state.mediaUrl} className="rounded-lg shadow-lg" alt="doggo"/>
            ) : (
              <video style={mediaStyles} controls autoPlay className="rounded-lg shadow-lg" >
                <source src={this.state.mediaUrl} type="video/mp4"/>
              </video>
            )
          }
        </div>
        <div className="flex justify-center pt-4 pb-8">
          <button className="pl-3 text-5xl text-indigo-light bg-grey-lighter rounded-lg hover:text-indigo"
                  onClick={ () => this.fetchMediaItem()}>
            <div className="flex items-center"> <p>next</p> <FaAngleRight /> </div>
          </button>
        </div>

        <div className="flex justify-center">
          <p className="h-4 text-center icon-spin"/>
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(Loading);


