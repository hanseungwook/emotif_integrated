import Parse from 'parse';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


//*****************************  SIGNUP  *******************************//

Parse.initialize("emotifAppId");
Parse.serverURL = 'http://localhost/parse';

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
    id_token: user.getAccessToken()
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

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function signupUser(creds) {

  return dispatch => {
    dispatch(requestSignup(creds));
    let user = new Parse.User();
    console.log("email", creds.email);
    console.log("pass", creds.password);
    if (validateEmail(creds.email)) {
        user.set('email',    creds.email)
        user.set('username', creds.email)
        user.set('password', creds.password)

        user.signUp(null, {
          success: function(user) {
              localStorage.setItem('id_token', user.getSessionToken());
              dispatch(receiveSignup(user));
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            console.log("Error: " + error.code + " " + error.message);
            dispatch(signupError(error.message));
          }
        });
    }
    else {
        dispatch(signupError("Invalid email format"));
    }
    }

}
