const container = document.querySelector(".container")
const btnReset = document.querySelector(".reset-button")
const btnSize = document.querySelector(".size-button")
const btnErase = document.querySelector(".erase-button")


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



btnReset.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".grid")

    boxes.forEach(box => {
        box.classList.remove("touched")
    })
})

//Erase button (To be worked on later)


// btnErase.addEventListener ("click", () => {
//     if (btnErase.textContent = "Erase") {
//         btnErase.textContent = "Paint"
//         container.addEventListener("mouseover", (e) => {
//             if (e.target.classList.contains("touched")) {
//                 e.target.classList.remove("touched")
//             }
//         })
//     }
//     if (btnErase.textContent === "Paint") {
//         btnErase.addEventListener("click", () => {
//             btnErase.textContent = "Erase"
//             container.addEventListener("mouseover", (e) => {
//                 if (e.target.classList.contains("grid")) {
//                     e.target.classList.add("touched")
//                 }
//             })
//         })
//     }
// })


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









