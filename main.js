let sketchPad = document.querySelector(".sketchPad");
sketchPad.style.gridTemplateColumns = "repeat(16, 1fr)";
sketchPad.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    let sketchPadSquare = document.createElement("div");
    sketchPadSquare.style.backgroundColor = "pink";
    sketchPad.insertAdjacentElement("beforeend", sketchPadSquare);
    sketchPadSquare.addEventListener("click", e =>{
        sketchPadSquare.style.backgroundColor = "black";
    });
}
