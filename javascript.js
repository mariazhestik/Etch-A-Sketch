const container = document.querySelector('.container');
const custom = document.getElementById('custom');

const deafaultSise = 16;

function createGrid(size) {
    container.innerHTML = '';

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.width = '960px';
    container.style.height = '960px';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

function cutomizeGrid() {
    let gridsNumber = Number(prompt("Please enter the number of grids per side (max 100):"));

    if (gridsNumber > 0 && gridsNumber <= 100) {
        createGrid(gridsNumber);
    } else {
        alert ("Please enter a number between 1 and 100.")
    }
}

createGrid(gridSize);