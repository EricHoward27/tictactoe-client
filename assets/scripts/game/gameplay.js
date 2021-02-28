'use strict'

const store = require('../store')
const ui = require('./ui')

store.gameBoard = ['', '', '', '', '', '', '', '', '']
store.currentPlayer = 'X'
store.gameOver = false

// move switch player function from events.js to make proper api request
const playerSwap = () => {
    if (store.currentPlayer === 'X') {
        store.currentPlayer = 'O'
    } else {
        store.currentPlayer = 'X'
    }
}

const reset = () => {
    store.currentPlayer = 'X'
    store.gameBoard.fill('')
    store.gameOver = false
    $('.box').text('')
}

// Move check winner function from events.js into the gameplay file
const checkWinner = () => {
    // all the rows
const winner =  (store.gameBoard[0] === store.gameBoard[1] && store.gameBoard[1] === store.gameBoard[2] && store.gameBoard[0] !== '') ||
    (store.gameBoard[3] === store.gameBoard[4] && store.gameBoard[4] === store.gameBoard[5] && store.gameBoard[4] !== '') ||
    (store.gameBoard[6] === store.gameBoard[7] && store.gameBoard[7] === store.gameBoard[8] && store.gameBoard[7] !== '') ||
      // diagonal
    (store.gameBoard[0] === store.gameBoard[4] && store.gameBoard[4] === store.gameBoard[8] && store.gameBoard[0] !== '') ||
    (store.gameBoard[2] === store.gameBoard[4] && store.gameBoard[4] === store.gameBoard[6] && store.gameBoard[2] !== '') ||
      // all the columns
    (store.gameBoard[0] === store.gameBoard[3] && store.gameBoard[3] === store.gameBoard[6] && store.gameBoard[0] !== '') ||
    (store.gameBoard[1] === store.gameBoard[4] && store.gameBoard[4] === store.gameBoard[7] && store.gameBoard[1] !== '') ||
    (store.gameBoard[2] === store.gameBoard[5] && store.gameBoard[5] === store.gameBoard[8] && store.gameBoard[2] !== '')
          
  const checkTie = store.gameBoard.every(cell => {return cell !== ''})
  if (winner) {
    ui.checkWinnerSuccess()
  } else if (checkTie) {
    ui.checkTieSuccess()
  }
  }

  module.exports = {
      playerSwap,
      checkWinner,
      reset
  }

