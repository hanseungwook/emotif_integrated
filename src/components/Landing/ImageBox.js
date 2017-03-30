import React, { Component, PropTypes } from 'react';

export default class ImageBox extends Component {

  render(){
    return(
      <div className='img-box'>
          <img className='img-hero' src={this.props.img.src}
             alt={this.props.img.alt} />
      </div>
    );
  }
}


ImageBox.propTypes = {
  img: PropTypes.object
};
