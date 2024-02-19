function drawGrid() {
    const grid = document.querySelector('#grid-container');
    const tileCount = document.querySelector('#grid-size-value').value;
    let width = (100 / tileCount) + '%';

    //clears grid
    document.querySelectorAll(".tile").forEach(tile => tile.remove());
    
    function tileColor() {
        const rainbowMode = document.querySelector('#color-mode-toggle').checked;
        if (rainbowMode) {
            function getColorRange() {
                const min = 100;
                const max = 255;
                return Math.floor(Math.random() * (max - min) + min);
            }
        
            const r = getColorRange();
            const g = getColorRange();
            const b = getColorRange();

            return `rgb(${r}, ${g}, ${b})`;
        }
        return "gray";
    }

    for (let i = 0; i < tileCount ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("tile");
        gridSquare.style.width = width;
        
        gridSquare.addEventListener("mouseenter", function() {
            gridSquare.style.backgroundColor = tileColor();
        });

        grid.appendChild(gridSquare);
    }
}

//run once on page load
drawGrid();