const allCards = document.querySelectorAll(".duck-img")

const ducksButton = document.getElementById("ducks")
const catsButton = document.getElementById("cats")
const dogsButton = document.getElementById("dogs")

ducksButton.addEventListener("click", () => {
    allCards.forEach(card => {
        card.src = "https://lingopolo.org/dutch/sites/lingopolo.org.dutch/files/styles/entry/public/images/2019/05/21/duck-726022_1920.jpg"
    });
})
catsButton.addEventListener("click", () => {
    allCards.forEach(card => {
        card.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
    });
})
dogsButton.addEventListener("click", () => {
    allCards.forEach(card => {
        card.src = "https://www.hezehofpups.be/swfiles/files/gr-reutje4.jpg?nc=1657899697"
    });
})