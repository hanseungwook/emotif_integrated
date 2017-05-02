import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';
import { updateForm, submitForm }    from './preferencesActions';
import PreferencesPage from '../../components/preferences/PreferencesPage';

export class PreferencesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { onFormUpdate, onFormSubmit } = this.props;
    return(

      <PreferencesPage onFormUpdate={onFormUpdate}
                       onFormSubmit={onFormSubmit}
                       form={this.props.form}

      />
    );
  }
}


PreferencesContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  onFormUpdate: PropTypes.func,
  onFormSubmit: PropTypes.func,
  errorMessage: PropTypes.string
};


const mapStateToProps = (state) => {
  const { form, isAuthenticated, errorMessage } = state.preferencesReducer;
  return {
    form,
    isAuthenticated,
    errorMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    onFormUpdate: bindActionCreators(updateForm, dispatch),
    onFormSubmit: bindActionCreators(submitForm, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesContainer);
//
// export default PreferencesContainer;
