import React, { Component, PropTypes } from 'react';

export default

class Values extends Component {
  render(){
    return (
      <div className='values'>
        <div className='values'>
          {this.props.values.map((value) => (<h3>value</h3>))}
        </div>
      </div>
    )
  }
}

Values.propTypes = {
  values : React.PropTypes.array
}
