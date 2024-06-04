const container = document.querySelector("#container");

for (let i=0; i<256; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("boxes");
    newBox.style.backgroundColor = "#F5F5DC";
    newBox.style.border = "thin solid brown"
    newBox.style.width = "85px";
    newBox.style.height = "85px";

    container.appendChild(newBox); 
    
}

