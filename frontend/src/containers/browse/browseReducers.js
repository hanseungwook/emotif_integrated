import {
  PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE
} from './browseActions';

const browseReducer = (state = { isFetching: false, products: '', authenticated: false }, action) => {
  switch (action.type) {
  case PRODUCT_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    });
  case PRODUCT_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      products: action.products,
      authenticated: action.authenticated || false
    });
  case PRODUCT_FAILURE:
    return Object.assign({}, state, {
      isFetching: false
    });
  default:
    return state;
  }
};

export default browseReducer;