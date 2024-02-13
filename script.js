// Lista para almacenar los números y sus dígitos verificadores
let numbersList = [];

function generateDigit() {
    let numberInput = document.getElementById('number').value.trim();

    // Verificar si el número ya está en la lista
    let existingEntry = numbersList.find(entry => entry.number === numberInput);
    if (existingEntry) {
        document.getElementById('result').innerHTML = `El número ${numberInput} ya tiene un dígito verificador: ${existingEntry.digit}`;
        return;
    }

    // Calcular dígito verificador
    let digit = calculateDigit(numberInput);
    numbersList.push({ number: numberInput, digit: digit });

    document.getElementById('result').innerHTML = `El dígito verificador para ${numberInput} es: ${digit}`;
}

function calculateDigit(number) {
    let reversedNumber = number.split('').reverse().join('');
    let sum = 0;

    for (let i = 0; i < reversedNumber.length; i++) {
        let digit = parseInt(reversedNumber[i]);
        let multiplier = [2, 3, 4, 5, 6, 7][i % 6];
        sum += digit * multiplier;
    }

    let remainder = sum % 11;
    let digit = (11 - remainder) % 11;
    return digit === 10 ? 'K' : digit.toString();
}
