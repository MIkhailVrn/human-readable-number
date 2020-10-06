module.exports = function toReadable(number) {

    if (number === 0)
        return 'zero'

    const functions = {
        1: getOneDigitNumber,
        2: getTwoDigitNumber,
        3: getThreeDigitNumber
    }

    return functions[number.toString().length](number).trim() // remove spaces from end. 

}

// digits in imput number 
function getOneDigitNumber(number, digits) {
    switch (number) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return digits === 2 ? 'thir' : 'three';
        case 4:
            return digits === 2 ? 'for' : 'four';
        case 5:
            return digits === 2 ? 'fif' : 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return digits === 2 ? 'eigh' : 'eight';
        case 9:
            return 'nine';
        default:
            return ''

    }
}

function getTwoDigitNumber(number) {
    let remainder;
    let div;
    switch (true) {
        case (number === 10):
            return 'ten';
        case (number === 11):
            return 'eleven';
        case (number === 12):
            return 'twelve';
        case (number == 14):
            return 'fourteen';
        case (number >= 13 && number <= 19):
            remainder = number % 10;
            return getOneDigitNumber(remainder, 2) + 'teen';
        case (number >= 20 && number <= 29):
            remainder = number % 20;
            return 'twenty' + ' ' + getOneDigitNumber(remainder, 1);
        case (number >= 30 && number <= 99):
            div = Math.floor(number / 10)
            remainder = number % 10;
            return getOneDigitNumber(div, 2) + 'ty ' + getOneDigitNumber(remainder); 
        default:
            return '';
    }
}

function getThreeDigitNumber(number) {
    const div100 = Math.floor(number / 100);
    const mod100 = number % 100;
    let secondPart = mod100 < 10 ? getOneDigitNumber(mod100, 1) : getTwoDigitNumber(mod100, 2)
        
    return getOneDigitNumber(div100, 1) + ' hundred ' + secondPart
}