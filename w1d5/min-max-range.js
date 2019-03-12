/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  var lowest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (lowest >  arr[i]) {
      lowest = arr[i];

    }
  }
  return lowest;
 
}


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  var greatest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (greatest <  arr[i]) {
      greatest = arr[i];

    }
  }
  return greatest;
}

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  var greatest = arr[0];
  var minimum = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (minimum > arr[i]) {
      minimum = arr[i];
    }
  }
  for (j = 0; j < arr.length; j++) {
    if (greatest < arr[j]) {
      greatest = arr[j];
    }
  }
  return greatest - minimum;
}

// Don't change below:

module.exports = { min: min, max: max, range: range };
