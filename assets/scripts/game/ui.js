const store = require('./../store')
// require api to make http requests
const api = require('./api')

const onNewGameSuccess = (response) => {
  store.game = response.game
  // console.log(store.game.cells)
  // game message to show success text when play btn is click
  $('#display-message').text('Welcome to Tic Tac Toe!')
  $('#game-message').text('Player X have first move...!')
}
const onNewGameFail = (response) => {
  // if game fail to start this message will show
  $('#game-message').text('Game fail to start, please try again.')
}
const gameUpdateSuccess = (response) => {
  // check if update is successful
  console.log(store.game)
  // $('#game-message').text('Game Over!')
}
const gameUpdateFail = () => {
  $('#game-message').text('GAME OVER!')
}
const checkForXSuccess = (response) => {
  $('#game-message').text('X wins!')
}
const checkForOSuccess = (response) => {
  $('#game-message').text('O wins!')
}

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
  checkForOSuccess,
  checkForXSuccess
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
