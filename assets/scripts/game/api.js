// require config to set url with the apiUrl
const config = require('../config')
// empty object to store user data
const store = require('./../store')
// start a new game
const newGame = (playerStart) => {
  store.playerOne = 'X'
  store.playerCounter = 0
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token= ' + store.user.token
    }
  })
    .then((response) => {
      store.game = response.game
    })
}
module.exports = {
  newGame
}
