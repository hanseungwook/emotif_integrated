import React, { Component, PropTypes } from 'react';
import ImageBox from './ImageBox';

export default class Hero extends Component {
  constructor(props){
    super(props);

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
                      // width: '170px',
                      // height: '350px',
                    },
                    { src: src2,
                      alt: 'dress.png',
                      // width: '240px',
                      // height: '315px',
                    },
                    { src: src3,
                      alt: 'sweatshirt.png',
                      // width: '294px',
                      // height: '301px',
                    } ];

    return(
      <div className='pane'>
        <div className='images'>
          <ImageBox img={images[0]} />
          <ImageBox img={images[1]} />
          <ImageBox img={images[2]} />
        </div>
        <h2 className='tagline'>    {tagline}</h2>
        <button className='hero-button'><span>{button_text}</span></button>
      </div>
    );
  }
}

Hero.propTypes =
{
  images      : PropTypes.array,
  tagline     : PropTypes.string
};
