let running=false;
let count=0;
let timer=null;
document.getElementById("start").onclick=function(){
    
    if(!running){
        timer=setInterval(update,10);
        running=true;

    }

}
function update(){
    count=count+10;
    let hours=Math.floor(count/(1000*60*60));
    let minutes=Math.floor(count/(1000*60)%60);
    let seconds=Math.floor(count/(1000)%60);
    let milli=Math.floor(count/10%100);
    document.getElementById("stop_watch").textContent=hours.toString().padStart(2,0) +":"+minutes.toString().padStart(2,0) +":"+seconds.toString().padStart(2,0) +":"+milli.toString().padStart(2,0) ;
}
document.getElementById("reset").onclick=function(){
    document.getElementById("stop_watch").textContent="00:00:00:00";
    running=false;
    count=0;
    clearInterval(timer);

}
document.getElementById("stop").onclick=function(){
    clearInterval(timer);
    running =false;
    document.getElementById("stop_watch").textContent=hours.toString().padStart(2,0) +":"+minutes.toString().padStart(2,0) +":"+seconds.toString().padStart(2,0) +":"+milli.toString().padStart(2,0) ;
    
}