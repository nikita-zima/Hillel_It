function createDiv(){
    const div=document.createElement("div");
    div.className="time"

    return div;
}

function  createSelect(){
    const select=document.createElement("select");

    const standardTime=document.createElement("option");
    standardTime.value="std";
    standardTime.text="HH:MM:SS";
    standardTime.selected=true;

    const am=document.createElement("option");

    am.value="am";
    am.text="HH:MM am/pm";

    const fullTime=document.createElement("option");
    fullTime.value="full";
    fullTime.text="YYYY-MM-DD HH:MM";

    select.appendChild(standardTime);
    select.appendChild(am);
    select.appendChild(fullTime);

    return select;
}

const div=createDiv();
const select=createSelect();

div.appendChild(select);
document.body.appendChild(div);

function parseTime(){
    if(select.value==="std") {
        getStandardTime();
    }
    else if(select.value==="am"){
        getAmPm()
    }
    else if(select.value==="full"){
        getFullDate();
    }
}

function checkStandardTime(time){
    return (time < 10) ? "0" + time : time;
}

function getStandardTime(){
    const now=new Date();

    const hh=checkStandardTime(now.getHours());
    const mm=checkStandardTime(now.getMinutes());
    const ss=checkStandardTime(now.getSeconds());

    const time=setTimeout(function (){
        getStandardTime();
        parseTime();
    },1000);

    document.querySelector('body .time').innerHTML=`${hh}:${mm}:${ss}`;
}
getStandardTime();

function getAmPm(){
    const now=new Date();

    let hh=checkStandardTime(now.getHours());
    const mm=checkStandardTime(now.getMinutes());
    let format="am";
    if(hh>12){
        hh-=12;
        format="pm";
    }
    document.querySelector('body .time').innerHTML=`${hh}:${mm} ${format}`;
}

function getFullDate(){
    const now=new Date();

    const today=now.getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
    const hh=checkStandardTime(now.getHours());
    const mm=checkStandardTime(now.getMinutes());
    document.querySelector('body .time').innerHTML = `${today} ${hh}:${mm}`;
}


