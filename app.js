console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book { 
    constructor(id,title,author,read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    bookCnt = 0;
    bookArr = [];
    nextBookId = 0;
    rows = 0;

    markRead(id) {
        for (let i = 0;i<this.bookArr.length;i++) {
            if (this.bookArr[i].id == id) { 
                this.bookArr[i].read = true;
                break;
            }
        }
    }

    addBook(addTitle, addAuthor, addRead) {
        let book = new Book(this.nextBookId,addTitle,addAuthor,addRead);
        this.bookArr.push(book);
        this.bookCnt++;
        this.nextBookId++;

        title.value = "";
        author.value = "";
        read.checked = false;
        title.focus();
    }

    removeBook(id) {
       for (let i = 0;i<this.bookArr.length;i++) {
            if (this.bookArr[i].id == id) { 
                this.bookArr.splice(i,1);
                this.bookCnt--;
                break;
            }
        }
    }

    displayNewBook() {
        let table = document.getElementById("table");
        //using the bookCnt property which is presently
        //1. the row we want to add (row 0 is the header)
        //2. 1 more than the index of the array we want to add
        let rowId = this.bookCnt;
        //don't care what id is - just where element is in array
        let bookPlaceInArray = rowId-1;
        let row = table.insertRow(rowId);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3)

        // Add some text to the new cells:
        cell1.innerHTML = `<td><i id=${rowId}-${this.bookArr[bookPlaceInArray].id} class="material-icons">delete</i></td>`
        cell1.addEventListener("click", (e) => {
            //get row and get id
            //delete from table
            let dinfo = e.target.id.split("-");
            table.deleteRow(dinfo[0]);
            //delete from array
            this.removeBook(dinfo[1])
            this.removeBook;

        })
        cell2.innerHTML = this.bookArr[bookPlaceInArray].title;
        cell3.innerHTML = this.bookArr[bookPlaceInArray].author;
        let checked = this.bookArr[bookPlaceInArray].read ? "checked" : "";
        let checkStyle = this.bookArr[bookPlaceInArray].read ? "disabled" : "";
        cell4.innerHTML = `<input type="checkbox" id="read${this.bookArr[bookPlaceInArray].id}" ${checked} ${checkStyle}/>Read`;
        cell4.addEventListener("change", e => {
            let current = document.getElementById(e.target.id);
            current.disabled = true;
            let bookToChangeId = parseInt(e.target.id.substr(4));
            this.markRead(bookToChangeId);
        })
            
        
    }

    

    showBooks () {
        for (let i=0;i<this.bookArr.length;i++) {
            console.log(this.bookArr[i]);
        }
    }
}

let table = document.getElementById("table");
let title = document.getElementById("title");
let author = document.getElementById("author");
let read = document.getElementById("read")
let library = new Library();
document.getElementById("subBtn").addEventListener("click", (e) => {
    e.preventDefault();
    library.addBook(title.value, author.value, read.checked);
    library.displayNewBook();
})
/* document.getElementById("show-me").addEventListener("click", e => {
    library.showBooks();
}) */
