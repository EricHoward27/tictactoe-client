const store = require('./../store')
// require api to make http requests
const onNewGameSuccess = (response) => {
  // checking for empty index cells
  // console.log(store.game.cells)
  $('#game-message').text('Welcome to Tic Tac Toe!')
}
const onNewGameFail = () => {
  $('#game-message').text('Game fail to start, please try again.')
}
const cellZeroSuccess = (response) => {
  console.log(store.game.cells)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFail,
  cellZeroSuccess
}
