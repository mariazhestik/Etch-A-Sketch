const container = document.querySelector('.container');
const custom = document.getElementById('custom');
const reset = document.getElementById('reset');
const black = document.getElementById('black');
const RGB = document.getElementById('RGB');

const containerSize = 960;
const defaultSize = 16;
let currentMode = "black";

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = containerSize / size;

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            if (currentMode === "black") {
                square.style.backgroundColor = 'black';
            } else if (currentMode === "RGB") {
                square.style.backgroundColor = getRandomColor();
            }
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

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

custom.addEventListener('click', customizeGrid)
reset.addEventListener('click', () => createGrid(defaultSize));
black.addEventListener('click', () => {
    currentMode = "black";
});
RGB.addEventListener('click', () => {
    currentMode = "RGB";
});

createGrid(defaultSize);