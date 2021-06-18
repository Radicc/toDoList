const todoButton = document.querySelector("todo-button");
let todoList = document.getElementById("todo-list");

let newTodo = [];

addTodo = () =>{

    let todoInput = document.getElementById("todo-input").value;
    //Create LI
    newTodo = document.createElement("li");
    newTodo.innerText = todoInput;

    //Check tras BUTTON
    const trashButton = document.createElement("span");
    trashButton.innerText = "X";
    trashButton.addEventListener("click", removeTodo);
    newTodo.appendChild(trashButton);

    todoList.appendChild(newTodo);
};

removeTodo = () =>{

    

    todoList.addEventListener('click', function(e){
        if( e.target.nodeName == "SPAN") {
            
            let li = e.target.closest('li');
            let nodes = Array.from( todoList.children );
            let index = nodes.indexOf( li );

            e.target.parentNode.remove(); 
        } 
     });
}