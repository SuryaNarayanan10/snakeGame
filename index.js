//initial values
dirG = "R";
snakeL = 1;
speed=200;
b=[];
x=[];
y=[];
gameOver=document.getElementById("gameOver");
score=document.getElementById("score");
con=document.getElementById("container");
food = document.getElementById("f");
foodPosition();
function foodPosition(){
    fx=Math.ceil(Math.random()*24)*24;
    fy=Math.ceil(Math.random()*24)*24;
    food.style.left=fx+"px";
    food.style.bottom=fy+"px";
}
b[0] = document.getElementById("b0");
x[0] = 120;
y[0] = 312;
b[0].style.left = x[0]+"px";
b[0].style.bottom = y[0]+"px";

//movement
game = setInterval(function(){
    dir=dirG;
    for(i=snakeL-1;i>=1;i--){
        x[i]=x[i-1];
        y[i]=y[i-1];
        b[i].style.left = x[i]+"px";
        b[i].style.bottom = y[i]+"px";
    }
    if(dir=="L"){
        x[0]-=24;
        if(x[0]==-24)x[0]=576;
        b[0].style.left = x[0]+"px";
    }
    if(dir=="U"){
        y[0]+=24;
        if(y[0]==600)y[0]=0;
        b[0].style.bottom = y[0]+"px";
    }
    if(dir=="R"){
        x[0]+=24;
        if(x[0]==600)x[0]=0;
        b[0].style.left = x[0]+"px";
    }
    if(dir=="D"){
        y[0]-=24;
        if(y[0]==-24)y[0]=576;
        b[0].style.bottom = y[0]+"px";
    }  
    b[snakeL-1].style.display="block";
    if(x[0]==fx && y[0]==fy){
        foodPosition();
        b[snakeL]=document.createElement("div");
        b[snakeL].setAttribute("id","b"+snakeL.toString());
        b[snakeL].setAttribute("class","snake");
        b[snakeL].style.display="none"
        con.appendChild(b[snakeL]);
        score.innerHTML=snakeL;   
        snakeL+=1;
    }
    for(j=1;j<snakeL;j++){
    if(x[j]==x[0] && y[j]==y[0]){
        clearInterval(game);
        gameOver.innerHTML="GAME OVER";
    }}
},speed);

//controls
document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:   
            if(dir=="R")break;
            dirG="L";
            break;
        case 38:
            if(dir=="D")break;
            dirG="U"
            break;
        case 39:
            if(dir=="L")break;
            dirG="R"
            break;
        case 40:
            if(dir=="U")break;
            dirG="D"
            break;
        }
};










