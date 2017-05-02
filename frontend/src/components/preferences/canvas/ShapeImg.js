import React, { Component } from 'react';

export default class ShapeImg extends Component {
  render(){
    if (this.props.type === 'shape'){
      return(<img id={this.props.id} className='shape-img'/>)
    }else{
      return null;
    }
  }
}
