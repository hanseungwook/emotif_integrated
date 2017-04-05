import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : new Array(this.props.options.length).fill(0),
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleUnselection = this.handleUnselection.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    let this_state_val = JSON.stringify(this.state.selected);
    let next_state_val = JSON.stringify(nextState.selected);
    return this_state_val !== next_state_val;
  }

  handleSelection(e){
    let target_value = parseInt(e.target.id);
    let selected     = update(this.state.selected, {
      $splice: [[target_value,1,1]]
    });
    this.setState({ selected: selected});
  }

  handleUnselection(e){
    let target_value = parseInt(e.target.id);
    let selected     = update(this.state.selected, {
      $splice: [[target_value,1,0]]
    });
    this.setState({selected: selected});
  }

  render() {
    const selected        = this.state.selected;
    const options         = this.props.options;
    const checkbox_items  = options.map((option,index) =>
      <div key={option}
           id ={index}
           className =
           {'' + (selected[index]?('selected '):('')) + 'checkbox-option'}
           onClick  = {(e) =>(selected[index]? this.handleUnselection(e):
                                               this.handleSelection(e))}>
           {option}
      </div>
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
