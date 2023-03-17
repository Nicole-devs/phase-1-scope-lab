// Write your solution in this file!

var customerName = 'bob'

function upperCaseCustomerName() {
 return customerName = 'bob'.toUpperCase();
}

function overwriteBestCustomer() {
  bestCustomer = 'not bob';
}
overwriteBestCustomer();
console.log(bestCustomer);


var bestCustomer = 'undefined';
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
overwriteBestCustomer();
console.log(bestCustomer);

const leastFavoriteCustomer = "Mark"
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "John";
}

function test_changeLeastFavoriteCustomer() {
  changeLeastFavoriteCustomer();
  assert.equal(leastFavoriteCustomer, "John");
}