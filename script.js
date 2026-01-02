const container = document.querySelector(".container")
const btnReset = document.querySelector(".reset-button")

for (let i = 0; i < 256; i++) {
   let grid = document.createElement("div")
   grid.classList.add("grid")
    container.appendChild(grid)
}


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