function createForm() {
    const form = document.createElement("form");
    form.className="form";
    const inputs = document.createElement("div");
    inputs.className = "inputs";

    const email = document.createElement("input");
    email.placeholder="email";
    email.className="email";
    const password = document.createElement("input");
    password.placeholder="password";
    password.className="password";
    inputs.appendChild(email);
    inputs.appendChild(password);

    const submitBtn = document.createElement("button");
    submitBtn.innerText="Submit";
    submitBtn.className="submit";
    form.appendChild(inputs);
    form.appendChild(submitBtn);

    return form;
}
document.body.appendChild(createForm());

const btn=document.querySelector('.form .submit');
const email=document.querySelector('.form .email');
const password=document.querySelector('.form .password');
const users=[];

btn.addEventListener("click",(event)=>{
    event.preventDefault();

    checkEmail();

    checkPassword();

    createJSON();
})

function validateEmail(email){
    const regularExp=/\S+@\S+\.\S+/;
    return regularExp.test(String(email).toLowerCase());
}
function validatePassword(password){
    const regularExp=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/;
    return regularExp.test(password);
}

function clearInputs(){

    email.style.background="white";
    password.style.background="white";

    email.value="";
    password.value="";
}

function checkEmail(){
    if(validateEmail(email.value)===false){
        email.style.background="red";
    }
    else {
        email.style.background="white";
    }
}

function checkPassword(){
    if(validateEmail(password.value)===false){
        password.style.background="red";
    }
    else {
        password.style.background="white";
    }
}

function createJSON(){
    if(validateEmail(email.value)===true&&validatePassword(password.value)===true){
        const data={};

        data.userEmail=email.value;
        data.userPassword=password.value;

        const json = JSON.stringify(data);
        users.push(json);
        console.log(json);

        clearInputs();
    }
}