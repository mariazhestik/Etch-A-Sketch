const container = document.querySelector('.container');
const gridSize = 16;

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

        container.appendChild(square);
    }
}

createGrid(gridSize);