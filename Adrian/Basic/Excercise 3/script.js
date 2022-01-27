const ageCalculator1 = (function (birthYear) {
    const currentYear = new Date().getUTCFullYear();
    return currentYear - birthYear;
})(1993);

const ageCalculator2 = (function (birthYear) {
    const currentYear = new Date().getUTCFullYear();
    return currentYear - birthYear;
})(1994);

console.log(`You are either ${ageCalculator1} or ${ageCalculator2}`);
