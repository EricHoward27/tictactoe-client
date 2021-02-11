// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = (event) => {
  // stop from refreshing page
  event.preventDefault()
  // target the eventlistener
  const form = event.target
  // get data from the form
  const data = getFormFields(form)
  // send data to api
  api.signUp(data)
  // successful calls
    .then(ui.signUpSuccess)
  // catch errors when api calls fail
    .catch(ui.signUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}
const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}
const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSucess)
    .catch(ui.changePasswordFail)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
