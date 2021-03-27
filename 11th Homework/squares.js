function createSquare(){
    const container=document.createElement("div");
    container.className="square";

    const num=document.createElement("p");
    num.innerText="0";
    container.appendChild(num);

    const buttons=document.createElement("div");
    buttons.className="buttons";

    const buttonPlus=document.createElement("button");
    buttonPlus.innerText="+";
    const buttonMinus=document.createElement("button");
    buttonMinus.innerText="-";

    container.addEventListener("click", (event)=>{
        if(event.target===buttonMinus){
            num.innerText--;
        }
        else {
            num.innerText++;
        }
    })

    buttons.appendChild(buttonPlus);
    buttons.appendChild(buttonMinus);

    container.appendChild(buttons);
    return container;
}
function addSquares(num){
    for(let i=0;i<num;i++){
        document.body.appendChild(createSquare());
    }
}
addSquares(5);