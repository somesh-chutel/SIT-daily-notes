
let rootEl = document.getElementById("root");

async function onFetchData(){

    const api = "http://localhost:5000/alluser"; 

    const response = await fetch( api ); 
    const data = await response.json();

    console.log( data );

    for( each of data ){

        let headingEl = document.createElement("h1"); 
        headingEl.textContent = each.model;
        rootEl.appendChild( headingEl );

    }

}