// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
// import { connect }                     from 'react-redux';
// import { bindActionCreators }          from 'redux';

// import { joinWaitlist, switchPane }    from './PreferencesActions';
import PreferencesPage from '../../components/preferences/PreferencesPage';

export class PreferencesContainer extends Component {
  render(){
    return(
      <PreferencesPage/>
    );
  }
}

// PreferencesContainer.propTypes = {}
// const mapPropToStates = (state) => {}
// const mapDispatchToProps = () => {}
//
// export default connect(mapPropToStates, mapDispatchToProps)(PreferencesContainer);

export default PreferencesContainer;
