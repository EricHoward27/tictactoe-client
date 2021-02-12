// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = () => {
console.log('Hello world')
}
module.exports = {
  onNewGame
}
