let sum = 0;

while (true) {
	const input = prompt("Enter the number");
    let number = parseFloat(input)

    if (input === null) {
        break;
    }

    if (!isNaN(number)) {
        sum += number;
    } else {
        alert('Ви ввели некоректне число. Будь ласка, введіть число або натисніть "Скасувати".');
    }
    }

alert(sum)
