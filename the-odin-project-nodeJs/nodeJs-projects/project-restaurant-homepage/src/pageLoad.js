export default function pageLoad() {

    const content = document.querySelector(".content")
    const header = document.createElement("div")
    const aboutHeader = document.createElement("div")
    const menuHeader = document.createElement("div")
    const contactHeader = document.createElement("div")
    const description = document.createElement("div")
    const descImg = document.createElement("img")
    const descText = document.createElement("div")
    const list = document.createElement("ul")
    const orderList = document.createElement("div")
    orderList.classList = 'orderList'
    const footer = document.createElement("footer")
    const orderListBtn = document.createElement("button")
    orderListBtn.classList = "orderListBtn"
    orderListBtn.textContent = "Order now!"
    orderListBtn.addEventListener("click", function() { alert("order has been placed!") })
    const orderListHeader = document.createElement("div")
    orderListHeader.textContent = "Shopping cart"
    orderListHeader.classList = "orderListHeader"


    aboutHeader.textContent = "About"
    menuHeader.textContent = "Menu"
    contactHeader.textContent = "Contact"


    aboutHeader.classList = "aboutHeader"
    menuHeader.classList = "menuHeader"
    contactHeader.classList = "contactHeader"

    header.appendChild(aboutHeader)
    header.appendChild(menuHeader)
    header.appendChild(contactHeader)
    header.classList = "header"

    descImg.src = 'https://thumbs.dreamstime.com/b/pasta-logo-hand-drawn-vector-illustration-plate-spaghetti-stock-italian-163269011.jpg'
    descImg.classList = "img"

    descText.textContent = "This is some description about our restaurant"

    description.classList = "desc"
    description.appendChild(descImg)
    description.appendChild(descText)

    orderList.appendChild(orderListHeader)
    orderList.appendChild(orderListBtn)

    if (!document.querySelector(".contactHeader")) { content.appendChild(header) }

    content.appendChild(description)
    content.appendChild(list)
    content.appendChild(footer)
    content.appendChild(orderList)


}