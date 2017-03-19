import React, { Component, PropTypes } from 'react';
import QuoteBox from './QuoteBox';
import Values from './Values';

export default
class Manifesto extends Component {


  render(){
    let quote = {
      author  = 'Alber Ebaz',
      text    = 'Pure, intense emotions.\n It’s not about design.\nIt’s about feelings.'
    };

    let values = [
      'Clothes should complement the shape of your body',
      'Clothes should express your Identity',
      'Clothes should be made ethically',
      'Quality solely should determine price',
      'Designers should have complete creative freedom',
      'Customers should decide what clothes are produced',
    ];

    return (
      <div className='pane'>
        <QuoteBox {quote : this.props.quote} />
        <Values   {values: this.props.values}/>
      </div>

    )
  }
}

Manifesto.propTypes = {
  quote  : React.PropTypes.object,
  values : React.PropTypes.array
  
}
