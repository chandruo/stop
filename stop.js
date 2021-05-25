window.onload = function(){
    let min = 00;
    let sec = 00;
    let msec = 00;
    let rmin= document.getElementById("min")
    let rsec= document.getElementById("sec")
    let rmsec= document.getElementById("msec")
    let buttonstart=  document.getElementById("start")
    let buttonstop=  document.getElementById("stop")
    let buttonreset= document.getElementById("reset")
    let Interval;
    buttonstart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval (settim,10);
    }


buttonstop.onclick = function(){
    clearInterval(Interval);
}

buttonreset.onclick = function(){
    clearInterval(Interval);
    min="00";    
    sec="00";
    msec="00";
    rmin.innerHTML = min;
    rsec.innerHTML = sec;
    rmsec.innerHTML = msec;
    
}
function settim(){
    msec++;
    if(msec<=9){
        rmsec.innerHTML = "0"+ msec;
    }
    if(msec>9){
        rmsec.innerHTML= msec;
    }
    if(msec>99){
        console.log(sec);
        sec++;
        rsec.innerHTML="0"+ sec;
        msec=0;
        rmsec.innerHTML= "0"+ 0;
    }
    if(sec>9){
        rsec.innerHTML=sec;
    }
    if(sec > 60){
        console.log(min);
        min++;
        rmin.innerHTML="0"+min;
        sec=0;
        rsec.innerHTML= "0"+ 0;
    }
    if(min >9 ){
        rmin.innerHTML=min;
    }
}

}