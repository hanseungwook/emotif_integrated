import React, { Component, PropTypes } from 'react';

export default
class ImageBox extends Component {

  render(){
      <div className="img_box">
        <img src=
          {src: this.props.src
           alt: this.props.alt}
        >
      </div>
  }
}



ImageBox.propTypes = {
  src: React.PropTypes.string
  alt: React.PropTypes.string
}
