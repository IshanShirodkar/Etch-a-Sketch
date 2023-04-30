const game = document.querySelector('.game');
const button = document.querySelector('button');
let boardDimension, gridItems;


function generateGridItem() 
{
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridContainer.appendChild(gridItem);
}

function generateBoard() 
{
    boardDimension = prompt("Enter the number of squares you require per side of the grid: ");

    gridContainer.style.gridTemplateColumns = `repeat(${boardDimension}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${boardDimension}, auto)`;
    gridContainer.style.display = 'inline-grid';

    for(let i = 0; i < Math.pow(boardDimension, 2); i++)
    {
        generateGridItem();
    }

    gridItems = document.querySelectorAll('.gridItem');

    for(let i = 0; i < Math.pow(boardDimension, 2); i++)
    {
        gridItems[i].addEventListener('mouseover', () => {gridItems[i].classList.add('activated');});
    }
}

function clearBoard() 
{
    for(let i = 0; i < Math.pow(boardDimension, 2); i++)
    {
        gridItems[i].classList.remove('activated');
        gridContainer.removeChild(gridItems[i]);
        gridContainer.style.display = 'none';
    }
    
}


const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

game.appendChild(gridContainer);

generateBoard();

button.addEventListener('click', () => {
    clearBoard(); 
    setTimeout(function() {
        generateBoard();
    }, 1000);
})
