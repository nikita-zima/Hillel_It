async function loadPage(select) {
    const selected = Array.from(select.options)
        .filter(option => option.selected)
        .map(option => option.value);

    const result = await fetch(`https://rickandmortyapi.com/api/character?page=${selected}`);
    if (result.ok) {
        return await result.json();
    }

    throw new Error("Error!");
}

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

function printData(data){
    console.log(data);
    const list=document.createElement("ul");
    for(const character of data){
        console.log(character);
        const li=document.createElement("li");
        li.innerText=character.name;
        list.appendChild(li);
    }
    const container =document.querySelector('body .data');
    container.innerHTML=list.innerHTML;
}

class Button {
    #button

    constructor({ text = "Hello, World!", onClick } = {}) {
        this.#button = document.createElement("button");
        this.#button.innerHTML = text;

        this.#button.addEventListener("click", async () => {
            this.disabled = true;
            this.text = "Getting data";

            try {
                await wait(1000);
                const {results}  = await onClick(selectPage);
                printData(results);
            } catch (err) {
                console.error("onClick error", err);
            }
            finally {
                this.disabled = false;
                this.text = text;
            }
        });
    }

    set text(value) {
        this.#button.innerHTML = value;
    }

    set disabled(value) {
        this.#button.disabled = value;
    }

    render() {
        document.body.appendChild(this.#button);
    }
}
const selectPage=createSelect();
document.body.appendChild(selectPage);

const button = new Button({ text: "Get", onClick: loadPage });
button.render();
