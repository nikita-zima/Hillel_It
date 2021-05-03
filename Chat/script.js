const replies=["Здравствуйте! Чем я могу вам помочь?","Расскажите, пожалуйста, подробней","Передаю вашу просьбу менеджеру..."];


function createButton(){
    const btn =document.createElement("button");
    btn.innerText="Send message";

    return btn;
}

const button=createButton();

const chat=new Chat(button,replies);
chat.render();


function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

button.addEventListener("click",async () => {
    try {
        chat.printMessage();
        await wait(2000);
        chat.botReply();
    } catch (err) {
        console.error("onClick error", err);
    }
});