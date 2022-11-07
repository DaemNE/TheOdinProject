const buttonLeft = document.querySelector(".buttonLeft")
const buttonRight = document.querySelector(".buttonRight")
buttonLeft.addEventListener("click", function() {
    sliderLeft()
})
buttonRight.addEventListener("click", function() {
    sliderRight()
})

let count = 3

function sliderLeft() {
    const front = document.querySelector(".front")
    const left = document.querySelector(".left")
    const farLeft = document.querySelector(".farLeft")
    const right = document.querySelector(".right")
    const farRight = document.querySelector(".farRight")

    front.classList = "left frontToLeft"
    left.classList = "farLeft leftToFarLeft"
    farLeft.classList = "farRight farLeftToFarRight"
    farRight.classList = "right farRightToRight"
    right.classList = "front rightToFront"

    if (count === 1) {
        count = 6
    }
    count--
    checkSelected()
}

function sliderRight() {
    const front = document.querySelector(".front")
    const left = document.querySelector(".left")
    const farLeft = document.querySelector(".farLeft")
    const right = document.querySelector(".right")
    const farRight = document.querySelector(".farRight")

    front.classList = "right frontToRight"
    left.classList = "front leftToFront"
    farLeft.classList = "left farLeftToLeft"
    farRight.classList = "farLeft farRightToFarLeft"
    right.classList = "farRight rightToFarRight"

    if (count === 5) {
        count = 0
    }
    count++
    checkSelected()
}

function checkSelected() {
    const one = document.getElementById("1").classList = "circle"
    const two = document.getElementById("2").classList = "circle"
    const third = document.getElementById("3").classList = "circle"
    const four = document.getElementById("4").classList = "circle"
    const five = document.getElementById("5").classList = "circle"

    const selected = document.getElementById(`${count}`)
    selected.classList = "circle selected"
}