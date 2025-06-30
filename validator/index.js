// const { validateCardNumber } = require('./validator.js');
const readline = require('readline-sync');

// Luhn algorithm
function luhnCheck(cardNumber) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

const cardTypes = [
  {
    name: 'American Express',
    iin: [/^34/, /^37/],
    lengths: [15],
  },
  {
    name: 'Diners Club - Carte Blanche',
    iin: [/^300/, /^301/, /^302/, /^303/, /^304/, /^305/],
    lengths: [14],
  },
  {
    name: 'Diners Club - International',
    iin: [/^36/],
    lengths: [14],
  },
  {
    name: 'MasterCard',
    iin: [/^5[1-5]/, /^222[1-9]/, /^22[3-9][0-9]/, /^2[3-6][0-9]{2}/, /^27[01][0-9]/, /^2720/],
    lengths: [16],
  },
  {
    name: 'Visa',
    iin: [/^4/],
    lengths: [13, 16, 19],
  },
  {
    name: 'Visa Electron',
    iin: [/^4026/, /^417500/, /^4508/, /^4844/, /^4913/, /^4917/],
    lengths: [16],
  },
  {
    name: 'JCB',
    iin: [/^35/],
    lengths: [16, 17, 18, 19],
  },
  {
    name: 'Maestro',
    iin: [/^5018/, /^5020/, /^5038/, /^56/, /^57/, /^58/, /^6304/, /^6759/, /^6761/, /^6762/, /^6763/],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
  },
  {
    name: 'Discover',
    iin: [/^6011/, /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])/, /^64[4-9]/, /^65/],
    lengths: [16, 19],
  },
  {
    name: 'enRoute',
    iin: [/^2014/, /^2149/],
    lengths: [15],
  },
  {
    name: 'Solo',
    iin: [/^6334/, /^6767/],
    lengths: [16, 18, 19],
  },
  {
    name: 'Switch',
    iin: [/^4903/, /^4905/, /^4911/, /^4936/, /^6333/, /^6759/],
    lengths: [16, 18, 19],
  },
  {
    name: 'Laser',
    iin: [/^6304/, /^6706/, /^6771/, /^6709/],
    lengths: [16, 17, 18, 19],
  },
];

function getCardType(cardNumber) {
  const sanitized = cardNumber.replace(/\D/g, '');
  for (const type of cardTypes) {
    if (
      type.iin.some((re) => re.test(sanitized)) &&
      type.lengths.includes(sanitized.length)
    ) {
      return type.name;
    }
  }
  return 'Unknown';
}

function validateCardNumber(cardNumber) {
  const sanitized = cardNumber.replace(/\D/g, '');
  const type = getCardType(sanitized);
  if (type === 'Unknown') return false;
  return luhnCheck(sanitized);
}

let continueValidation = true;

while (continueValidation) {
  const cardNumber = readline.question('Digite o numero do cartao para validar: ');
  const isValid = validateCardNumber(cardNumber);
  const cardType = getCardType(cardNumber);

  console.log(`The card number ${cardNumber} is ${isValid ? 'valid' : 'invalid'}.`);
  console.log(`Card flag: ${cardType}`);

  const answer = readline.question('Deseja validar outro cartao? (s/n): ');
  continueValidation = answer.trim().toLowerCase() === 's';
}

console.log('Programa encerrado.');
