import Parse from 'parse';

export const FORM_UPDATE  = 'FORM_UPDATE';
export const FORM_SUBMIT  = 'FORM_SUBMIT';
export const FORM_REQUEST = 'FORM_REQUEST';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function formUpdate(item){
  return {
    type : FORM_UPDATE,
    id    : item.id,
    value : item.value,
  };
}
function formRequest(){
  return {
    type : FORM_REQUEST,
  };
}
function formSubmit(){
  return {
    type : FORM_SUBMIT,
  };
}

export function updateForm(form) {
  return dispatch => {
    dispatch(formUpdate(form));
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

export function submitForm(form) {
    console.log("SUBMITTING FORM")
  return dispatch => {
    dispatch(formRequest());
      let user = new Parse.User();

      user.set('email',     form.email)
      user.set('username',  form.email)
      user.set('password',  form.pw)

      user.set('shape',        form.shape)
      user.set('topSize',      form.top)
      user.set('waistSize',    form.bottomWaist)
      user.set('bottomLength', form.bottomLength)

      user.set('skin',      form.skin)
      user.set('eye',       form.eye)
      user.set('hair',      form.hair)
      user.set('pref1',     form.pref1)
      user.set('pref2',     form.pref2)
      user.set('pref3',     form.pref3)
      user.set('pref4',     form.pref4)
      user.set('styles',    form.styles)
      user.set('firstName', form.firstName)
      user.set('lastName',  form.lastName)
      user.signUp(null, {
        success: function(user) {
            console.log("YAY")
            localStorage.setItem('id_token', user.getSessionToken());
            dispatch(formSubmit(user));
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          console.log("Error: " + error.code + " " + error.message);
          dispatch(signupError("error"));
        }
      });

  };
}

// function signupUser(creds) {
  // return dispatch => {
  //   dispatch(formSubmit(creds));
  //   let user = new Parse.User();
  //   console.log("email", creds.email);
  //   console.log("pass", creds.password);
  //   user.set('email',    creds.email)
  //   user.set('username', creds.email)
  //   user.set('password', creds.password)
  //   user.signUp(null, {
  //     success: function(user) {
  //         localStorage.setItem('id_token', user.getSessionToken());
  //         dispatch(receiveSignup(user));
  //     },
  //     error: function(user, error) {
  //       // Show the error message somewhere and let the user try again.
  //       console.log("Error: " + error.code + " " + error.message);
  //       dispatch(signupError("error"));
  //     }
  //   });
  // };
// }

//
// export function handleFormValues(values) {
// 	return dispatch => {};
// }
