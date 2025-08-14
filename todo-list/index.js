let rootEl = document.getElementById("root");

let todoList = [
    {
        id : 1,
        title : "HTML"
    },
    {
        id : 2,
        title : "CSS"
    },
    {
        id : 3,
        title : "Bootstrap"
    }
]; 

function onStatusChange(checkId,titleId){

    let myTitle = document.getElementById(titleId);
    let chkEl = document.getElementById(checkId); 

    if( chkEl.checked ){ // true

        myTitle.style.textDecoration = "line-through";
    }
    else{
        myTitle.style.textDecoration = "none";
    }

}

function onDeleteTodo(todoId){

    let myTodo = document.getElementById(todoId);

    rootEl.removeChild( myTodo );

}


function createAndAppendTodo(todo){

    let checkboxId = "myChekbox" + todo.id;
    let titleId = "title" + todo.id;
    let todoId = "todo" + todo.id;

    let listItem = document.createElement("li"); 
    listItem.classList.add("list-cont")
    listItem.id = todoId;
    rootEl.appendChild( listItem );

    let checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    checkBoxEl.id = checkboxId;
    checkBoxEl.onclick = function(){
        onStatusChange(checkboxId,titleId);
    }
    listItem.appendChild(checkBoxEl);

    let labelEl = document.createElement("label");
    labelEl.classList.add("label-cont");
    labelEl.htmlFor = checkboxId;
    listItem.appendChild(labelEl);

    let titleEl = document.createElement("h4");
    titleEl.textContent = todo.title;
    titleEl.id = titleId;
    labelEl.appendChild(titleEl);

    let deltBtn = document.createElement("button");
    deltBtn.classList.add("dlt-btn"); 
    deltBtn.onclick = function(){
        onDeleteTodo(todoId);
    }
    labelEl.appendChild(deltBtn);

    // <i class="fa-solid fa-trash"></i>
    let iconEl = document.createElement("i");
    iconEl.classList.add("fa-solid","fa-trash");
    deltBtn.appendChild( iconEl );
}


for( each of todoList ){

    createAndAppendTodo( each );

}


function onAddTodo(){
    let userInEl = document.getElementById("userIn").value;
    let uniqueId = todoList.length+1;

    let newTodo = {
        id : uniqueId,
        title : userInEl
    }

    createAndAppendTodo( newTodo );

    todoList.push( newTodo );

    console.log( todoList );

    document.getElementById("userIn").value = "";
}