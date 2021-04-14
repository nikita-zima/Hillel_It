class TextElement {
    #edit;
    #clear;
    #text; // element
    #storageKey;

    constructor(index, props) {
        this.#text = document.createElement("p");

        this.#edit = new Button({
            className: "edit",
            text: "Edit",
        });
        this.#edit.parse().addEventListener("click", () => {
            const name = prompt("Enter new name");
            if (name !== "" || name !== undefined) {
                this.#text.innerText = name;
                this.saveData(this.#text.innerText);
            }
        })
        this.#clear=new Button({
            className: "clear",
            text: "clear",

        })
        this.#clear.parse().addEventListener("click",()=>{
            const result=confirm("Are you sure");
            if(result===true){
                this.#text.innerText="";
                this.saveData(this.#text.innerText);
            }
        })

        this.#storageKey = `text-element-data-${index}`;

        let value = this.loadData();
        if (value === null) {
            value = props?.defaultValue ?? "";
        }

        this.#text.innerText = value;
    }

    saveData(value) {
        localStorage.setItem(this.#storageKey, value);
    }

    loadData() {
        return localStorage.getItem(this.#storageKey);
    }

    render() {
        const container = document.createElement("div");
        container.className = "wrapper";

        container.appendChild(this.#text);
        container.appendChild(this.#edit.parse());
        container.appendChild(this.#clear.parse());

        return container;
    }
}