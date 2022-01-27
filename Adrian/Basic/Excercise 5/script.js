var area = (function(width, height) {
    return width * height;
})(2, 7);

var vol = (function(width, height, depth) {
    return width * height * depth;
})(2, 7, 5);

console.log(`The area of the box is: ${area}.\nThe volume of the box is ${vol}. `);

