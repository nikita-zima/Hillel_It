class DataLoader{
    #url;

    constructor(pageNum) {
        this.#url = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;
    }

    load() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";

        xhr.open("GET", this.#url);

        xhr.onload = () => {
            if (xhr.status !== 200) {
                button.disabled=true;
                button.innerText="All data loaded";
                console.error(new Error(`Loading failed! Status: ${xhr.status}`));
                return;
            }

            this.onLoad(xhr.response);
        }

        xhr.onerror = function() {
            console.error(new Error(`Loading failed!`));
        }
        xhr.send();
    }

    onLoad(data) {}
}

class PrintData extends DataLoader{
    constructor(url) {
        super(url);
    }

    onLoad(data) {
        const container=document.createElement("ul");

        for(const key of data.results){
            const li=document.createElement("li");
            li.innerText=key.name;
            container.appendChild(li);
        }

        button.disabled=false;
        button.innerText="Get data";

        document.body.appendChild(container);
    }
}

let pageNum=0;
function increasePageNum(){
    pageNum++;
}

const button = new Button("Get data").parse();

    button.addEventListener("click", () => {
       button.disabled=true;
       button.innerText="Getting data";

       increasePageNum();

       const data = new PrintData(pageNum);

       setTimeout(()=>{
           data.load();
       },500);
   })

document.body.appendChild(button);




