let colors = [];
let currentColor = [0,0,0];
let bgColor = [255, 255, 255];
let currentSize = 16;

const container = document.getElementById("gridcontainer");

/* https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript */

function makeRows(size, bgColor) {
    /* Checks if the container already has grid items (for wipe purposes) */

    while (container.firstChild){
        container.removeChild(container.lastChild);
    }

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let outer = 0; outer < size; outer++) {
        for(let inner = 0; inner< size; inner++){
            let cell = document.createElement("div");
            let r = bgColor[0];
            let g = bgColor[1];
            let b = bgColor[2];
            cell.className="grid-item";
            addHoverListener(cell);
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            container.appendChild(cell);
        }
    }
}

/*Adds listener that colors a cell with the GIVEN color (at time of wipe) */
function addHoverListener(cell){
    cell.addEventListener("mouseenter", function(e){
        let r = currentColor[0];
        let g = currentColor[1];
        let b = currentColor[2];
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
}

/*resets and resizes (if needed) the canvas */
const wipeButton = document.getElementById("wipe");
wipeButton.addEventListener("click",  function(){
    const sizeSlider = document.getElementById("size");
    currentSize = sizeSlider.value;
    makeRows(currentSize,bgColor);
})

/*intialize the original grid on page load */
makeRows(currentSize, bgColor);


