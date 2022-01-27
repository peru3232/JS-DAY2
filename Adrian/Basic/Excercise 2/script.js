const ageCalculator1 = (function (birthYear, currentYear) {
    return birthYear - currentYear;
})(2022, 1993);

const ageCalculator2 = (function (birthYear, currentYear) {
    return birthYear - currentYear;
})(2022, 1994);


console.log(`You are either ${ageCalculator1} or ${ageCalculator2}`);


