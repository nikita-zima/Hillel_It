function printNums(){
    for(let i=10;i<=20;i++){
        console.log(i);
    }
}
function squares(){
    console.log("Squares from 10 to 20:");
    for(let i=10;i<=20;i++){
        console.log(Math.pow(i,2));
    }
}
function tableBySeven(){
    console.log("Multiplication table by 7:");
    for(let i=1;i<=10;i++){
        console.log("7*"+i+"="+7*i);
    }
}
function multi() {
    console.log("Multiplication from 15 to 35:");
    let result=1;
    for(let i=15;i<=35;i++){
        result*=i;
    }
    console.log(result);
}
function average(){
    console.log("Average from 1 to 100:");
    let sum=0;
    for(let i=1;i<=100;i++){
        sum+=i;
    }
    console.log(sum/100);
}
function sumEven() {
    let sum=0;
    for(let i=30;i<80;i++){
        if(i%2===0){
            sum+=i;
        }
    }
    console.log(sum);
}
function multipliesOfThree(){
    for(let i=100;i<=200;i++){
        if(i%3===0){
            console.log(i);
        }
    }
}
function dividers(number) {
    console.log("Dividers of "+number+":");
    let sum=0;
    for (let i=1; i<=number; i++) {
        if (number % i === 0) {
            console.log(i);
            if(i%2===0){
                sum+=i;
            }
        }
    }
    console.log("Sum of even dividers "+sum);
}
function multiplicationTable(number) {
    console.log("Multiplication table from 1 to "+number);
    for(let i=1;i<=number;i++){
        for(let j=1;j<=number;j++){
            console.log(i+"*"+j+"="+i*j);
        }
    }
}
//multiplicationTable(10);
function guessNumber() {
    const consent=confirm("Do you want to play a game?");
    if(consent===true) {
        let counter = 0;
        let number = Math.floor(Math.random() * Math.floor(10));
        console.log(number);
        while (true) {
            const op = prompt("Please,enter some number from 0 to 10");
            if(op===null){
                break
            }
            else {
                const option = +op;
                if (Number.isNaN(option)) {
                    alert("Not a number,please try again");
                }
                counter += 1;
                if (option === number && counter === 1) {
                    alert("You are a really lucky man");
                    break;
                } else if (option === number) {
                    alert("Success");
                    break;
                } else if (option === number && counter >= 10) {
                    alert("Success,but maybe you will be lucky in love");
                    break;
                } else if (option < number) {
                    alert("Try higher number");
                } else if (option > number) {
                    alert("Try lower number");
                }
            }
        }
    }
    else {
        alert("It`s a pity!")
    }
}
