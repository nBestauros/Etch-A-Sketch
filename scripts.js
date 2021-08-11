let colors = [];
let currentColor = [0,0,0];
let currentSize = 16;

/*Creates rectangular array, where each value is an array of three values.
These values represent RGB values. */
function initColors(size){
    for(let outer = 0; outer<size; outer++){
        for(let inner = 0; inner<size; inner++){
            if(inner==0){
                colors[outer]= new Array(size);
            }
            colors[outer][inner] = [255,255,255];
        }
    }
}

const container = document.getElementById("gridcontainer");


/* https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript */

function makeRows(size) {
    /* Checks if the container already has grid items (for wipe purposes) */

    while (container.firstChild){
        container.removeChild(container.lastChild);
    }

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    initColors(size);
    for (let outer = 0; outer < size; outer++) {
        for(let inner = 0; inner< size; inner++){
            let cell = document.createElement("div");
            let r = colors[outer][inner][0];
            let g = colors[outer][inner][1];
            let b = colors[outer][inner][2];
            cell.className="grid-item";
            addHoverListener(cell);
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            container.appendChild(cell);
        }
    }
}

function addHoverListener(cell){
    cell.addEventListener("mouseenter", function(e){
        let r = currentColor[0];
        let g = currentColor[1];
        let b = currentColor[2];
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
}


const wipeButton = document.getElementById("wipe");
wipeButton.addEventListener("click",  function(){
    const sizeSlider = document.getElementById("size");
    currentSize = sizeSlider.value;
    makeRows(currentSize);
})



/*intialize the original grid on page load */
makeRows(currentSize);


