let sketchPad = document.querySelector(".sketchPad");
let slider = document.getElementById("myRange");
let sliderValue = slider.value;
let penColor = "black";
let originalPenColor = "black";
let sketchPadColor = "pink";
let userColorInput = document.querySelector("#color");
let hexValue = document.querySelector("#hex");
let shouldGridExist = false;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
initializeSketchPad(sliderValue);

userColorInput.addEventListener("input", () => {
    penColor = userColorInput.value;
    originalPenColor = userColorInput.value;
})

document.getElementById("reset").onclick = resetSketchPad;


function toggleDrawingItem(item) {
    switch (item) {
        case "pen":
            penColor = originalPenColor;
            console.log(penColor);
            break;
        case "eraser":
            console.log(penColor);
            penColor = sketchPadColor;
            console.log(penColor);
            break;  
        case "rainbow":
            penColor = "rainbow"; 
            console.log("rainbow");
        default:
            // do nothing        
    }
}

function myFunction() {
    console.log("Hello World");
}


function resetSketchPad () {
    let allSquares = sketchPad.querySelectorAll("div");
    allSquares.forEach((div) => div.style.backgroundColor = sketchPadColor);
};

function addGridLines() {
    shouldGridExist = !shouldGridExist;
    let allSquares = sketchPad.querySelectorAll("div");
    if (shouldGridExist) {
        console.log(allSquares);
        allSquares.forEach((div) => {
            div.style.border = "solid";
        });
    } else {
        console.log(allSquares);
        allSquares.forEach((div) => {
            div.style.border = "none";
        });    
    }
}

slider.onchange = function() {
    sliderValue = document.getElementById("myRange").value;
    initializeSketchPad(sliderValue);
    document.getElementById("sketchPadSize").textContent = "Sketch pad size: " + sliderValue + " * " + sliderValue;
    resetSketchPad();
  }


function initializeSketchPad (boardSize) {
    sketchPad.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
    for (let i = 0; i < boardSize * boardSize; i++) {
        let sketchPadSquare = document.createElement("div");
        sketchPadSquare.style.backgroundColor = "pink";
        sketchPadSquare.addEventListener("mousedown", colorSquare);
        sketchPadSquare.addEventListener("mouseover", colorSquare);
        sketchPad.appendChild(sketchPadSquare);
    }
}


function colorSquare (e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    }
    if (penColor == "rainbow") {
        const randColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randColor);
        e.target.style.backgroundColor = "#" + randColor;
    }
    e.target.style.backgroundColor = penColor;
}




