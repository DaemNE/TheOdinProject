export default function generateFoods() {

    const listContainer = document.createElement("div")
    listContainer.classList = "list"
    const footer = document.createElement("footer")
    const content = document.querySelector(".content")
    const placeOrderButton = document.createElement("button")
    const orderList = document.querySelector(".orderList")
    const orderedItemsList = document.createElement("div")
    orderedItemsList.classList = "orderedItemsList"
    orderList.appendChild(orderedItemsList)

    let orderedFoods = [{
        name: "ITEM",
        price: "PRICE"
    }]


    let listOfFoods = [{
        name: 'salad',
        img: 'https://images-platform.99static.com//5GaMaD5-NhCb1svuLQilXu3Vf8M=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/62/62480/attachment_62480756',
        description: 'healthy salad',
        price: '€5'
    }, {
        name: 'spaghetti',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoMdLGVxNbFgKNiw3jWiQDpOU8xrSTHo4NOByaAQVpA&s',
        description: 'spaghetti healthy Veggie, gluten free, plant based, paleo Low sodium, low protein, very low fat Low Sodium, high starch diet',
        price: '€10'
    }, {
        name: 'lasagna',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC9MPTj71YdfqbzrmffoP9LMYfKsRxc6ygaBqH23Q&s',
        description: 'lasagna healthy and a great vegan option to eat whenever you like!',
        price: '€15'
    }]


    if (document.querySelector(".list")) {
        return;
    }

    if (document.querySelector(".desc")) {
        const desc = document.querySelector(".desc")
        content.removeChild(desc)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }

    if (document.querySelector(".contact")) {
        const contact = document.querySelector(".contact")
        content.removeChild(contact)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }


    for (let food in listOfFoods) {
        const foodLi = document.createElement('li')
        const foodName = document.createElement("div")
        const foodImg = document.createElement("img")
        const foodPrice = document.createElement("div")
        const foodDescription = document.createElement("div")
        const addButton = document.createElement("button")
        const removeButton = document.createElement("button")
        const buttonDiv = document.createElement("div")
        const card = document.createElement("div")
        card.classList = "card"

        foodName.textContent = listOfFoods[food].name
        foodImg.src = listOfFoods[food].img
        foodPrice.textContent = listOfFoods[food].price
        foodDescription.textContent = listOfFoods[food].description
        addButton.textContent = "Add to cart"
        addButton.classList = "addBtn"
        addButton.addEventListener("click", function() { addFood(foodName.textContent, foodPrice.textContent) })
        removeButton.textContent = "Remove from cart"
        removeButton.classList = "rmvBtn"
        removeButton.addEventListener("click", () => { alert(`removed ${foodName.textContent} from cart`) })


        buttonDiv.appendChild(addButton)
        buttonDiv.appendChild(removeButton)

        foodLi.appendChild(foodName)
        foodLi.appendChild(foodImg)
        foodLi.appendChild(foodPrice)
        foodLi.appendChild(foodDescription)
        foodLi.appendChild(buttonDiv)

        foodLi.classList = "itemList"
        card.appendChild(foodLi)
        listContainer.appendChild(card)

    }

    function addFood(foodName, foodPrice) {
        let item = {
            name: foodName,
            price: foodPrice,
        }
        orderedFoods.push(item)
        renderList()
    }

    function renderList() {

        while (orderedItemsList.firstChild) {
            orderedItemsList.removeChild(orderedItemsList.lastChild)
        }


        for (let food in orderedFoods) {
            const foodDiv = document.createElement("div")
            foodDiv.classList = "foodDiv"

            const priceDiv = document.createElement("div")
            priceDiv.classList = "priceDiv"

            const nameDiv = document.createElement("div")
            nameDiv.classList = "nameDiv"

            priceDiv.textContent = orderedFoods[food].price
            nameDiv.textContent = orderedFoods[food].name


            foodDiv.appendChild(nameDiv)
            foodDiv.appendChild(priceDiv)

            orderedItemsList.appendChild(foodDiv)

        }




    }

    placeOrderButton.textContent = "Place order now!"
    placeOrderButton.addEventListener("click", () => { alert(`Thanks for ordering! Your food is being processed`) })
    placeOrderButton.classList = "orderBtn"

    listContainer.appendChild(placeOrderButton)

    content.appendChild(listContainer)
    content.appendChild(footer)



}