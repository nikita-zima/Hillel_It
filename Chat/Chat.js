class Chat{
    #button
    #input
    #replies
    #message
    #counter=0;
    constructor(button,replies) {
        this.#button=button;
        this.#replies=replies;
    }
    printMessage(){
        this.#message=document.createElement("div");
        this.#message.className="user";

        this.#message.innerText=this.#input.value;
        this.#input.value="";

        document.body.appendChild(this.#message);
    }
    botReply(){
        const reply=document.createElement("div");
        reply.className="bot";

        reply.innerText=this.#replies[this.#counter];

        if(this.#counter<this.#replies.length-1) {
            this.#counter++;
            console.log(this.#counter);
        }

        if(this.#message.innerText==="Пока"||this.#message.innerText==="До свидания"||this.#message.innerText==="Ой,всё"||
            this.#message.innerText==="пока"||this.#message.innerText==="до свидания"||this.#message.innerText==="ой,всё"){
            reply.innerText="Спасибо, до свидания!";
            this.#counter++;
            document.body.appendChild(reply);
        }
        if(this.#counter===this.#replies.length) {
            return;
        }
        document.body.appendChild(reply);
    }

    render(){
        this.#input=document.createElement("input");

        document.body.appendChild(this.#input);
        document.body.appendChild(this.#button);
    }
}


