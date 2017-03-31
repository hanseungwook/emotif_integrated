import React, { Component, PropTypes } from 'react';

export default class Selector extends Component{

	render() {
		const type 			= this.props.type;
		const primary 	= this.props.primary;
		// const secondary = options.secondary;

		const primary_items = primary.map((item) =>
			<div key={item.toString()} className={type + item.toString() + ' color-opt'}></div>
		);

		return (
      <div className={type +'-color selector'}>
				<div className='input-label'>{type}</div>
				{primary_items}
			</div>
		);
	}
}

Selector.propTypes = {
	type: PropTypes.string,
	primary: PropTypes.array
};
