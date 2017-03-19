import React, { Component, PropTypes } from 'react';

export default
class DynamicText extends Component {
  render(){
    return (
        <h2 className='dynamic-text'>
          {this.base}
          <b>
          {this.ending}
          </b>
        </h2>
    );
  }
}

DynamicText.propTypes = {
  base   : React.PropTypes.string.isRequired,
  endings: React.PropTypes.obj.isRequired,
  ending : React.PropTypes.string.isRequired,

};
