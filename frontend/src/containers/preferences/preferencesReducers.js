// import {} from './preferencesActions';

const initialState = {
  // atSection         : 0,
  // atQuestion        : 0,
  // formValues        : [],
  isAuthenticated   : true,
};


const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 0:
      return state;
    default:
      return state;
  }
};

export default preferencesReducer;
