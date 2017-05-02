import React, { Component, PropTypes } from 'react';

export default class Radio extends Component{
  constructor(props) {
    super(props);
    this.state = { selected : null};
    this.handleSelection = this.handleSelection.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selected !== nextState.selected;
  }

  handleSelection(e){
    let target_value = (e.target.id).split('-');
    let value = target_value[1];
    console.log(value)
    console.log(id)

    let id  = target_value[0];
    this.setState({selected: value});
    this.props.onFormUpdate({id:id,value:value})
  }

  render() {
    const selected = this.state.selected;
    const options  = this.props.options;
    const name     = this.props.name;
    const items    = options.map((item) =>
      <div id={name + '-' + item} key={item} onClick={(e) => this.handleSelection(e)}
           className={'radio-option' + ((item===selected)?' selected':'')}>
              {item}
      </div>
    );
    return (
      <div className='radio pref-container' >{items}</div>
    );
  }
}

Radio.propTypes = {
  options: PropTypes.array
};
