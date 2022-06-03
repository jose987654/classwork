/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable camelcase */
function Domchanges (){
const paragraph = document.createElement("p");
const todo_list = document.querySelector("ul");
const body = document.querySelector("body");
const new_todo_list = document.createElement("li");
const new_todo_list1 = document.createElement("li");
const new_todo_list2 = document.createElement("li");
const Todonew = document.createElement("li");
const FeedDom = document.createElement("li");

FeedDom.textContent = "Feed dog";
FeedDom.style.color = " red";
FeedDom.style.fontSize = " 30px";
paragraph.style.border = "10px solid blue";
Todonew.textContent = "updating  bills";
paragraph.textContent = "new paragraph";
paragraph.innerHTML = "im a paragraph with <strong>bold</strong>";
todo_list.style.border = "10px solid #125";
new_todo_list.textContent = "do homework";
new_todo_list1.textContent = "water";
new_todo_list2.textContent = "fetch";

console.log(paragraph);
body.appendChild(paragraph);
todo_list.appendChild(new_todo_list);
todo_list.appendChild(new_todo_list1);
todo_list.appendChild(new_todo_list2);
todo_list.insertBefore(Todonew, todo_list.firstElementChild);
todo_list.replaceChild(FeedDom, todo_list.children[1]);
todo_list.removeChild(todo_list.lastElementChild);
todo_list.children[4].remove();
}
Domchanges()