// Exercise 1
const greeter = (myArray, counter) => {
    const greetText = 'Hello';

    for (const item of myArray) {
        console.log(`${greetText} ${item}`);
    }
};

// Exercise 2
const capitalize = (str) => {
    const [firstChar, ...rest] = str;
    
    return `${firstChar.toUpperCase()}${rest.join('')}`;
};

console.log(capitalize('foobar'));
console.log(capitalize('nodeJs'));

// Exercise 3
const capitalizeFirstLetter = (str) => {
    const [firstChar, ...rest] = str;
    return `${firstChar.toUpperCase()}${rest.join('')}`;
};

const capitalizeColors = (colors) => {
    return colors.map(color => capitalizeFirstLetter(color));
};

const colors = ['red', 'green', 'blue', 'yellow'];
const capitalizedColors = capitalizeColors(colors);

console.log(capitalizedColors);

// Exercise 4
const filterGreaterThanTwenty = (numbers) => {
    return numbers.filter(number => number >= 20);
};

const numbers = [15, 22, 8, 30, 18, 25];
const filteredNumbers = filterGreaterThanTwenty(numbers);

console.log(filteredNumbers);

// Exercise 5
const calculateSum = (numbers) => {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const calculateProduct = (numbers) => {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const nums = [2, 3, 4, 5];

const sum = calculateSum(nums);
const product = calculateProduct(nums);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

// Exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Balance: ${this.balance}`);
    }
}

const mySedan = new Sedan('Toyota Camry', 2021, 15000);
mySedan.displayInfo();