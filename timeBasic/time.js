function parseTime(time){
    return (time < 10) ? "0" + time : time;
}

function getTime(){
    const now=new Date();

    const hours=parseTime(now.getHours());
    const minutes=parseTime(now.getMinutes());
    const seconds=parseTime(now.getSeconds());

    const time=setTimeout(function (){
        getTime();
    },1000);

    displayTime(hours,minutes,seconds);
}
getTime();

function displayTime(hours,minutes,seconds){
    const container=document.createElement("div");

    const hPrint=document.createElement("div");
    hPrint.innerHTML=hours+":";
    hPrint.style.color="red";
    container.appendChild(hPrint);

    const mPrint=document.createElement("div");
    mPrint.style.color="green";
    mPrint.innerHTML=minutes+":";
    container.appendChild(mPrint);

    const sPrint=document.createElement("div");
    sPrint.style.color="blue";
    sPrint.innerHTML=seconds;
    container.appendChild(sPrint);

    console.log(`${hours}:${minutes}:${seconds}`);
    document.querySelector('body .time').innerHTML=container.innerHTML;
}
