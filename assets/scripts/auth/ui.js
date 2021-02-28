const store = require('./../store')

const signUpSuccess = (response) => {
  $('#display-message').html('Account created successful!')
  $('#sign-up').trigger('reset')
}
const signUpFailure = (error) => {
  $('#display-message').html('Sign up fail, please try again.')
}
const signInSuccess = (data) => {
  // store user object into the store.js
  $('#display-message').html('Sign in was successful!')
  $('#sign-in').trigger('reset')
  store.user = data.user

  $('#new-game').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#game-message').show()
  $('#turn-display').show()
}
const signInFail = (response) => {
  $('#display-message').html('Sign in fail, email or password did not match.')
}
const signOutSuccess = (response) => {
  $('#display-message').html('Sign out was successful!')
  $('#sign-out').trigger('reset')
}
const signOutFail = (response) => {
  $('#display-message').html('Sign out fail, please try again.')
}
const changePasswordSucess = (response) => {
  $('#display-message').html('Password was successfully changed!')
  $('#change-password').trigger('reset')
}
const changePasswordFail = (response) => {
  $('#display-message').html('Password change fail, please try again.')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  changePasswordSucess,
  changePasswordFail
}
