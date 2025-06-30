// This file contains unit tests for the functions in validator.js. 
// It uses Jest as the testing framework to ensure that the validation logic works correctly.

const { validateCardNumber } = require('../validator');

describe('Credit Card Validator', () => {
    test('valid credit card number', () => {
        expect(validateCardNumber('4111111111111111')).toBe(true);
    });

    test('invalid credit card number', () => {
        expect(validateCardNumber('1234567890123456')).toBe(false);
    });

    test('valid credit card number with spaces', () => {
        expect(validateCardNumber('4111 1111 1111 1111')).toBe(true);
    });

    test('valid credit card number with dashes', () => {
        expect(validateCardNumber('4111-1111-1111-1111')).toBe(true);
    });

    test('invalid credit card number with incorrect length', () => {
        expect(validateCardNumber('411111111111')).toBe(false);
    });

    test('empty credit card number', () => {
        expect(validateCardNumber('')).toBe(false);
    });

    test('non-numeric characters', () => {
        expect(validateCardNumber('4111a11111111111')).toBe(false);
    });
});