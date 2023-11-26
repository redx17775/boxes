let x_c;
let y_c;
let x_p;
let r = "Rock";
let p = "Paper";
let s = "Scissor";

function comp(){
    x_c = Math.floor(Math.random()*3) + 1;
    switch (x_c){
        case(1): y_c = "Rock";break;
        case(2): y_c = "Paper";break;
        case(3): y_c = "Scissor";break;
    }
    return y_c;
}

function playerC1(){
    const c = new comp();
    x_p = document.getElementById("btn1").innerHTML;
    if(x_p == "Rock" && y_c=="Paper"){
        document.getElementById("imgS").src = "img/lose.gif";
        document.getElementById("playerChose").innerHTML = r;
        document.getElementById("ComputerChose").innerHTML = p;
        document.getElementById("res").innerHTML = "U lose :3";
    }
    else{
        if(x_p == "Rock" && y_c=="Rock"){
            document.getElementById("imgS").src = "img/draw.gif";
            document.getElementById("playerChose").innerHTML = r;
            document.getElementById("ComputerChose").innerHTML = r;
            document.getElementById("res").innerHTML = "draw :O";
            }
        else{
            document.getElementById("imgS").src = "img/com win.gif";
            document.getElementById("playerChose").innerHTML = r;
            document.getElementById("ComputerChose").innerHTML = s;
            document.getElementById("res").innerHTML = "U won >:3";
        }
    }
}

function playerC2(){
    const c = new comp();
    x_p = document.getElementById("btn2").innerHTML;
    if(x_p == p && y_c== s){
        document.getElementById("imgS").src = "img/lose.gif";
        document.getElementById("playerChose").innerHTML = p;
        document.getElementById("ComputerChose").innerHTML = s;
        document.getElementById("res").innerHTML = "comp win :3";
    }
    else{
        if(x_p == p && y_c== p){
            document.getElementById("imgS").src = "img/draw.gif";
            document.getElementById("playerChose").innerHTML = p;
            document.getElementById("ComputerChose").innerHTML = p;
            document.getElementById("res").innerHTML = "draw :O";
            }
        else{
            document.getElementById("imgS").src = "img/com win.gif";
            document.getElementById("playerChose").innerHTML = p;
            document.getElementById("ComputerChose").innerHTML = r;
            document.getElementById("res").innerHTML = "U won >:3";
        }
    }
}
function playerC3(){
    const c = new comp();
    x_p = document.getElementById("btn3").innerHTML;
    if(x_p == s && y_c== r){
        document.getElementById("imgS").src = "img/lose.gif";
        document.getElementById("playerChose").innerHTML = s;
        document.getElementById("ComputerChose").innerHTML = r;
        document.getElementById("res").innerHTML = "comp win :3";
    }
    else{
        if(x_p == s && y_c== s){
            document.getElementById("imgS").src = "img/draw.gif";
            document.getElementById("playerChose").innerHTML = s;
            document.getElementById("ComputerChose").innerHTML = s;
            document.getElementById("res").innerHTML = "draw :O";
            }
        else{
            document.getElementById("imgS").src = "img/com win.gif";
            document.getElementById("playerChose").innerHTML = s;
            document.getElementById("ComputerChose").innerHTML = p;
            document.getElementById("res").innerHTML = "U won >:3";
        }
    }
}




//const p = new player();
