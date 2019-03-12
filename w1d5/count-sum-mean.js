/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  return arr.length;
}
// function getlength(number) {
//   return number.toString().length;
/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */


function sum(arr) {
  var sum = 0;
  for (var index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}


/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
// function calculate(array) {
//   var sum = 0;
//   var count = array.length;
//   for (var i = 0; i < count; i++) {
//     sum = sum + array[i];
//   }
//   return sum / count;
// }

// var sum = 0;
// var avg = arr.length;
// for (var index = 0; index < arr.length; index++) {
//   sum += arr[index];
// }
// return sum / count;

// function calculate(array) {
//   return array.reduce( (a,b) => a + b) / array.length;
// }
// console.log(calculate([24, 88, 12, 4]));


function mean(arr) {
  var mean = 0;
  if (arr.length >= 1) {
    for (var index = 0; index < arr.length; index++) {
      mean += arr[index];
    }
    return mean / arr.length;
  }
}
function round(number) {

  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };
