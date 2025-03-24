const container = document.querySelector('.container');
const gridSize = 16;

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add('grid-square');

        container.appendChild(square);
    }
}

createGrid(gridSize);