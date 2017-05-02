import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callApi } from './browseActions';
import BrowsePage from '../../components/browse/BrowsePage';

class BrowseContainer extends Component {

    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(callApi('parse/functions/pullProducts', true));
    }


    render(){
        return <BrowsePage {...this.props}/>;
    }
}

BrowseContainer.propTypes = {
    data: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    onLogoutClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const { data }  = state;
    return{
        data
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        getProducts: bindActionCreators(callApi, dispatch),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);