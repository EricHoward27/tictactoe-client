const store = require('./../store')

const signUpSuccess = (response) => {
  $('#display-message').html('Account created successful!')
  
  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
}
const signUpFailure = (error) => {
  $('#display-message').html('Sign up fail, please try again.')

  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
}
const signInSuccess = (data) => {
  // store user object into the store.js
  $('#display-message').html('Sign in was successful!')
  
  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
  store.user = data.user

  $('#auth-section').hide()
  $('#password-btn').show()
  $('#new-game').show()
  $('#sign-out').show()
  $('#game-message').show()
  $('#turn-display').show()
}
const signInFail = (response) => {
  $('#display-message').html('Sign in fail, email or password did not match.')


  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
}
const signOutSuccess = (response) => {
  $('#display-message').html('Sign out was successful!')
  
  $('#auth-section').show()
  $('#password-btn').hide()
  $('#new-game').hide()
  $('#sign-out').hide()
  $('#game-message').hide()
  $('#turn-display').hide()
  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
  $('#game-board').hide()
  $('#view-game').hide()
}
const signOutFail = (response) => {
  $('#display-message').html('Sign out fail, please try again.')

  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
}
const changePasswordSucess = (response) => {
  $('#display-message').html('Password was successfully changed!')
  
  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
}
const changePasswordFail = (response) => {
  $('#display-message').html('Password change fail, please try again.')

  setTimeout(() => {
    $('#display-message').hide()
  }, 4000)
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
