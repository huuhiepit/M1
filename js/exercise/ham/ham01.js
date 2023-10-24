//Lesson 01
function alertMessage(message) {
    console.log(message);
}
// alertMessage("Hello World!!!");

//Lesson 02
function increase(number) {
    return ++number;
}
// console.log(increase(3));

//Lesson 03
function sumWhenNumberBfLargerNumberAt(number01, number02) {
    if(number01 > number02) {
        return `${number01} > ${number02}`;
    } else {
        return number01 + number02;
    }
}
// console.log(sumWhenNumberBfLargerNumberAt(4,5));

//Lesson 04
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
// console.log(result);
// result = addNumbers();
// console.log(result);

//Lesson 05
let stars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let constellations = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function constellationOfStar(star) {
    for(let i = 0; i < stars.length; i++) {
        if(stars[i] === star) return constellations[i];
    }
}

console.log(constellationOfStar('Polaris'));