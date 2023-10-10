function sol1(text) {
    let length = text.length;
    let BigLetters = text.replace(/[^A-Z]/g, "").length;
    let SmallLetters = text.replace(/[^a-z]/g, "").length;
    return { length, BigLetters, SmallLetters };
}

let userInput = prompt("Enter the text");
let result = sol1(userInput);
alert(JSON.stringify(result));