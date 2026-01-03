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


createGrid(16)