import * as stringHelpers from '../helpers/stringHelpers'

export const MY_TRANSFORMATIONS = [
    {
        id: 't1',
        description: 'Texto invertido:',
        transformFunction: text => text.split('').reverse().join(''),
    },
    {
        id: 't2',
        description: 'CSV:',
        transformFunction: text => text.split(' ').map(word => `"${word}"`).join(';'),
    },
    {
        id: 't3',
        description: 'Texto numérico:',
        transformFunction: text =>
            stringHelpers
                .removeSpecialCharacteres(text)
                .toUpperCase()
                .split('')
                .map(char => {
                    if (char === 'O') return '0';
                    if (char === 'A') return '4';
                    if (char === 'E') return '3';
                    if (char === 'I') return '1';
                    if (char === 'S') return '5';
                    if (char === 'T') return '7';

                    return char;
                })
                .join(''),
    },
    {
        id: 't4',
        description: 'Slug:',
        transformFunction: text =>
            stringHelpers.removeSpecialCharacteres(text).toLowerCase().split(' ').join('_'),
    },
    {
        id: 't5',
        description: 'Somente vogais:',
        transformFunction: text =>
            text.split('').filter(char => char === ' ' || stringHelpers.isVowel(char)).join(''),
    },
    {
        id: 't6',
        description: 'Somente consoantes:',
        transformFunction: text =>
            text.split('').filter(char => char === ' ' || stringHelpers.isConsonant(char)).join(''),
    },
    {
        id: 't7',
        description: 'Variável (CamelCase):',
        transformFunction: text =>
            stringHelpers.removeSpecialCharacteres(text).toLowerCase().split(' ').map((word, index) => {
                return index === 0 ? word : word.split('').map((char, index) => {
                    return index === 0 ? char.toUpperCase() : char;
                }).join('');
            }).join(''),
    },
    {
        id: 't8',
        description: 'Alternância entre maiúsculas e minúsculas:',
        transformFunction: text =>
            text
                .split('')
                .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
                .join(''),
    },
]

export const defaultState = {
    userInput: ''
};