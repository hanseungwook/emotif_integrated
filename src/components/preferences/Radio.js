import React, { Component, PropTypes } from 'react';

export default class Radio extends Component{
  constructor(props) {
    super(props);
    this.state = { selected : this.props.options[0]};
    this.handleSelection = this.handleSelection.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selected !== nextState.selected;
  }

  handleSelection(e){
    let target_value = e.target.id;
    this.setState({selected: target_value});
  }

  render() {
    const selected = this.state.selected;
    const options  = this.props.options;
    const items    = options.map((item) =>
      <div id={item} key={item} onClick={(e) => this.handleSelection(e)}
           className={'radio-option' + ((item===selected)?' selected':'')}>
              {item}
      </div>
    );
    return (
      <div className='radio'>{items}</div>
    );
  }
}

Radio.propTypes = {
  options: PropTypes.array
};
