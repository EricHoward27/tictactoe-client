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
  // hide sign out and cp
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#game-message').hide()
  $('#turn-display').hide()
  // Game Events
  // setup event listeners to run the methods
  // hide the new game button
  $('#new-game').hide()
  // hide game board until the new game button is click
  $('#game-board').hide()
  // when new game btn is press gameboard show
  $('#new-game').on('click', () => {
    $('#game-board').show()
  })
  // hide play again button
  $('#restart-btn').hide()
  // create a new game button click listener to run method
  $('#new-game').on('submit', gameEvents.onNewGame)

  // gameboard handlers on 'click'
  $('#cell-zero').on('click', gameEvents.onCellZero)
  $('#cell-one').on('click', gameEvents.onCellOne)
  $('#cell-two').on('click', gameEvents.onCellTwo)
  $('#cell-three').on('click', gameEvents.onCellThree)
  $('#cell-four').on('click', gameEvents.onCellFour)
  $('#cell-five').on('click', gameEvents.onCellFive)
  $('#cell-six').on('click', gameEvents.onCellSix)
  $('#cell-seven').on('click', gameEvents.onCellSeven)
  $('#cell-eight').on('click', gameEvents.onCellEight)

  // tictactoe board click handler
  $('#game-board').on('click', gameEvents.onGameBoard)
})
