let rootEl = document.getElementById("root");





function onAddEl(){
    let headingEl = document.createElement("button");
    headingEl.textContent = "Remove";
    headingEl.classList.add("btn","btn-danger");
    headingEl.id = "myBtn";
    headingEl.onclick = function(){
        rootEl.removeChild(headingEl);
    }
    rootEl.appendChild(headingEl);
    console.log( headingEl );
}
