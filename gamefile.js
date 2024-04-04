// Define variables
let gameGrid = []
let sizeX = 10
let sizeY = 10

// Cell logic values
let liveCell = 1
let deadCell = 0

let turnCount = 0

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

function findSingleCellState(coordinateY = Int, coordinateX = Int, gameGrid = arr) {
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
    result.push(cellState)
    result.push(cell)
    return result
}

// gameGrid = makeGameGrid(sizeX, sizeY)

// Test Grid
gameGrid = [[0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]

// Displays grid in a readable format
gameGrid.forEach(v=>console.log(...v))

console.log("Define single cell state:", findSingleCellState(3, 6, gameGrid))