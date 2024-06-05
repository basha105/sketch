const container = document.querySelector("#container");

function generateGrid(dim) {
    for (let i=0; i<(Math.pow(dim, 2)); i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("grid");
        newBox.style.backgroundColor = "#ADD8E6";
        newBox.style.border = "thin solid #0000FF";
        newBox.style.width = "85px";
        newBox.style.height = "85px";
    
        container.appendChild(newBox); 

        const squares = document.querySelectorAll(".grid");
        squares.forEach((square) => {
            square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#0000FF";
            square.style.border = "thin solid #ADD8E6";
            });
        });
    }
}





function resetGrid() {
    let dimension = Number(prompt("Enter the width/length of your square grid"));
    const squares = document.querySelectorAll(".grid");
    squares.forEach((square) => { 
        container.removeChild(square);
    });

    generateGrid(dimension);
}

generateGrid(16);


const btn = document.querySelector("#btn");
btn.addEventListener("click", resetGrid);







