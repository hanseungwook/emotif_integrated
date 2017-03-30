import { SET_VISIBILITY_FILTER, PRODUCTS_REQUEST, PRODUCTS_RECEIVE, PRODUCTS_FAILURE, VisibilityFilters } from './browseActions';

const browse = (state = { filter: VisibilityFilters[0], isFetching: false, products: '', authenticated: false}, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                filter: VisibilityFilters[action.id]
            });
        case PRODUCTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case PRODUCTS_RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                authenticated: action.authenticated || false
            });
        case PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
            });
        default:
            return state;
    }
}

export default browse;
