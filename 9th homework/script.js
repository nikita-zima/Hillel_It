function createButton(text) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "btn";
    button.innerText = text;

    return button;
}
function createName(name){
    let container=document.createElement("div");
    container.className="names";
    const nameTb=document.createElement("p");
    nameTb.innerText=name;
    const rename=createButton("rename");
    rename.addEventListener("click",function (){
        const newName=prompt("Please, enter a new name");
        if(newName!==null&&newName!==undefined){
            nameTb.innerText=newName;
        }
    })
    const remove=createButton("remove");
    remove.addEventListener("click",function (){
        const answer=confirm("Are you sure?");
        if(answer===true){
            container.remove();
        }

    })
    container.appendChild(nameTb);
    container.appendChild(rename);
    container.appendChild(remove);
    return container;
}
function createApp(){
    const app=document.createElement("div");
    app.className="application";
    const input=document.createElement("input");
    input.className="input";
    app.appendChild(input);
    const submit=createButton("submit");
    app.appendChild(submit);
    const names=["Tom","John","Helen","Anna"];
    for(let i=0;i<names.length;i++){
        app.appendChild(createName(names[i]));
    }
    submit.addEventListener("click",function (){
        if(input.value!=="") {
            app.appendChild(createName(input.value));
            input.value = "";
        }
    })
    return app;
}
const app=createApp();
document.body.appendChild(app);
