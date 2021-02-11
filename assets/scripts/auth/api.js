// require config to set url with the apiUrl
const config = require('../config')
// empty object to store user data
const store = require('./../store')

const signUp = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}
const signIn = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}
// send http request to delete the user token
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// send http request to patch change password
const changePassword = (data) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
