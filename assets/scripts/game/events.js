// require api to make http requests
const api = require('./api')
// require ui to update the DOM after an request from api
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')
// require to get game object from store
const store = require('./../store')
// require the gameplay file
const gameplay = require('./gameplay')

// start player with X ** just move var to gameplay and store in the store.js
// let playerStart = 'X'
// set game over state to false
// store.game.over = false
// new game create handler
const onNewGame = (event) => {
  gameplay.reset()
  // API call to make POST games
  api.newGame()
    .then(ui.onNewGameSuccess) 
    .catch(ui.onNewGameFail)
}

const onCellClick = (event) => {
  // use clickcell to specify the box click
  store.clickCell = $(event.target)
  if (store.gameOver) {
    ui.gameOver()
  } else if (store.clickCell.text() !== '') {
    ui.invalidMove()
  } else {
    const cellId = store.clickCell.data('index')
  

  api.gameUpdate(cellId)
  .then(res => {
    ui.gameUpdateSuccess(res)
  })
  .then(() => {
    $(event.target).text(store.currentPlayer)
    store.gameBoard[cellId] = store.currentPlayer
    gameplay.checkWinner()
    gameplay.playerSwap()
  })
  .catch(ui.gameUpdateFail)
  }
  
}
const onViewGame = (event) => {
  event.preventDefault()
  api.viewGame()
    .then(ui.onViewGameSuccess)
    .catch(ui.onViewGameError)
}
// ***---modify board click function to make more dry---
// const onGameBoard = (event) => {
//   console.log('click works!')
//   const boardIndex = $(event.target).data('index')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // set current player turns ** made new player swap function in gameplay file
//   // const playerTurn = playerStart
//   // store board cells into a global variable
//   const board = store.game.cells
//   // check if space empty on board using a loop
//   const boardData = board[boardIndex]
//   if (boardData === '') {
//     // console.log('this space is empty')
//     // check board data-index working
//     // console.log(boardIndex)
//     // store x or o in board cells to prevent invalid moves
//     store.game.cells[boardIndex] = playerTurn
//     // rotate player from X and O
//     if (playerTurn === 'X') {
//       $(userClick).text('X')
//       // add message for player turn change
//       playerStart = 'O'
//       $('#turn-display').text("It's O turn...")
//     } else if (playerTurn === 'O') {
//       $(userClick).text('O')
//       playerStart = 'X'
//       $('#turn-display').text("It's X turn...")
//     }
//   } else {
//     $('#turn-display').text('Sorry, invalid move. Try again.')
//   }
  // const update = {
  //   game: {
  //     cell: {
  //       index: boardData,
  //       value: playerTurn
  //     },
  //     over: false
  //   }
  // }


  // if (!checkWinner) {
  //   $('#turn-display').text("It's a draw!")
  // }
  
  // api.gameUpdate(boardIndex, playerTurn)
  //   .then(checkWinner)
    // .catch(ui.gameUpdateFail)


// const checkForO = () => {
// // check o wins
// // check top row
//   if (playerStart === 'O') {
//     if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2]) {
//     // check middle row
//     } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5]) {
//       // check bottom row
//     } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8]) {
//       // check left column
//     } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6]) {
//       // check middle column
//     } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7]) {
//       // check right column
//     } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8]) {
//       // check top left cross
//     } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8]) {
//       // check top right cross
//     } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6]) {
//       console.log('O wins')
//     }
//   }
// }
// checkForX()
// checkForO()

// create function to check player clicks on board
// const onCellZero = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   // console.log('X')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[0] === '') {
//     // console.log('Valid cell 0!')
//     // add their token to board (x or o)
//     $('#cell-zero').html(playerOne)
//     // add player token to cell
//     store.game.cells[0] = playerOne
//     console.log(store.game.cells)
//     ui.cellZeroSuccess()
//   } else {
//     ui.cellZeroFail()
//   }
// }
// const onCellOne = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('O')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[1] === '') {
//     console.log('Valid Cell 1!')
//     // add their token to board (x or o)
//     $('#cell-one').html(playerTwo)
//     // add player token to cell
//     store.game.cells[1] = playerTwo
//     console.log(store.game.cells)
//     ui.cellOneSuccess()
//   } else {
//     ui.cellOneFail()
//   }
// }
// const onCellTwo = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('X')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[2] === '') {
//     console.log('Valid Cell 2!')
//     // add their token to board (x or o)
//     $('#cell-two').html(playerOne)
//     // add player token to cell
//     store.game.cells[2] = playerOne
//     console.log(store.game.cells)
//     ui.cellTwoSuccess()
//   } else {
//     ui.cellTwoFail()
//   }
// }
// const onCellThree = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('O')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[3] === '') {
//     console.log('Valid Cell 3!')
//     // add their token to board (x or o)
//     $('#cell-three').html(playerTwo)
//     // add player token to cell
//     store.game.cells[3] = playerTwo
//     console.log(store.game.cells)
//     ui.cellThreeSuccess()
//   } else {
//     ui.cellThreeFail()
//   }
// }
// const onCellFour = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('X')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[4] === '') {
//     console.log('Valid Cell 4!')
//     // add their token to board (x or o)
//     $('#cell-four').html(playerOne)
//     // add player token to cell
//     store.game.cells[4] = playerOne
//     console.log(store.game.cells)
//     ui.cellFourSuccess()
//   } else {
//     ui.cellFourFail()
//   }
// }
// const onCellFive = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('O')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[5] === '') {
//     console.log('Valid Cell 5!')
//     // add their token to board (x or o)
//     $('#cell-five').html(playerTwo)
//     // add player token to cell
//     store.game.cells[5] = playerTwo
//     console.log(store.game.cells)
//     ui.cellFiveSuccess()
//   } else {
//     ui.cellFiveFail()
//   }
// }
// const onCellSix = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('X')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[6] === '') {
//     console.log('Valid Cell 6!')
//     // add their token to board (x or o)
//     $('#cell-six').html(playerOne)
//     // add player token to cell
//     store.game.cells[6] = playerOne
//     console.log(store.game.cells)
//     ui.cellSixSuccess()
//   } else {
//     ui.cellSixFail()
//   }
// }
// const onCellSeven = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('O')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[7] === '') {
//     console.log('Valid Cell 7!')
//     // add their token to board (x or o)
//     $('#cell-seven').html(playerTwo)
//     // add player token to cell
//     store.game.cells[7] = playerTwo
//     console.log(store.game.cells)
//     ui.cellSevenSuccess()
//   } else {
//     ui.cellSevenFail()
//   }
// }
// const onCellEight = (event) => {
//   event.preventDefault()
//   // check if cell have been clicked
//   console.log('X')
//   const userClick = event.target
//   const data = getFormFields(userClick)
//   // when user click space, check if space empty
//   if (store.game.cells[8] === '') {
//     console.log('Valid Cell 8!')
//     // add their token to board (x or o)
//     $('#cell-eight').html(playerOne)
//     // add player token to cell
//     store.game.cells[8] = playerOne
//     console.log(store.game.cells)
//     ui.cellEightSuccess()
//   } else {
//     ui.cellEightFail()
//   }
// }

module.exports = {
  onNewGame,
  onCellClick,
  onViewGame
  // onCellZero,
  // onCellOne,
  // onCellTwo,
  // onCellThree,
  // onCellFour,
  // onCellFive,
  // onCellSix,
  // onCellSeven,
  // onCellEight
}
