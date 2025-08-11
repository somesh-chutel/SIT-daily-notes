let rootEl = document.getElementById("root");

let todoList = ["HTML","CSS","Bootstrap"]; 


function createAndAppendTodo(todo){

    let listItem = document.createElement("li"); 
    listItem.classList.add("list-cont")
    rootEl.appendChild( listItem );

    let checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    listItem.appendChild(checkBoxEl);

    let labelEl = document.createElement("label");
    labelEl.classList.add("label-cont");
    listItem.appendChild(labelEl);

    let titleEl = document.createElement("h4");
    titleEl.textContent = todo;
    labelEl.appendChild(titleEl);

    let deltBtn = document.createElement("button");
    deltBtn.classList.add("dlt-btn"); 
    labelEl.appendChild(deltBtn);
}


for( each of todoList ){

    createAndAppendTodo( each );

}