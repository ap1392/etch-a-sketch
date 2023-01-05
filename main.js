let sketchPad = document.querySelector(".sketchPad");
let slider = document.getElementById("myRange");
let sliderValue = slider.value;
let penColor = "black";
let originalPenColor = "black";
let sketchPadColor = "pink";
let userColorInput = document.querySelector("#color");
let hexValue = document.querySelector("#hex");

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
        default:
            // do nothing        
    }
}


function resetSketchPad () {
    let allSquares = sketchPad.querySelectorAll("div");
    allSquares.forEach((div) => div.style.backgroundColor = sketchPadColor);
};

slider.onchange = function() {
    sliderValue = document.getElementById("myRange").value;
    initializeSketchPad(sliderValue);
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
    e.target.style.backgroundColor = penColor;
}




