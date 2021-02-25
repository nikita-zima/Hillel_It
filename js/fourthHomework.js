const squareCircle=(radius)=>Math.PI*Math.pow(radius,2);
//console.log(squareCircle(2));
const circumference=(radius)=>2*(Math.PI*radius);
//console.log(circumference(2));
function average(number1,number2){
    if(Number.isNaN(number1)||Number.isNaN(number2)){
        return false;
    }
    return (number1+number2)/2;
}
//console.log(average(10,6));
function calc(x,y,action){
    x=String(x);
    y=String(y);
    if(action==="^"){
        action="**";
    }
    return eval(x+action+y);
}
//console.log(calc(-2,2,"*"));