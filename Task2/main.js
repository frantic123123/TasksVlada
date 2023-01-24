//   ------- Numbers,  Square numbers
const numbers = [];
const squareNumbers = [];
for (let i = 10; i <= 20; i++) {
    numbers.push(i);
    squareNumbers.push(i ** 2);
}

console.log(numbers.toString(','));
console.log(squareNumbers.toString(','));

////////----------  Multiply on 7


let i = 1;
while(i <= 10) {
    console.log(`${i} * 7 = ${i * 7}`);
    i++;
}

///////------- Sum

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

//////------------Multiply Numbers

let multiply = 1n;
for (let i = 15n; i < 36n; i++) {
    multiply *= i;
}
console.log(multiply);


///////----- Middle Number

const getMiddleNumber = (startNum, endNum) => {
    let sumOfNumbers = 0;
    for (let i = startNum; i <= endNum; i++) {
        sumOfNumbers += i;
    }
    const middleNumber = sumOfNumbers / endNum;
    return middleNumber;
}

console.log(getMiddleNumber(1, 500));

//// ------ double numbers
const sumOfDoubleNums = (startNum, endNum) => {
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        if (!(i % 2)) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfDoubleNums(30, 80));


/////---------- divided by 3

const dividedOnThreeNums = [];
for (let i = 100; i <= 300; i++) {
    if (!(i % 3)) {
        dividedOnThreeNums.push(i);
    }
}

console.log(dividedOnThreeNums.toString(','));

/////----------- Task whith natural numb
const resultDividers = document.getElementById('result');

const searchDividers = (numb) => {
    const allDividers = [];
    const doubleDividers = [];

    for (let i = 2; i <= numb; i++) {
        if (!(numb % i) && !(i % 2)) {
            allDividers.push(i);
            doubleDividers.push(i);
        } else if (!(numb % i) && (i % 2)) {
            allDividers.push(i)
        }
    }
    return `For number ${numb}, there are "${allDividers.toString(',')}" diveders.
Number of double dividers is ${doubleDividers.length}.
The sum of double dividers is ${doubleDividers.reduce((acc, el) => acc += el, 0)}.`
}

console.log(searchDividers(12))
resultDividers.innerHTML = searchDividers(24);


//////////------------ multiplication table
const multiplyTable = document.getElementById('multiplication-table');
let table = '';

for (let i = 1; i <= 10; i++) {
    (function (numb) {
        for (let multiplier = 1; multiplier <= 10; multiplier++) {
            if (multiplier === 10) {
                table += `${numb} * ${multiplier} = ${numb * multiplier}; <hr/>`;
                break;
            }
            table += `${numb} * ${multiplier} = ${numb * multiplier}; <br/>`;
        }
    }(i));
}
multiplyTable.innerHTML = table;


