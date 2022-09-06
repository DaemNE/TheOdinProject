const container = document.getElementById("container");
let resolution = 16;
let color = "white"
document.getElementById("setWhiteButton").style.backgroundColor = "green"
document.getElementById("set16x16").style.backgroundColor = "green"

function setWhite() {
    color = "white"
    document.getElementById("setWhiteButton").style.backgroundColor = "green"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
}
function setBlue() {
    color = "blue"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "green"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
}
function setYellow() {
    color = "yellow"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "green"
}

function setResolution256(){
    updateGrid()
    resolution = 16;
    document.getElementById("set16x16").style.backgroundColor = "green"
    document.getElementById("set32x32").style.backgroundColor = "white"
    document.getElementById("set64x64").style.backgroundColor = "white"
    makeRows(resolution)
}

function setResolution1024(){
    updateGrid()
    resolution = 32;
    document.getElementById("set16x16").style.backgroundColor = "white"
    document.getElementById("set32x32").style.backgroundColor = "green"
    document.getElementById("set64x64").style.backgroundColor = "white"
    makeRows(resolution)
}

function setResolution4096(){
    updateGrid()
    resolution = 64;
    document.getElementById("set16x16").style.backgroundColor = "white"
    document.getElementById("set32x32").style.backgroundColor = "white"
    document.getElementById("set64x64").style.backgroundColor = "green"
    makeRows(resolution)
}



function makeRows(resolution) {
    container.style.setProperty('--grid-rows', resolution);
    container.style.setProperty('--grid-cols', resolution);
    for (let i = 0; i < (resolution * resolution); i++) {
        let cell = document.createElement("div");
        
        cell.addEventListener("mouseover", (e) => {
            
            cell.style.backgroundColor = color;
        }
        )
        container.appendChild(cell).className = "grid-item"
        
    };
};

function updateGrid() {
    let grid = document.getElementById("container")
    console.log(resolution)
    for (let i = 0; i < resolution * resolution; i++) {
        grid.removeChild(document.querySelector("#container .grid-item"))
    }
}

function clearCanvas() {
    let cells = document.querySelectorAll(".grid-item")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white"
    }
}









makeRows(resolution,resolution)