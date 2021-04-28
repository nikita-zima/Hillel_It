function createSelect(){
    const pages=34;
    const select=document.createElement("select");

    for(let i=1;i<=pages;i++){
        const option=document.createElement("option");
        option.value=i;
        option.text=i;
        select.appendChild(option);
    }

    return select;
}