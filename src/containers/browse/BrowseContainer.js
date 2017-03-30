// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
// import { connect }                     from 'react-redux';
// import { bindActionCreators }          from 'redux';

// import {}    from './landingActions';
import BrowsePage from '../../components/browse/BrowsePage';

export class BrowseContainer extends Component {
  render(){
    return(
      <BrowsePage/>
    );
  }
}

// BrowseContainer.propTypes = {}
// const mapPropToStates     = (state) => {}
// const mapDispatchToProps  = () => {}
// export default connect(mapPropToStates, mapDispatchToProps)(BrowseContainer);
export default BrowseContainer;
