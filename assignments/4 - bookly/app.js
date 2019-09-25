var input = document.querySelector(".input");
var add = document.querySelector("button");
add.className = "add";
const ul = document.querySelector("ul");
const searchBar = document.querySelector('.outline');
hide = document.querySelector('#hide');
var bookList = JSON.parse(localStorage.getItem('book-list')) || [];

function displayBooks (arrList) {
    ul.innerHTML = "";
    arrList.forEach(book => {
        let li = document.createElement('li');
        li.textContent = book;
        ul.appendChild(li);
    });
    localStorage.setItem('book-list',JSON.stringify(bookList));
}

 function enterBooks (event){
     if (event.keyCode === 13 && event.target.value.trim() != "" ) {
         console.log(event.target.value, "inside...")
         book = (event.target.value).toLowerCase();
         bookList.push(book);
         event.target.value = ""; 
         displayBooks(bookList);
         }
        console.log(bookList);
        
     }

 function addBooks (event) {
    if (event.target.previousElementSibling.value.trim() != "") {
        book = (event.target.previousElementSibling.value).toLowerCase();
        bookList.push(book);
        event.target.previousElementSibling.value = "";
        console.log(bookList);
        displayBooks(bookList);
         }
    }

function search (event) {
    let query = (event.target.value.trim()).toLowerCase();
    let searchResults = bookList.filter(book => {
        return book.includes(query)
    });
    console.log(searchResults);
    displayBooks(searchResults);
}
function check (event) {
    
 if (event.target.checked == true){
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
}
}
displayBooks(bookList);


input.addEventListener('keydown',enterBooks);
add.addEventListener('click',addBooks);
searchBar.addEventListener('keydown',search);
hide.addEventListener('click',check);


