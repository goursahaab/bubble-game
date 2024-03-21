var hitrn;
var score=0;
function makebubble(){
    var multipleBubble="";

for(let i=1;i<=161;i++){
    var rn=Math.floor(Math.random()*10)
    multipleBubble += ` <div class="bubble">${rn}</div>`;
}
document.querySelector(".bottumpannel").innerHTML=multipleBubble;
}

function makeNewHit(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#newHit").innerHTML=hitrn;
    // console.log(rn)
}
function increasescore(){
    score += 10;
    document.querySelector("#scorevalue").textContent=score
}



var timer=60;
function runtimer(){
    let timerinterval=setInterval(function(){
        if(timer>=0){
       
        document.querySelector("#timevalue").textContent=timer;
        timer--;
    }else{
        clearInterval(timerinterval);
        document.querySelector(".bottumpannel").innerHTML="<div><h2>game over <br> please refresh page for play again </h2></div>"

    }
    }, 1000);

}
    
    document.querySelector(".bottumpannel").addEventListener("click",function(det){
        var clickedNum= Number(det.target.textContent);
        // console.log(hitrn)
        if(clickedNum === hitrn){
            increasescore();
            makeNewHit();
            makebubble()
        }

    })



makeNewHit()
makebubble();
runtimer();
