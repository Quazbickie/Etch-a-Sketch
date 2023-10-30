// TO-DO:
// 1. Rainbow module
// 2. Pick Grid Size mode



let resetBtn = document.querySelector('.reset');
let rainbowBtn = document.querySelector('.rainbow');
let rainbowToggle = 0;


function createGrid(gridSize) {
    let grid = document.querySelector('.grid');

    for(let i = 0; i < gridSize; i++){
        let newSquare = document.createElement("div");
        newSquare.setAttribute("class","grid-square");
        newSquare.setAttribute("style","border:0.5px solid black");
        newSquare.setAttribute("toggled","false");
        grid.appendChild(newSquare);
    }

    let gridChildren = grid.children;

    for(let i = 0; i < gridChildren.length; i++){
        gridChildren[i].style.width = "30px";
        gridChildren[i].style.height = "30px";
        gridChildren[i].id = i;
    }

    grid.addEventListener('mouseover', (event) => {
        let target = event.target;
        let square = document.getElementById(`${target.id}`);

        if(rainbowToggle == 1){
            square.style.backgroundColor = `rgb(${getRandomColour()})`;
        } else {
            square.style.backgroundColor = "black";
        }
        square.setAttribute("toggled","true");
    })

}

resetBtn.addEventListener('click', (event) => {
    let grid = document.querySelector('.grid');
    let gridChildren = grid.children;

    for(let i = 0; i < gridChildren.length; i++){
        gridChildren[i].style.backgroundColor = "white";
    }
})

rainbowBtn.addEventListener('click', (event) => {
    if(rainbowToggle == 0){
        rainbowToggle = 1;
    } else {
        rainbowToggle = 0;
    }
})


function getRandomColour() {
    let colourString = `${(Math.floor(Math.random() * (255 - 1 + 1) + 1))}, ${(Math.floor(Math.random() * (255 - 1 + 1) + 1))}, ${(Math.floor(Math.random() * (255 - 1 + 1) + 1))}`;
    return colourString; 
}

createGrid(256);
