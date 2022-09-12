var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// addItem function

function addItem(e) {
    // prevent default submit actions
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById("item").value;

    // create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append Text node
    deleteBtn.appendChild(document.createTextNode('X'))

    // Append btn to li
    li.appendChild(deleteBtn)

    // Append li to list
    itemList.appendChild(li)

    
};

// removeItem Function

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

// Filter Items
function filterItems(e) {
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list of lis
    var items = itemList.getElementsByTagName('li');
    // Convert HTMLCollection to array
    Array.from(items).forEach(function(item) {
        // Grabs the textContent from the li
        var itemName = item.firstChild.textContent;
        // Checks if the textContent matches the value of text
        if (itemName.toLowerCase().indexOf(text) != -1) {
            // displays the content that matches
            item.style.display = 'block';
        } else {
            // removes the content that matches from dom
            item.style.display = 'none';
        }
    })
}