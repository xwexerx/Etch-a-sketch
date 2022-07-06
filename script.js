const grid = document.getElementById("grid-container");
grid.setAttribute("draggable", "false");
const slider = document.querySelector("#input-slider");
const value = document.querySelector(".value");
const clearButton = document.querySelector("#clear-button");
const colorPicker = document.querySelector("#color-picker");


// Connect the slider values to the value text element
value.textContent = slider.value;
slider.oninput = function() {
    value.textContent = this.value;
}

clearButton.addEventListener("click", () => apply(slider.value));

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
        div.addEventListener("click", () => div.style.backgroundColor = `${colorPicker.value}`);
        div.addEventListener("mouseover", function(e) {
            if (e.buttons == 1) {
                this.style.backgroundColor = `${colorPicker.value}`
            };
        });
        div.setAttribute("draggable", "false");
        grid.appendChild(div);
    }
}

// Remove all children of the grid element
function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove()
    }    
}

// Clears out the old grid and creates a new one with the size specified by the user
function apply(size = 16) {
    clearGrid();
    setGridTemplateColumns(size);
    generateGridElements(size);
}