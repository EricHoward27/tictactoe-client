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
  // // saving the api response to have access to game object
  //   .then((response) => {
  //     store.game = response.game
  //   })
}
const gameUpdate = (cellId) => {
  console.log(store.currentPlayer)
  console.log(cellId)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          'index': cellId,
          'value': store.currentPlayer
        },
        'over': store.gameOver
      }
    }
  })
}
const viewGame = function () {
  return $.ajax({
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games'
  })
}
module.exports = {
  newGame,
  gameUpdate,
  viewGame
}
