let sketchPad = document.querySelector(".sketchPad");
let resetButton = document.getElementById("Reset Board<");
console.log(resetButton);
sketchPad.style.gridTemplateColumns = "repeat(16, 1fr)";
sketchPad.style.gridTemplateRows = "repeat(16, 1fr)";
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

for (let i = 0; i < 256; i++) {
    let sketchPadSquare = document.createElement("div");
    sketchPadSquare.style.backgroundColor = "pink";
    sketchPadSquare.addEventListener("mousedown", colorSquare);
    sketchPadSquare.addEventListener("mouseover", colorSquare);
    sketchPad.appendChild(sketchPadSquare);

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




