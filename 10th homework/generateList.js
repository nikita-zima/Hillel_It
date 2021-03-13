function generateList(array){
    const list=document.createElement("ul");
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            list.appendChild(generateList(array[i]));
        }
        else {
            let li = document.createElement("li");
            li.innerText = array[i];
            list.appendChild(li);
        }
    }
    return list;
}

const list=generateList([1,2,3,4,[5,6,7,8],9,10,[11,12,[13,14]]]);
document.body.appendChild(list);