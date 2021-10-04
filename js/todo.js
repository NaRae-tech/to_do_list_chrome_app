const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

let toDos=[];
const TODOS_KEY="todos"

function deleteToDo(event){
  const li=event.target.parentElement;
  li.remove();
  toDos=toDos.filter((toDo) => toDo.id !== parseInt(li.className));
  saveToDos();
}
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function paintToDo(newToDoObj){
  const li = document.createElement("li");
  const span=document.createElement("span");
  li.className=newToDoObj.id;
  span.innerText = newToDoObj.text;
  span.className = "todo-list-text";
  const button=document.createElement("button");
  button.innerText = "❌";
  button.className = "todo-list-button";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  console.log(toDos);
}
function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo=toDoInput.value;
  const newToDoObj={
    text:newToDo,
    id:Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  toDoInput.value="";
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos=localStorage.getItem(TODOS_KEY);
if (savedToDos!=null){
  const parsedToDos=JSON.parse(savedToDos);
  toDos=parsedToDos;
  parsedToDos.forEach(paintToDo);
}