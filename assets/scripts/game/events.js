// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')
// require to get game object from store
const store = require('./../store')

const onNewGame = (event) => {
  event.preventDefault()
  // start player at X when game created
  store.player = 'X'
  // API call to make POST games
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}

module.exports = {
  onNewGame
}
