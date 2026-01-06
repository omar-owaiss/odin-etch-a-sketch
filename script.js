const container = document.querySelector(".container")
const btnReset = document.querySelector(".reset-button")
const btnSize = document.querySelector(".size-button")


function createGrid(num) {
    container.innerHTML = ""
    for (let i = 0; i < num * num; i++) {
      let grid = document.createElement("div")
      grid.classList.add("grid")
     const squareSize = 350 / num
      grid.style.width = `${squareSize}px`
      grid.style.height = `${squareSize}px`

      container.appendChild(grid)
      
}}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
        e.target.classList.add("touched")
    }
})
// boxes.forEach(box => {
//        box.addEventListener("mouseenter", () => {
//            box.classList.add("touched")
//        })
//    })


    btnReset.addEventListener("click", () => {
        const boxes = document.querySelectorAll(".grid")

        boxes.forEach(box => {
            box.classList.remove("touched")
        })
    })


btnSize.addEventListener("click", () => {
    let newSize = prompt("Please pick a number between 1-100 for the new grid size: ", 16)
    newSize = parseInt(newSize)
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize)
    }
    else {
        alert("please pick a number between 1-100")
    }
})
createGrid(16)









// const container = document.querySelector('.container');
// const resetButton = document.querySelector('.reset-button');
// const sizeButton = document.querySelector('.size-button');

// function createGrid(size) {
//     // Clear the grid
//     container.innerHTML = '';
    
//     // Use DocumentFragment for performance
//     const fragment = document.createDocumentFragment();
//     const squareSize = 350 / size;
    
//     for (let i = 0; i < size * size; i++) {
//         const gridSquare = document.createElement("div");
//         gridSquare.classList.add("grid");
//         gridSquare.style.width = `${squareSize}px`;
//         gridSquare.style.height = `${squareSize}px`;
        
//         fragment.appendChild(gridSquare);
//     }
    
//     container.appendChild(fragment);
// }

// // Event delegation - ONE listener for all squares
// container.addEventListener('mouseover', (e) => {
//     if (e.target.classList.contains('grid')) {
//         e.target.classList.add('touched');
//     }
// });

// // Reset button
// resetButton.addEventListener('click', () => {
//     const squares = document.querySelectorAll('.grid');
//     squares.forEach(square => square.classList.remove('touched'));
// });

// // Size change button
// sizeButton.addEventListener('click', () => {
//     let newSize = prompt("Enter grid size (max 64):");
//     newSize = parseInt(newSize);
    
//     if (newSize && newSize > 0 && newSize <= 64) {
//         createGrid(newSize);
//     } else {
//         alert("Please enter a number between 1 and 64");
//     }
// });

// // Initial grid
// createGrid(16);
