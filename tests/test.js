let firstName = 'Antonia';
let lastName = 'Francesca';

//function declaration / definition
function fullname(first, last) {
  return `${first} ${last}`;
}

//function expression
const fullName1 = function (first, last) {
  return `${first} ${last}`;
};

// arrow function expression
const fullName2 = (first, last) => `${first} ${last}`;

// call a function
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);
