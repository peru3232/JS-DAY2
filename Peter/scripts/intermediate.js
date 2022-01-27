// Exercise 1
const Message = (String) => {console.log(String.charAt(0).toUpperCase() + String.substring(1))};

Message('i am a web developer');


// Exercise 2
const Average = (grad1, grad2, grad3) => {
    const sum = grad1+grad2+grad3;
    return [sum, sum/3];
}
const answers = Average(3,4,5);
console.log(`Sum: ${answers[0]}\nAverage: ${answers[1]}`);