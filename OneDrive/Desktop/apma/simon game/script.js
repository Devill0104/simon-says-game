let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let userColor=[];
let btns = ["yellow","red","green","blue"];
let h4 = document.querySelector("h4");

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },100);
}

function checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h4.innertext = `Game over! Your score was ${level} .Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress());
}

function levelup(){
    userSeq = [];
    level++;
    h4.innertext = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randColor);
    gameSeq.push(randBtn);
    btnflash(randBtn);
}

function reset(){
    start = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}

document.addEventListener("keypress", function(){
    console.log("keypressed");
    if(start == false){
        start = true;
        levelup();
    }
});