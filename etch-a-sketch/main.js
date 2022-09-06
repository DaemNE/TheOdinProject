const container = document.getElementById("container");
let resolution = 16;
let color = "white"
let method = "mouseover";
let background = "white";
let luckyState = false;
let luckyColor = "white"

document.getElementById("setWhiteButton").style.backgroundColor = "green"
document.getElementById("set16x16").style.backgroundColor = "green"
document.getElementById("onHoverButton").style.backgroundColor = "green"
document.getElementById("setCanvasWhite").style.backgroundColor = "green"
document.getElementById("toggleLuckyButton").style.backgroundColor = "red"

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

function setMethodHover() {
    method = "mouseover"
    updateGrid()
    makeRows(resolution)
    document.getElementById("onHoverButton").style.backgroundColor = "green"
    document.getElementById("onClickButton").style.backgroundColor = "white"
}
function setMethodOnClick() {
    method = "click"
    updateGrid()
    makeRows(resolution)
    document.getElementById("onHoverButton").style.backgroundColor = "white"
    document.getElementById("onClickButton").style.backgroundColor = "green"
}

function setCanvasWhite() {
    background = "white"
    luckyColor = "white"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "green"
    document.getElementById("setCanvasBlack").style.backgroundColor = "white"
    document.getElementById("setCanvasRed").style.backgroundColor = "white"
    document.getElementById("setCanvasBlue").style.backgroundColor = "white"
}
function setCanvasBlack() {
    background = "black"
    luckyColor = "black"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "white"
    document.getElementById("setCanvasBlack").style.backgroundColor = "green"
    document.getElementById("setCanvasRed").style.backgroundColor = "white"
    document.getElementById("setCanvasBlue").style.backgroundColor = "white"
    
}
function setCanvasRed() {
    background = "red"
    luckyColor = "red"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "white"
    document.getElementById("setCanvasBlack").style.backgroundColor = "white"
    document.getElementById("setCanvasRed").style.backgroundColor = "green"
    document.getElementById("setCanvasBlue").style.backgroundColor = "white"
}
function setCanvasBlue() {
    background = "blue"
    luckyColor = "blue"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "white"
    document.getElementById("setCanvasBlack").style.backgroundColor = "white"
    document.getElementById("setCanvasRed").style.backgroundColor = "white"
    document.getElementById("setCanvasBlue").style.backgroundColor = "green"
}

function toggleLucky() {
    if (luckyState) {
        luckyState = false
        document.getElementById("toggleLuckyButton").style.backgroundColor = "red"
    } else {
        luckyState = true
        document.getElementById("toggleLuckyButton").style.backgroundColor = "green"
    }
    updateGrid()
    makeRows(resolution)

}

function makeRows(resolution) {
    container.style.setProperty('--grid-rows', resolution);
    container.style.setProperty('--grid-cols', resolution);
    let count = 0
    for (let i = 0; i < (resolution * resolution); i++) {
        let cell = document.createElement("div");
        let luckyNumber = Math.floor(Math.random()*500);

        if (resolution === 16) {
            cell.style.fontSize = "x-large";
        } else if (resolution === 32) {
            cell.style.fontSize = "medium";
        } else {
            cell.style.fontSize = "xx-small";
        }

        cell.style.color = luckyColor
        cell.style.backgroundColor = background;

        if (luckyNumber === 1 && count < 1 && luckyState) {
            console.log("X marked")
            cell.textContent = "*"
            document.getElementById("isLucky").innerText = "We've placed a gift"
            count++;
        }

        if (background === "black") {
            cell.style.borderColor = "white"
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

            if (background === "black" && color === "white") {
                cell.style.borderColor = "black"
            }
            if (background === "white" && color === "black") {
                cell.style.borderColor = "white"
            }
            cell.style.backgroundColor = color;
        }
        )
        container.appendChild(cell).className = "grid-item"
        
    };
};

function updateGrid() {
    let grid = document.getElementById("container")
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

makeRows(resolution)