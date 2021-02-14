// require config to set url with the apiUrl
const config = require('../config')
// empty object to store user data
const store = require('./../store')

// start a new game
const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
  // saving the api response to have access to game object
    .then((response) => {
      store.game = response.game
    })
}

module.exports = {
  newGame
}
