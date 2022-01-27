// Exercise 1
function crystalGazer(childNr, partnerName, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${childNr} childrens.`);
}

let print = crystalGazer(2, 'Jenny', 'Ostermiething', 'Freelancer');
//------------------------------------------------------------------------------------------------------------------


// Exercise 2
function ageCalculator(birthYear, currentYear) {
    const age = currentYear - birthYear;
    console.log(`You are either ${age -1} or ${age}`);
}

print = ageCalculator(1993, 2022);
//------------------------------------------------------------------------------------------------------------------


// Exercise 3
function ageCalculatorEasy(birthYear) {
    const actualDate = new Date();
    const age = actualDate.getFullYear() - birthYear;
    console.log(`You are either ${age -1} or ${age}`);
}

print + ageCalculatorEasy(1993);
//------------------------------------------------------------------------------------------------------------------


// Exercise 4
function degreesToRadiant(degrees) {
    return Math.floor((degrees * (Math.PI/180) * 100000))/ 100000;
}

console.log(degreesToRadiant(90));
//------------------------------------------------------------------------------------------------------------------


//Exercise 5
function calc(width, height, depth) {
    const area = width * height;
    return [area, area * depth];
}

const calcValue = calc(2,7,5);
console.log(`The area of the box is: ${calcValue[0]}\nThe volume of the box is: ${calcValue[1]}`);
//------------------------------------------------------------------------------------------------------------------
