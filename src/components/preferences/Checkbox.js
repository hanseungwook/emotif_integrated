import React, { Component, PropTypes } from 'react';

export default class Checkbox extends Component
{
	render() {
		const options 				= this.props.options;
		const checkbox_items	= options.map((option) =>
			<div key={option} className='checkbox-option'>{option}</div>
		);
		return (
      <div className='checkbox'>
			<div className='input-label'>{this.props.name}</div>
				{checkbox_items}
			</div>
		);
	}
}

Checkbox.propTypes = {
	options: PropTypes.array,
	name: PropTypes.string

};
