let rootEl = document.getElementById("root");

function getTodoList(){

    let data = localStorage.getItem("myList");

    if( data === null ){

        return [];
    }
    else{

        let parsedTodo = JSON.parse(data);

        return parsedTodo;
    }

}

let todoList = getTodoList(); 

function onStatusChange(checkId,titleId){

    let myTitle = document.getElementById(titleId);
    let chkEl = document.getElementById(checkId); 
    let todoid = titleId.slice(5);
    

    if( chkEl.checked ){ // true

        myTitle.style.textDecoration = "line-through";
    }
    else{
        myTitle.style.textDecoration = "none";
    }

    for( each of todoList ){

        if( each.id == todoid ){

            if( each.isCHecked === true ){

                each.isCHecked =false;
            }
            else{

                each.isCHecked = true;
            }

        }

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
    if(todo.isCHecked === true){
        checkBoxEl.checked = true;
    }
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
    if(todo.isCHecked === true ){
        titleEl.style.textDecoration = "line-through";
    }
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
        title : userInEl,
        isCHecked : false
    }

    createAndAppendTodo( newTodo );

    todoList.push( newTodo );

    console.log( todoList );

    document.getElementById("userIn").value = "";
}

function onSetitem(){

    let strTodo = JSON.stringify(todoList);

    localStorage.setItem("myList",strTodo)

}
