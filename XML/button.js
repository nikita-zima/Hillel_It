class Button{
    #button;
    constructor(text) {
        this.#button = document.createElement("button");
        this.#button.innerText=text;
    }
    parse() {
        return this.#button;
    }
}