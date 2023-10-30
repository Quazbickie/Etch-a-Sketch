let resetBtn = document.querySelector('.reset');

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
    console.log(gridChildren);

    for(let i = 0; i < gridChildren.length; i++){
        let tempChild = gridChildren[i];
        gridChildren[i].style.width = "30px";
        gridChildren[i].style.height = "30px";
        gridChildren[i].id = i;
        console.log(tempChild);
    }

    grid.addEventListener('mouseover', (event) => {
        let target = event.target;
        let square = document.getElementById(`${target.id}`);
        square.style.backgroundColor = "black";
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

createGrid(256);
