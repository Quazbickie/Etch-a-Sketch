// TO-DO:
// 1. Rainbow module
// 2. Pick Grid Size mode
//let user enter number of grids w*l
//error handle to ensure it is within range


let resetBtn = document.querySelector('.reset');
let rainbowBtn = document.querySelector('.rainbow');
let resizeBtn = document.querySelector('.resize');
let rainbowToggle = 0;
let gridContainer = document.querySelector('.grid-container');
const GRID_WIDTH = gridContainer.clientWidth;
const DEFAULT_GRID_SIZE = 16;
createGrid(DEFAULT_GRID_SIZE);


function createGrid(gridSize) {
    let grid = document.querySelector('.grid-container');
    
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    let totalSquares = gridSize * gridSize;
    let squareWH = (GRID_WIDTH-gridSize) / gridSize;


    for(let i = 0; i < totalSquares; i++){
        let newSquare = document.createElement("div");
        newSquare.setAttribute("class","grid-square");
        newSquare.setAttribute("style","border:0.001px solid black");
        newSquare.setAttribute("toggled","false");
        grid.appendChild(newSquare);
    }

    let gridChildren = grid.children;
    for(let i = 0; i < gridChildren.length; i++){
        gridChildren[i].style.width = `${squareWH}px`;
        gridChildren[i].style.height = `${squareWH}px`;
        gridChildren[i].style.backgroundColor = "beige";
        gridChildren[i].id = i;
    }

    grid.addEventListener('mouseover', (event) => {
        let target = event.target;
        let square = document.getElementById(`${target.id}`);

        if(square.getAttribute("toggled") == "false"){
            if(rainbowToggle == 1){
                square.style.backgroundColor = `rgb(${getRandomColour()})`;
            } else {
                square.style.backgroundColor = "black";
            }
        }
        square.setAttribute("toggled","true");
    })

}

resetBtn.addEventListener('click', (event) => {
    let resizeInput = document.querySelector('.number-field');
    let gridSize = Number(resizeInput.value);
    createGrid(gridSize);
    let grid = document.querySelector('.grid');
    let gridChildren = grid.children;

    for(let i = 0; i < gridChildren.length; i++){
        gridChildren[i].style.backgroundColor = "white";
        gridChildren[i].setAttribute("toggled","false");
    }
})

rainbowBtn.addEventListener('click', (event) => {
    if(rainbowToggle == 0){
        rainbowToggle = 1;
    } else {
        rainbowToggle = 0;
    }
})

resizeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let resizeInput = document.querySelector('.number-field');
    let gridSize = Number(resizeInput.value);
    createGrid(gridSize);
})


function getRandomColour() {
    let colourString = `${(Math.floor(Math.random() * (255 - 1 + 1) + 1))}, ${(Math.floor(Math.random() * (255 - 1 + 1) + 1))}, ${(Math.floor(Math.random() * (255 - 1 + 1) + 1))}`;
    return colourString; 
}

