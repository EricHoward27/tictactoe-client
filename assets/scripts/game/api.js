// require config to set url with the apiUrl
const config = require('../config')
// empty object to store user data
const store = require('./../store')
// start a new game
const newGame = (data) => {
  // start player at X
  store.player = 'X'
  // set the counter at 0
  store.counter = 0
  return $.ajax({
    url: config.apiUrl.development + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer= ' + store.user.token
    }
  })
  // saving the api response to have access to game object
    .then((response) => {
      store.game = response.game
    })
}
module.exports = {
  newGame
}
