/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// * ===========================================================================
//  * MEDIAN - the middle number of a list (when sorted)
//  *        - if the list length is even, then the median is the average of the two middle values
//  *        - use the provided 'round' function before returning your value
//  *
//  * For example:
//  *
//  *    median([6,2,3,4,9,6,1,0,5]);
//  *
//  * Returns:
//  *
//  *    4
//  function middle(i) {
//   if (array[i] !== undefined) {
//     return middle(i+1);
//  } else {
//     return array[Math.floor(i / 2)];
// }
// }

// console.log(middle(0));










// function median(values) {

//   values.sort( function(a,b) {
//   return a - b;
// });

//   var half = Math.floor(values.length/2);

//   if(values.length % 2)
//       return values[half];
//   else
//       return (values[half-1] + values[half]) / 2.0;
// }

// var list1 = [3, 8, 9, 1, 5, 7, 9, 21];
// median(list1);



function median(arr) {
  
  arr.sort(function(a, b) {
    return a - b;
  });
  
  let half = Math.floor(arr.length / 2);
  
  if (arr.length % 2) {
    return arr[half];

  } else {
    return (arr[half - 1] + arr[half]) / 2.0;
  }
}

// function round(number) {
//   return Math.round(number * 100) / 100;
// }

// Don't change below:

module.exports = { median: median };

