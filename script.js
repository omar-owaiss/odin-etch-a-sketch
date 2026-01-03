const container = document.querySelector(".container")
const btnReset = document.querySelector(".reset-button")

function createGrid(num) {
    container.innerHTML = ""
    for (let i = 0; i < num * num; i++) {
      let grid = document.createElement("div")
      grid.classList.add("grid")
     const squareSize = 350 / num
      grid.style.width = `${squareSize}px`
      grid.style.height = `${squareSize}px`

      container.appendChild(grid)
      const boxes = document.querySelectorAll(".grid")

    boxes.forEach(box => {
       box.addEventListener("mouseenter", () => {
           box.classList.add("touched")
       })
   })

    btnReset.addEventListener("click", () => {
        boxes.forEach(box => {
            box.classList.remove("touched")
        })
    })
}}

const btnSize = document.querySelector(".size-button")

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