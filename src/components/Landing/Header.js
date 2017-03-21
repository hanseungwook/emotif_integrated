import React, { PropTypes, Component } from 'react';

export default class Header extends Component {
  constructor(props){
		super(props);
	}

  onNavClick(id) {
    console.log('onNavClick',id);

    this.props.onSwitchPane(id);
  }


  render(){
    return(
      <div className='header'>
        <div className='header-inner-box'>
          <div id='left'   className='header-link'
              onClick={() => this.onNavClick(2)} >manifesto</div>
          <div id='center'
              onClick={() => this.onNavClick(1)} >émotif</div>
          <div id='right'  className='header-link' >designers</div>
        </div>
      </div>
    );
  }
}

Header.propTypes =
{
  onSwitchPane: PropTypes.func.isRequired,
}
