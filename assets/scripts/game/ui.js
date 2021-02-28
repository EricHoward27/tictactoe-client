const store = require('./../store')
// require api to make http requests
const api = require('./api')

const onNewGameSuccess = (data) => {
  $('#game-message').text('New Game Success!')
  $('#game-message').removeClass()
  $('#game-message').addClass('success')
  console.log('new game ran, response is : ', data)
  store.game = data.game
  // console.log(store.game.cells)
  // game message to show success text when play btn is click
  // $('#display-message').text('Welcome to Tic Tac Toe!')
  // $('#game-message').text('Player X have first move...!')
}
const onNewGameFail = (error) => {
  // if game fail to start this message will show
  $('#game-message').text('New Game failed...')
  $('#game-message').removeClass()
  $('#game-message').addClass('fail')
  console.log('new game fail response is : ', error)
}
const gameUpdateSuccess = (data) => {
  store.clickCell.text(store.currentPlayer)
  $('#game-message').text('Update Game Success')
  $('#game-message').removeClass()
  $('#game-message').addClass('success')
    // check if update is successful
    console.log('Update Game log is : ', data)
    store.game = data.game
}
const gameUpdateFail = (error) => {
  $('#game-message').text('Update Game Failed')
  $('#game-message').removeClass()
  $('#game-message').addClass('fail')
  console.log('update game fail ran : ', error)
}
const invalidMove = () => {
  $('#game-message').text('Invalid Move! Try another cell...').show()

  setTimeout(() => {
    $('#game-message').hide()
  }, 4000)
}
const gameOver = () => {
  $('#game-message').text('Game Over, click new game to continue...').show()

  setTimeout(() => {
    $('#game-message').hide()
  }, 4000)
}
const checkWinnerSuccess = () => {
  store.game.over = true
  $('#turn-display').text(`${store.playerTurn} wins match! Click New Game to continue...`).show()

  setTimeout(()=> {
    $('#turn-display').hide()
  }, 4000)
}
const checkTieSuccess = () => {
  store.game.over = true
  $('#turn-display').text(`It's a tie! Click New Game to continue...`).show()

  setTimeout(()=> {
    $('#turn-display').hide()
  }, 4000)
}
// const checkForXSuccess = (response) => {
//   $('#game-message').text('X wins!')
// }
// const checkForOSuccess = (response) => {
//   $('#game-message').text('O wins!')
// }

// success message use when player clicks on valid space
// fail message use when player click on invalid space
// const cellZeroSuccess = (response) => {
//   $('#game-message').html('Player 1 chose X, good move!')
// }
// const cellZeroFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellOneSuccess = (response) => {
//   $('#game-message').html('Player 2 chose O, nice move!')
// }
// const cellOneFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellTwoSuccess = (response) => {
//   $('#game-message').html('Player 1 chose X, good move!')
// }
// const cellTwoFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellThreeSuccess = (response) => {
//   $('#game-message').html('Player 2 chose O, nice move!')
// }
// const cellThreeFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellFourSuccess = (response) => {
//   $('#game-message').html('Player 1 chose X, good move!')
// }
// const cellFourFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellFiveSuccess = (response) => {
//   $('#game-message').html('Player 2 chose O, nice move!')
// }
// const cellFiveFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellSixSuccess = (response) => {
//   $('#game-message').html('Player 1 chose X, good move!')
// }
// const cellSixFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellSevenSuccess = (response) => {
//   $('#game-message').html('Player 2 chose O, nice move!')
// }
// const cellSevenFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
// const cellEightSuccess = (response) => {
//   $('#game-message').html('Player 1 chose X, good move!')
// }
// const cellEightFail = (response) => {
//   $('#game-message').html('Invalid move, try again.')
// }
module.exports = {
  onNewGameSuccess,
  onNewGameFail,
  gameUpdateSuccess,
  gameUpdateFail,
  checkWinnerSuccess,
  checkTieSuccess,
  invalidMove,
  gameOver
  // cellZeroSuccess,
  // cellZeroFail,
  // cellOneSuccess,
  // cellOneFail,
  // cellTwoSuccess,
  // cellTwoFail,
  // cellThreeSuccess,
  // cellThreeFail,
  // cellFourSuccess,
  // cellFourFail,
  // cellFiveSuccess,
  // cellFiveFail,
  // cellSixSuccess,
  // cellSixFail,
  // cellSevenSuccess,
  // cellSevenFail,
  // cellEightSuccess,
  // cellEightFail
}
