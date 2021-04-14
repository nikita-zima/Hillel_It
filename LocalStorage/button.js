class Button{
    #button;
    constructor(props){
        this.#button=document.createElement("button");

        this.#button.className=props?.className??"";

        const text = props?.text ?? "";
        this.setText(text);

    }
    setText(text){
        this.#button.innerText=text;
    }
    parse(){
        return this.#button;
    }
}