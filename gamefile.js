let gameGrid = []
let sizeX = 10
let sizeY = 10

function makeGameGrid(sizeX = Int, sizeY = Int) {
    let result = []
    for(let i = sizeY; i>0; i--) {
        let tempArr = []
        for(let i = sizeX; i>0; i--) tempArr.push(0)
        result.push(tempArr)
    }
    return result
}

gameGrid = makeGameGrid(sizeX, sizeY)

gameGrid.forEach(v=>console.log(...v))