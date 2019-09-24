var input = document.querySelector(".input");
var add = document.querySelector("button");
add.className = "add";
var bookList = [];

function render (){
    

}


 function enterBooks (event){
     if (event.keyCode === 13 && event.target.value.trim() != "" ) {
         console.log(event.target.value, "inside...")
         book = event.target.value ;
         bookList.push(book);
         event.target.value = "";
         console.log(bookList);
        
     }
 }
 function addBooks (event) {
    if (event.target.previousElementSibling.value.trim() != "") {
        book = event.target.previousElementSibling.value;
        bookList.push(book);
        event.target.previousElementSibling.value = "";
        console.log(bookList);
    }
    }

input.addEventListener('keydown',enterBooks);
add.addEventListener('click',addBooks);

