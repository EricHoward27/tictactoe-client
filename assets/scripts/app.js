'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
$(() => {
  // your JS code goes here
  // setup event listener for 'sign-up' and run method
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Game Events
  // setup event listeners to run the methods
  // hide the new game button
  $('#new-game').hide()
  // hide game board until the new game button is click
  $('#game-board').hide()
  // create a new game button click listener to run method
  $('#new-game').on('click', gameEvents.onNewGame)
})
