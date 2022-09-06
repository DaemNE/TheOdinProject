const container = document.getElementById("container");
let resolution = 16;
let color = "white"
let method = "mouseover";
document.getElementById("setWhiteButton").style.backgroundColor = "green"
document.getElementById("set16x16").style.backgroundColor = "green"
document.getElementById("onHoverButton").style.backgroundColor = "green"

function setWhite() {
    color = "white"
    document.getElementById("setWhiteButton").style.backgroundColor = "green"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
    document.getElementById("setRainbowButton").style.backgroundColor = "white"

}

function setBlue() {
    color = "blue"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "green"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
    document.getElementById("setRainbowButton").style.backgroundColor = "white"

}

function setYellow() {
    color = "yellow"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "green"
    document.getElementById("setRainbowButton").style.backgroundColor = "white"

}

function setRainbow() {
    color = "rainbow"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
    document.getElementById("setRainbowButton").style.backgroundColor = "green"
}

function setResolution256(){
    updateGrid()
    resolution = 16;
    document.getElementById("set16x16").style.backgroundColor = "green"
    document.getElementById("set32x32").style.backgroundColor = "white"
    document.getElementById("set64x64").style.backgroundColor = "white"
    makeRows(resolution, method)
}

function setResolution1024(){
    updateGrid()
    resolution = 32;
    document.getElementById("set16x16").style.backgroundColor = "white"
    document.getElementById("set32x32").style.backgroundColor = "green"
    document.getElementById("set64x64").style.backgroundColor = "white"
    makeRows(resolution, method)
}

function setResolution4096(){
    updateGrid()
    resolution = 64;
    document.getElementById("set16x16").style.backgroundColor = "white"
    document.getElementById("set32x32").style.backgroundColor = "white"
    document.getElementById("set64x64").style.backgroundColor = "green"
    makeRows(resolution, method)
}

function setMethodHover() {
    method = "mouseover"
    updateGrid()
    makeRows(resolution, method)
    document.getElementById("onHoverButton").style.backgroundColor = "green"
    document.getElementById("onClickButton").style.backgroundColor = "white"
}
function setMethodOnClick() {
    method = "click"
    updateGrid()
    makeRows(resolution, method)
    document.getElementById("onHoverButton").style.backgroundColor = "white"
    document.getElementById("onClickButton").style.backgroundColor = "green"
}


function makeRows(resolution, method) {
    container.style.setProperty('--grid-rows', resolution);
    container.style.setProperty('--grid-cols', resolution);
    let count = 0
    for (let i = 0; i < (resolution * resolution); i++) {
        let cell = document.createElement("div");
        let luckyNumber = Math.floor(Math.random()*500);
        
        if (luckyNumber === 1 && count < 1 ) {
            
            cell.textContent = "*"
            cell.style.color = "white"
            cell.style.fontSize = "x-large";
            count++;
        }
        cell.addEventListener(method, (e) => {
            
            if (color === "rainbow") {
                let randomNumber = Math.floor(Math.random()*7)+1

                switch (randomNumber) {
                    case 1: cell.style.backgroundColor = "red";
                    break;
                    case 2: cell.style.backgroundColor = "orange";
                    break;
                    case 3: cell.style.backgroundColor = "yellow";
                    break;
                    case 4: cell.style.backgroundColor = "green";
                    break;
                    case 5: cell.style.backgroundColor = "blue";
                    break;
                    case 6: cell.style.backgroundColor = "indigo";
                    break;
                    case 7: cell.style.backgroundColor = "violet";
                    break;
                }
            }
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









makeRows(resolution, method)