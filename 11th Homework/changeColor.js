function createSquare() {
    const square = document.createElement("div");
    square.className="colorfulSquare";
    return square;
}

const squares = [];
for (let i = 0; i < 5; i++) {
    squares.push(createSquare());
}

squares.forEach(square => {
    square.addEventListener("click", onSquareClick);
    document.body.appendChild(square);
});

const colors = ["blue", "green", "yellow"];

function onSquareClick(event) {
    const color = event.target.style.backgroundColor;
    const index = colors.findIndex(c => c === color) + 1;

    const next = colors[index] ?? colors[0];
    event.target.style.backgroundColor = next;
}
