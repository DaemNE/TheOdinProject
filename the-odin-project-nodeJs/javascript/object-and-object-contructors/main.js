function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() {
        return `Title of book =  ${title}\nName of author = ${author}\nAmount of pages = ${pages}\nRead status = ${read}`
    }
}

var theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 180, true);

console.log(theHobbit.info())