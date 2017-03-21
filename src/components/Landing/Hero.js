import React, { Component, PropTypes } from 'react';
import ImageBox from './ImageBox';

export default class Hero extends Component {
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(){
    console.log('onSwitchPane');
    this.props.onSwitchPane(3);
  }

  render(){
    let button_text = 'Get Early Access';
    let tagline     = 'a fashion crowdfunding platform';
    // let img_path = '../../../images/hero/';
    const src1 = require('../../../images/hero/pants.png');
    const src2 = require('../../../images/hero/dress.png');
    const src3 = require('../../../images/hero/sweatshirt.png');
    let images =
                  [ { src: src1,
                      alt: 'pants.png',
                    },
                    { src: src2,
                      alt: 'dress.png',
                    },
                    { src: src3,
                      alt: 'sweatshirt.png',
                    } ];

    return(
      <div className='pane hero-pane'>
        <div className='images'>
          <ImageBox img={images[0]} />
          <ImageBox img={images[1]} />
          <ImageBox img={images[2]} />
        </div>
        <h2 className='tagline'>    {tagline}</h2>
        <button className='hero-button' onClick={() => this.handleButtonClick()}><span>{button_text}</span></button>
      </div>
    );
  }
}

Hero.propTypes =
{
  onSwitchPane: PropTypes.func.isRequired,
};
