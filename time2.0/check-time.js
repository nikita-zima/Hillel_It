function checkStandardTime(time){
    return (time < 10) ? "0" + time : time;
}

function getTime() {
    const time = new Date();

    let hours = checkStandardTime(time.getHours());
    let minutes = checkStandardTime(time.getMinutes());
    let seconds = checkStandardTime(time.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
}

function getAmPm() {
    const time = new Date();
    let hours = time.getHours();
    if (hours > 12) hours -= 12;

    let minutes = checkStandardTime(time.getMinutes());

    const amPm = (hours > 12) ? "AM" : "PM";

    return `${hours}:${minutes}. ${amPm}`;
}
function getLongTime(){
    const time =new Date();

    let year=time.getFullYear();
    let month=time.getMonth()+1;
    let day=time.getDate();

    let hours = checkStandardTime(time.getHours());
    let minutes = checkStandardTime(time.getMinutes());

    return `${year}-${month}-${day}. ${hours}:${minutes}`;
}