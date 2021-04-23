class dataLoader{
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

class printData extends dataLoader{
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

       const data = new printData(pageNum);

       setTimeout(()=>{
           data.load();
       },500);

       if(pageNum===34){
           button.disabled=true;
       }
   })

document.body.appendChild(button);




