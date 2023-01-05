let sketchPad = document.querySelector(".sketchPad");
let slider = document.getElementById("myRange");
let sliderValue = slider.value;
console.log(sliderValue);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
initializeSketchPad(sliderValue);



document.getElementById("reset").onclick = resetSketchPad;

function resetSketchPad () {
    let allSquares = sketchPad.querySelectorAll("div");
    allSquares.forEach((div) => div.style.backgroundColor = "pink");
};

slider.onchange = function() {
    console.log("Hello world");
    sliderValue = document.getElementById("myRange").value;
    console.log(sliderValue);
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
        console.log("you are hovering!")
        return
    }
    console.log("you have clicked a square!")
    console.log( e.target.style.backgroundColor);
    e.target.style.backgroundColor = "black";
}




