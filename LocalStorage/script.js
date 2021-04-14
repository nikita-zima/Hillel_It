for (let i = 0; i < 3; i++) {
    const textElement = new TextElement(i,{ defaultValue: "Hello, World"});
    document.body.appendChild(textElement.render());
}