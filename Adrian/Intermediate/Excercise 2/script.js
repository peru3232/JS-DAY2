const grades = (function grdCalculator(Math, Physics, English) {
    return Math + Physics + English;
})(3, 4, 5);

console.log(`Sum: ${grades}`);
console.log(`Average: ${grades/3}`);