import React, {Component, Fragment} from 'react';

class FrameVideo extends Component {

  render() {
    return (
     <Fragment>
       <iframe
         width="560"
         height="315"
         src={this.props.link}
         frameBorder="0"
         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
         ref={this.props.inputRef}
       />
     </Fragment>
    )
  }
}

export default FrameVideo;
