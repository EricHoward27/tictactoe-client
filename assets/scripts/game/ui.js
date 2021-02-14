const store = require('./../store')

const onNewGameSuccess = (response) => {
  $('#game-message').text('Welcome to Tic Tac Toe!')
}
const onNewGameFail = () => {
  $('#game-message').text('Game fail to start, please try again.')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFail
}
