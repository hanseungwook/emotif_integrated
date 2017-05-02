import {FORM_UPDATE, FORM_SUBMIT, FORM_REQUEST, SIGNUP_FAILURE} from './preferencesActions';
import update from 'react/lib/update';

const initialState = {
  form              : {},
  isAuthenticated   : true,
  isFetching        : false,
  errorMessage      : ''
};


const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      return update(state, {
        form: {
          [action.id]: { $set: action.value}
        }
      });
    case FORM_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: true
      });
    case FORM_SUBMIT:
      return Object.assign({}, state, {
        isAuthenticated: true,
        errorMessage: ''
      });
      case SIGNUP_FAILURE:
        return Object.assign({}, state, {
          isAuthenticated: false,
          isFetching:false,
          errorMessage: ''
        });


    default:
      return state;
  }
};

export default preferencesReducer;
