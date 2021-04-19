const timeFormat = Object.freeze({
    short: "HH:MM AM/PM",
    ordinary: "HH:MM:SS",
    long: "YY-MM-DD HH:MM"
});

function getTimeFormatted(format) {
    switch (format) {
        case timeFormat.ordinary:
            return getTime();
        case timeFormat.short:
            return getAmPm();
        case  timeFormat.long:
            return getLongTime();
        default:
            throw new Error("Invalid format");
    }
}

const formats = [timeFormat.ordinary, timeFormat.short, timeFormat.long];

const select = createSelect();
const timeWrapper = createDiv();

document.body.appendChild(select);
document.body.appendChild(timeWrapper);

const containers = [];
let intervalId = null;

select.addEventListener("change", event => {
    showTime(event.target.value);
});

function showTime(format) {
    clearInterval(intervalId);

    createClock(format);
    intervalId = setInterval(() => updateClock(format), 1000);
}

showTime(formats[0]);

function createClock(format) {
    const timeFormatted = getTimeFormatted(format);

    timeWrapper.innerHTML = "";
    containers.length = 0;

    const colors=["green","red","blue","orange","yellow","purple","grey"];
    let counter=0;

    for (const symbol of timeFormatted) {
        counter++;
        if(counter>colors.length){
            counter=0;
        }
        const container = createTimeSymbolContainer(symbol);
        if(container.innerHTML===':'||container.innerHTML==='-'){
            container.style.color="black"
        }else {
            container.style.color = colors[counter];
        }
        containers.push(container);
    }

    containers.forEach(div => timeWrapper.appendChild(div));
}

function updateClock(format) {
    const timeFormatted = getTimeFormatted(format);

    for (let i = 0; i < timeFormatted.length; i++) {
        const container = containers[i];
        const symbol = timeFormatted[i];

        if (container.innerHTML !== symbol) {
            container.innerHTML = symbol;
        }
    }
}

