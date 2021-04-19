function createSelect() {
    const select = document.createElement("select");

    for (const format of formats) {
        const option = document.createElement("option");

        option.value = format;
        option.innerText = format;
        select.appendChild(option)
    }

    return select
}

function createDiv() {
    const container = document.createElement("div");
    container.style = "display: flex";

    return container;
}

function createTimeSymbolContainer(symbol) {
    const container = document.createElement("div");
    container.innerHTML = symbol;

    return container;
}