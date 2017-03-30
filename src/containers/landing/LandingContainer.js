// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
// import { connect }                     from 'react-redux';
// import { bindActionCreators }          from 'redux';

// import { joinWaitlist, switchPane }    from './LandingActions';
import LandingPage from '../../components/landing/LandingPage';

export class LandingContainer extends Component {
  render(){
    return(
      <LandingPage/>
    );
  }
}

// LandingContainer.propTypes = {
//   isAuthenticated : PropTypes.bool.isRequired
// }
// const mapPropToStates = (state) => {}
// const mapDispatchToProps = () => {}
// export default connect(mapPropToStates, mapDispatchToProps)(LandingContainer);
export default LandingContainer;
