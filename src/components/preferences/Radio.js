import React, { Component, PropTypes } from 'react';

export default class Radio extends Component
{

	render() {
		const options = this.props.options;
		const items		= options.map((item) =>
			<div key={item} className='radio-option'>{item}</div>
		);
		return (
      <div className='radio'>
				{items}
			</div>
		);
	}
}

Radio.propTypes = {
	options: PropTypes.array
}
