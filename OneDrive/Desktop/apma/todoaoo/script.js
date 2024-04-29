let btn1=document.querySelector("button");
let ip=document.querySelector("input");
let li=document.querySelector("li");
let ul=document.querySelector("ul");


btn1.addEventListener("click", function(){

    let task=document.createElement("li");
    task.innerText=input.value;
   
    let del=document.createElement("button");
    del.innerText="Delete";
    task.appendChild(del);
   
    del.classList.add("btn");
    del.classList.add("del-btn");
    del.classList.add("btn-outline-danger");

    ul.appendChild(task); 
    ip.value="";
    
});

ul.addEventListener("click", function(event){

    if(event.target.nodeName== "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
