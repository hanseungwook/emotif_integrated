// import fetch from 'isomorphic-fetch';
import URLSearchParams from 'url-search-params';
import Parse from 'parse';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


//*****************************  SIGNUP  *******************************//

Parse.initialize("emotifAppId");
Parse.serverURL = 'http://emotif-parse-dev.us-east-1.elasticbeanstalk.com/parse';

function requestSignup(creds) {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveSignup(user) {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  };
}

function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function signupUser(creds) {

  return dispatch => {
    dispatch(requestSignup(creds));
    console.log("email");
    let user = new Parse.User();

    user.signUp(null, {
      success: function(user) {
          console.log("logged in");
          dispatch(receiveSignup(user));
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        console.log("Error: " + error.code + " " + error.message);
        dispatch(signupError("error"));

      }
    });



  // return dispatch => {
    // dispatch(requestSignup(creds));
    // // return fetch('http://emotif-parse-dev.us-east-1.elasticbeanstalk.com/parse/classes/_User', config)
    // user.signUp(null)
    // .then(response =>
    //   response.json().then(user => ({ user, response }))
    // ).then(({ user, response }) =>  {
    //   // ERROR
    //   if (!response.ok) {
    //     dispatch(signupError(user.message));
    //     return Promise.reject(user);
    //   // SUCCESS
    //   } else {
    //     localStorage.setItem('id_token', user.id_token);
    //     dispatch(receiveSignup(user));
    //   }
    // }).catch(err => console.log("Error: ", err.code));
  };
}
