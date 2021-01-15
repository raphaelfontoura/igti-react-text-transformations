const WITH_SPECIAL_CHARACTERS = 
    'áãâäàÁÃÂÄÀéẽëèÉÊËÈíîïìÍĨÏÌóõôöòÓÕÔÖÒúũüùÚŨÜÙñÑçÇ'.split('');

const WITHOUT_SPECIA_CHARACTERS =
    'aaaaaAAAAAeeeeEEEEiiiiIIIIoooooOOOOOuuuuUUUUnNcC'.split('');

const VOWELS = 'aáãâäàeéẽëèiíîïìoóõôöòuúũüù'.split('');

export function isVowel(char) {
    return VOWELS.includes(char.toLowerCase());
}

export function isNumber(char) {
    return !isNaN(char);
}

export function isConsonant(char) {
    return !isVowel(char) && !isNumber(char);
}

export function removeSpecialCharacteres(text) {
    return text.split('').map(char => {
        const index = WITH_SPECIAL_CHARACTERS.indexOf(char);
        return index < 0 ? char : WITHOUT_SPECIA_CHARACTERS[index];
    })
    .join('');
}