const store = require('./../store')
// require api to make http requests
const api = require('./api')

const onNewGameSuccess = (response) => {
  // checking for empty index cells
  // console.log(store.game.cells)
  $('#game-message').text('Welcome to Tic Tac Toe!')
}
const onNewGameFail = (response) => {
  $('#game-message').text('Game fail to start, please try again.')
}
const cellZeroSuccess = (response) => {
  $('#game-message').html('Player 1 chose X, good move!')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFail,
  cellZeroSuccess
}
