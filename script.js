const tile = 32;

function drawGrid(tile) {
    const grid = document.querySelector('#grid-container');
    let width = (100 / tile) + '%';

    for (let i = 0; i < tile ** 2; i++) {
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

drawGrid(tile);