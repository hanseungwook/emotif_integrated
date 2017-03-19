import React, { Component, PropTypes } from 'react';
import ImageBox from './ImageBox';

export default
class Hero extends Component {


  render(){
    let img_path = '../../../images/hero/'

    <div className="pane">
      <ImageBox
        { src: img_path + 'pants.png'
          alt: 'pants.png'}
      />
      <ImageBox
        { src: img_path + 'dress.png'
          alt: 'dress.png'}
      />
      <ImageBox
        { src: img_path + 'sweathshirt.png'
          alt: 'sweathshirt.png' }
      />
      <h2>    {this.tagline}</h2>
      <button>{this.button_text}</button>
    </div>
  }
}

Hero.defaultProps =
{

}

Hero.propTypes =
{
  button_text : React.PropTypes.string
  tagline     : React.PropTypes.string
}
