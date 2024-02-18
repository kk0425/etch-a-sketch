function drawGrid() {
    const tileCount = document.querySelector('#grid-size-value').value;
    const grid = document.querySelector('#grid-container');
    let width = (100 / tileCount) + '%';

    //clears grid
    document.querySelectorAll(".tile").forEach(tile => tile.remove());

    for (let i = 0; i < tileCount ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("tile");
        gridSquare.style.width = width;

        gridSquare.addEventListener("mouseenter", function() {
            gridSquare.style.backgroundColor = "gray";
        },
        {once: true});

        grid.appendChild(gridSquare);
    }
}

//run once on page load
drawGrid();