import React, { Component, PropTypes } from 'react';
import ShapeImg from './ShapeImg';

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
    let target_value = (e.target.id).split('-');
    let value = parseInt(target_value[1]);
    console.log(value);
    this.setState({pri_select : value});
  }

  handlePrimaryUnselection(e){
    console.log('handlePrimaryUnselection');
    let target_value = (e.target.id).split('-');
    let value = parseInt(target_value[1]);
    if (this.state.pri_select     !== value){
    this.setState({pri_select : value,
                  sec_select  : 0});
    } else {
      this.setState({pri_select   : 0});
    }
  }

  handleSecondarySelection(e){
    console.log('handleSecondarySelection');
    let target_value = (e.target.id).split('-');
    let value = parseInt(target_value[1]);
    let id  = target_value[0];
    this.setState({sec_select : value});
    this.props.onFormUpdate({id:id, value:value})
  }

  handleSecondaryUnselection(e){
    console.log('handleSecondaryUnselection');
    let target_value = (e.target.id).split('-');
    let value = parseInt(target_value[1]);
    let id  = target_value[0];
    if (this.state.sec_select !== value)
      this.setState({sec_select : value});
    else
        this.setState({sec_select : 0});
    this.props.onFormUpdate({id:id, value:value})
  }

  render() {
    const pri_select  = this.state.pri_select;
    const sec_select  = this.state.sec_select;

    const label       = this.props.label;
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

    let handlePrimary = this.handlePrimarySelection;
    if (pri_select)
      handlePrimary   = this.handlePrimaryUnselection;

    let handleSecondary = this.handleSecondarySelection;
    if (sec_select)
      handleSecondary   = this.handlePrimaryUnselection;


    let optionClass = type;
    let isShape = (type === 'shape');
    if (type === 'skin' || type === 'hair' || type === 'eye')
      optionClass = optionClass + ' color';


    const primary_items = primary.map((item) =>
      <div ref = {item.toString()}
           key       = {item.toString()}
           className = {type + item.toString() + ' option' +
                       ((item === pri_select) ?' selected':' ') +
                       ((pri_select && item !==pri_select)?' nonselected':' ')
                     }
           onClick   = {(e) => handlePrimary(e)}
           id     = {type + '-' + item.toString()}>
           <ShapeImg id={type + '-' + item.toString()} type={type} />
     </div>
    );
    console.log('secondary_indices', secondary_indices);


    const secondary_items = (pri_select===0)?'':secondary_indices.map((item) =>
      <div key        = {item.toString()}
           className  = {type + item.toString() + ' option' +
                        ((item === sec_select) ?' selected': ' ') +
                        ((sec_select && item !== sec_select)?' nonselected':' ')
                      }
           onClick   = {(e) => handleSecondary(e)}
           id        = {type + '-' + item.toString()} >
           <ShapeImg id={type + '-' + item.toString()} type={type} />
      </div>
    );

    console.log('secondary-items', secondary_items);
    return (
        <div className={type + ' pref-container'}>
          <div className='container-label'>{label}</div>
          <div className= {optionClass + ' options primary'}>
                {primary_items}
          </div>
          <div className= {optionClass + ' options secondary' + (pri_select?' show':'')}>
              {pri_select?(secondary_items):('')}
          </div>
         </div>
    );
  }
}



Selector.propTypes = {
  label      : PropTypes.string,
  type       : PropTypes.string,
  primary    : PropTypes.array,
  secondary  : PropTypes.number,
  pri_select : PropTypes.number,
  sec_select : PropTypes.number
};
