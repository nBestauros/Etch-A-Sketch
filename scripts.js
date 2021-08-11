let colors = [];


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

function makeRows(size) {
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
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        container.appendChild(cell);
      }
  }
}

makeRows(16);