import React from "react";
import Jakes from '../component/vid/Jakes.mov'



class MyVideoComponent extends React.Component {
  render() {
    return (
      <video width="100%" height="100%" preload="auto">
        <source src={Jakes} type="video/mov" />
        Your browser does not support HTML5 video.
      </video>
    );
  }
}

export default MyVideoComponent