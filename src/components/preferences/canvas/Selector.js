import React, { Component, PropTypes } from 'react';

export default class Selector extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pri_select : 0,
      sec_select : 0
    };
    this.handlePrimarySelection     = this.handlePrimarySelection.bind(this);
    this.handleSecondarySelection   = this.handleSecondarySelection.bind(this);
    this.handlePrimaryUnselection   = this.handlePrimaryUnselection.bind(this);
    this.handleSecondaryUnselection = this.handleSecondaryUnselection.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let pri_changed = (nextState.pri_select !== this.state.pri_select);
    let sec_changed = (nextState.sec_select !== this.state.sec_select);
    return (pri_changed || sec_changed);
  }

  handlePrimarySelection(e){
    console.log('handlePrimarySelection');
    let target_value = parseInt(e.target.id);
    this.setState({pri_select : target_value});
  }

  handlePrimaryUnselection(e){
    console.log('handlePrimaryUnselection');
    let target_value = parseInt(e.target.id);
    if (this.state.pri_select     !== target_value){
    this.setState({pri_select : target_value,
                  sec_select  : 0});
    } else {
      this.setState({pri_select   : 0});
    }
  }

  handleSecondarySelection(e){
    console.log('handleSecondarySelection');
    let target_value = parseInt(e.target.id);
    this.setState({sec_select : target_value});
  }

  handleSecondaryUnselection(e){
    console.log('handleSecondaryUnselection');
    let target_value = parseInt(e.target.id);
    if (this.state.sec_select !== target_value)
      this.setState({sec_select : target_value});
    else
        this.setState({sec_select : 0});
  }

  render() {
    const pri_select  = this.state.pri_select;
    const sec_select  = this.state.sec_select;

    const type        = this.props.type;
    const primary     = this.props.primary;
    const secondary   = this.props.secondary;
    const classes     = [type + ' selector'];

    let secondary_indices = [];

    if (pri_select) {
      let start = pri_select - Math.floor(secondary/2);
      let end   = pri_select + Math.ceil(secondary /2);
      for(start; start < end; start++)
        secondary_indices.push(start);
    }

    if (sec_select)
        classes.push('sec-selected');
    else if (pri_select)
        classes.push('pri-selected');


    let handlePrimary = this.handlePrimarySelection;
    if (pri_select)
      handlePrimary   = this.handlePrimaryUnselection;

    let handleSecondary = this.handleSecondarySelection;
    if (sec_select)
      handleSecondary   = this.handlePrimaryUnselection;


    const primary_items = primary.map((item) =>
      <div key       = {item.toString()}
           className = {type + item.toString() + ' pri-color-opt' +
                       ((item === pri_select) ?' selected':'')}
           onClick   = {(e) => handlePrimary(e)}
           id     = {item.toString()}>
     </div>
    );
    console.log('secondary_indices', secondary_indices);


    const secondary_items = (pri_select===0)?'':secondary_indices.map((item) =>
      <div key        = {item.toString()}
           className  = {type + item.toString() + ' sec-color-opt' +
                        ((item === sec_select) ?' selected':'')}
           onClick   = {(e) => handleSecondary(e)}
           id        = {item.toString()} >
      </div>
    );

    console.log('secondary-items', secondary_items);
    return (
      <div className={classes.join(' ')}>
        <div className='input-label'>{type}</div>
        <div className= 'primary-items'>
              {primary_items}
        </div>
        <div className= 'secondary-items'>
            {pri_select?(secondary_items):('')}
        </div>
       </div>
    );
  }
}

Selector.propTypes = {
  type       : PropTypes.string,
  primary    : PropTypes.array,
  secondary  : PropTypes.number,
  pri_select : PropTypes.number,
  sec_select : PropTypes.number
};
