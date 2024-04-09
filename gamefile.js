// Define variables
let gameGrid = []
let sizeX = 10
let sizeY = 10

// Cell logic values
let liveCell = 1
let deadCell = 0

// Cell growth values
let cellSolitude = 0
let cellSurvival = 1
let cellGrowth = 2
let cellCrowd = 3

let turnCount = 0

// Initialise readline
const prompt = require("prompt-sync")();

// Rules - https://playgameoflife.com/info

// E.g 10 arrays of 10 values for a 10 by 10 grid
function makeGameGrid(sizeY = Int, sizeX = Int) {
    // Defines result array
    let result = []
    // If sizeY is 10, that will create 10 arrays (across)
    for(let i = sizeY; i>0; i--) {
        // Creates an array
        let tempArr = []
        // Adds 10 values to them (down)
        for(let i = sizeX; i>0; i--) tempArr.push(deadCell)
        result.push(tempArr)
    }
    return result
}

function alterCellState(coordinateX = Int, coordinateY = Int, newState = Int, gameGrid) {
    // Adjusts the coordinates to account for index starting at 0
    let indexCoordinateY = coordinateY-1
    let indexCoordinateX = coordinateX-1
    gameGrid[indexCoordinateY][indexCoordinateY] = newState
}

function findSingleCellState(coordinateX = Int, coordinateY = Int, gameGrid = arr) {
    // Adjusts the coordinates to account for index starting at 0
    let indexCoordinateY = coordinateY-1
    let indexCoordinateX = coordinateX-1
    // Finds the array that the cell is in, then what index that value is at
    let cell = (gameGrid[indexCoordinateY][indexCoordinateX])
    // Predefines the state of the cell for a default value
    let cellState = false
    // Creates an array to display status
    let result = []
    // False means the cell is dead
    if(cell == 0) cellState = false
    // True means the cell is alive
    else if(cell == 1) cellState = true
    // Adds all of the values to display the status of a cell
    result.push(coordinateX)
    result.push(coordinateY)
    result.push(cell)
    return result
}

function findSurroundingCellState(coordinateY = Int, coordinateX = Int, gameGrid = arr) {
    // Array result with the values of every cell in a square
    let result = []
    // Finds the state of the 3 cells above the origin cell
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY-1, gameGrid))
    }
    // Finds the state of the 3 cells in line with the origin cell including itself
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY, gameGrid))
    }
    // Finds the state of the 3 cells below the origin cell
    for(let i = 0; i < 3; i++) {
        result.push(findSingleCellState((coordinateX-(i-1)), coordinateY+1, gameGrid))
    }
    return result
}

function findCellConsequence(squareValues = arr) {
    let mainCell = squareValues[4]
    let livingCells = []
    let result = []
    for(i in squareValues) {
        if(!squareValues[4]) {
            if(squareValues[i][2] == 1)
            livingCells.push(squareValues[i])
        }
    }
    if(mainCell == 1) {
        if(livingCells.length <= 1) {
            result = cellSolitude
        }
        else if(livingCells.length == 2 || livingCells.length == 3) {
            result = cellSurvival
        }
        else if(livingCells.length >= 4) {
            result = cellCrowd
        }

        if(result == cellSolitude || result == cellCrowd) {
            alterCellState(mainCell[0], mainCell[1], 0, gameGrid)
        }
    }
    else if(mainCell == 0) {
        if(livingCells.length == 3) {
            result = cellGrowth
        }

        if(result == cellGrowth) {
            alterCellState(mainCell[0], mainCell[1], 1, gameGrid)
        }
    }
}

function displayGameGrid(gameGrid = arr) {
    gameGrid.forEach(v=>console.log(...v))
}

// gameGrid = makeGameGrid(sizeX, sizeY)

// Test Grid
gameGrid = [[0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]

let thisSquareState = (findSurroundingCellState(6, 3, gameGrid))
thisSquareState.forEach(v=>console.log(...v))

runGameLoop(turnCount, gameGrid)

function runGameLoop(turnCount = Int, gameGrid) {
    // Displays grid in a readable format
    let answer = "yes"
    while(answer == "yes") {
        console.log("- - - - - - - - - -")
        displayGameGrid(gameGrid)

        answer.toLowerCase = prompt("Would you like to continue? (Yes/No): ");
    }
}