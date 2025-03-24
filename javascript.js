const container = document.querySelector('.container');
const custom = document.getElementById('custom');

const containerSize = 960;
const defaultSize = 16;

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = containerSize / size;

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;
    container.style.width = `${containerSize}`;
    container.style.height = `${containerSize}`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

function customizeGrid() {
    let gridsNumber = Number(prompt("Please enter the number of grids per side (max 100):"));

    if (gridsNumber > 0 && gridsNumber <= 100) {
        createGrid(gridsNumber);
    } else {
        alert ("Please enter a number between 1 and 100.")
    }
}

custom.addEventListener('click', customizeGrid)

createGrid(defaultSize);