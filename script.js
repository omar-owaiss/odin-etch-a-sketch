const container = document.querySelector(".container")

for (let i = 0; i < 256; i++) {
   let grid = document.createElement("div")
//    let para = document.createElement("p")
//    para.textContent = "lol"
//    grid.appendChild(para)
   grid.classList.add("grid")
//    grid.style.backgroundColor = "black"
//    grid.style.width = "50px"
    container.appendChild(grid)
}

// container.style.backgroundColor = "black"
// container.style.width = "50px"