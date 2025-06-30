# Credit Card Validator

A Node.js CLI application to validate credit card numbers and detect their flag (bandeira), inspired by the 4devs site.

## Features
- Validates credit card numbers using the Luhn algorithm
- Detects card flag (Visa, MasterCard, Amex, etc.)
- Supports multiple card types
- Interactive mode: validate as many cards as you want

## Installation
1. Install dependencies:

```sh
npm install readline-sync
```

## Usage
Run the application:

```sh
node index.js
```

Follow the prompts to enter a card number and see the result. You can validate multiple cards in sequence.

## Example

```
Digite o numero do cartao para validar: 4111111111111111
The card number 4111111111111111 is valid.
Card flag: Visa
Deseja validar outro cartao? (s/n): s
Digite o numero do cartao para validar: 1234567890123456
The card number 1234567890123456 is invalid.
Card flag: Unknown
Deseja validar outro cartao? (s/n): n
Programa encerrado.
```

## Supported Card Flags
- American Express
- Diners Club (Carte Blanche, International)
- MasterCard
- Visa
- Visa Electron
- JCB
- Maestro
- Discover
- enRoute
- Solo
- Switch
- Laser

## License
MIT