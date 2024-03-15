/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let number1 = Number(document.querySelector('#add1').value);
  let number2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number3, number4) {
  return number3 - number4;
};

const subtractNumbers = function () {
  let number3 = Number(document.querySelector('#subtract1').value);
  let number4 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(number3, number4);
};

document
  .querySelector('#subtractNumbers')
  .addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multipply = (number5, number6) => {
  return number5 * number6;
};

const multiplyNumbers = () => {
  let number5 = Number(document.querySelector('#factor1').value);
  let number6 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multipply(number5, number6);
};
document
  .querySelector('#multiplyNumbers')
  .addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number7, number8) => {
  return number7 / number8;
};

const divideNumbers = () => {
  let number7 = Number(document.querySelector('#dividend').value);
  let number8 = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(number7, number8);
};
document
  .querySelector('#divideNumbers')
  .addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function () {
  const subtotalValue = parseFloat(document.querySelector('#subtotal').value);
  const isMembershipChecked = document.querySelector('#member').checked;

  let total;
  if (isMembershipChecked) {
    total = subtotalValue * 0.8;
  } else {
    total = subtotalValue;
  }

  document.querySelector('#total').textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
let oddsArray = numbersArray.filter((number) => number % 2 > 0);
document.querySelector('#odds').textContent = oddsArray;

/* Output Evens Only Array */
let evensArray = numbersArray.filter((number) => number % 2 == 0);
document.querySelector('#evens').textContent = evensArray;

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce(
  (sum, number) => sum + number
);

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map((x) => x * 2);
document.querySelector('#multiplied').textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = multipliedArray.reduce(
  (sum, number) => sum + number
);
