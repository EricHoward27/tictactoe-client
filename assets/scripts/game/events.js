// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')
// require to get game object from store
const store = require('./../store')

const onNewGame = () => {
  console.log('Hello world')
  const form = event.target
  const data = getFormFields(form)
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}
module.exports = {
  onNewGame
}
