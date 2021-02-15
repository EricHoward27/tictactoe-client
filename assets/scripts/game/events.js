// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')
// require to get game object from store
const store = require('./../store')

// new game create handler
const onNewGame = (event) => {
  event.preventDefault()
  const form = event.target
  // start player at X when game created
  store.playerStart = 'X'
  const data = getFormFields(form)
  // API call to make POST games
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}
// create function to check player clicks on board
const onCellZero = (event) => {
  event.preventDefault()
  // check if cell have been clicked
  console.log('X')
  const userClick = event.target
  const data = getFormFields(userClick)
  // when user click space, check if space empty
  if (store.game.cells[0] === '') {
    console.log('Valid cell!')
    // add their token to board (x or o)
    $('#cell-zero').html(store.playerStart)
    console.log(store.game.cells[0])
    ui.cellZeroSuccess()
  }
}

module.exports = {
  onNewGame,
  onCellZero
}
