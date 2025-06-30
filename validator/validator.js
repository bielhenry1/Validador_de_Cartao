function validateCardNumber(cardNumber) {
    // Remove non-digit characters
    const sanitizedCardNumber = cardNumber.replace(/\D/g, '');

    // Check if the card number is valid using the Luhn algorithm
    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitizedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitizedCardNumber.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

module.exports = {
    validateCardNumber
};