const store = require('./../store')

const onNewGameSuccess = () => {
  $('#game-board').show()
}
const onNewGameFail = () => {

}
module.exports = {
  onNewGameSuccess,
  onNewGameFail
}
