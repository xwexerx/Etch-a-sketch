const grid = document.getElementById("grid-container");
const slider = document.querySelector("input");
const value = document.querySelector(".value");
const button = document.querySelector("button");
value.textContent = slider.value;
slider.oninput = function() {
    value.textContent = this.value;
}
button.addEventListener("click", () => play(slider.value));



// Determine how many columns the grid will have based on the size
function setGridTemplateColumns(size) {
    let value = "";
    for(let i = 0; i < size; i++) {
        value += " 1fr";
    }
    grid.style.gridTemplateColumns = value;
}

// Generate new grid elements
function generateGridElements(size) {
    for (let i = 0; i < (size*size); i++) {
        const div = document.createElement("div");
        div.style.cssText = `border: 1px solid black; height: ${600/size}px; width: ${600/size}px`;
        div.classList.add("smallDiv");
        div.addEventListener("mouseover", () => div.style.backgroundColor = "red");
        grid.appendChild(div);
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove()
    }    
}

function play(size = 16) {
    clearGrid();
    setGridTemplateColumns(size);
    generateGridElements(size);
}