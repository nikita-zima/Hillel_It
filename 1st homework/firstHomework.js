//1 задача
const num1=+prompt("Enter first number");
if(Number.isNaN(num1)){
    console.log("Error");
}
else{
    const num2=+prompt("Enter second number");
    if(Number.isNaN(num2)) {
        console.log("Error");
    }
    else{
        if(num1>num2){
            console.log(num1," is greater than ",num2)
        }
        else if(num2>num1)
        {
            console.log(num2," is greater than ",num1)
        }
        else if(num1===num2){
            console.log(num1," equals ",num2);
        }
    }
}

//2 задча
const num=+prompt("Please, enter number");
if(Number.isNaN(num)){
    console.log("Error");
}
else{
    const result=(num%10)%2===0?true:false;
    console.log("The last numeral is:",num%10,"Is even? ",result);
}

//3 задача
const name=prompt("Как вас зовут?");
const age=+prompt("Сколько вам лет?");
if(Number.isNaN(age)){
    console.log("Error");
}
else{
    const isTrue=confirm("Алкоголь употребляем?");
    if(isTrue===true){
        if(age>40){
            console.log(name,", не злоупотребляйте");
        }
        else if(age<18){
            console.log(name,", ты что?! Маме расскажу!")
        }
        else if(age>=18&&age<=40){
            console.log(name,", только водку с пивом не мешай...");
        }
    }
    else{
        console.log(name, ", так держать");
    }
}