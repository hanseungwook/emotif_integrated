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
    let target_value = (e.target.id).split('-');
    let value = parseInt(target_value[1]);
    let id    = target_value[0];
    let selected     = update(this.state.selected, {
      $splice: [[value,1,1]]
    });
    this.setState({ selected: selected});
    this.props.onFormUpdate({id:id, value:selected})

  }

  handleUnselection(e){
    let target_value = (e.target.id).split('-');
    let value = parseInt(target_value[1]);
    let id    = target_value[0];
    let selected     = update(this.state.selected, {
      $splice: [[value,1,0]]
    });
    this.setState({selected: selected});
    this.props.onFormUpdate({id:id, value:selected})
  }



  render() {
    const name            = this.props.name;
    const selected        = this.state.selected;
    const options         = this.props.options;
    const checkbox_items  = options.map((option,index) =>
      <div key={name + '-' + index}
           id ={name + '-' + index}
           className =
           {'' + (selected[index]?('selected '):('')) + ((this.props.type)+ ' option')}
           onClick  = {(e) =>(selected[index]? this.handleUnselection(e):
                                               this.handleSelection(e))}>
           {option}
      </div>
    );

    return (
      <div className={(this.props.type)+ ' options pref-container'}>
      <div className='container-label'>{this.props.label}</div>
        {checkbox_items}
      </div>
    );
  }
}



Checkbox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string

};
