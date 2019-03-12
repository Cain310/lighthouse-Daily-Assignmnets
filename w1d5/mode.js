/* Question 3
 *
 *  Implement the 'mode' function defined below
*
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
// function mode(arr) {

//   let modes = [];
//   let count = [];
//   let i = 0;
//   let number = 0;
//   let maxIndex = 0;

//   for (i = 0; i < arr.length; i++) {
//     number = arr[i];
//     count[number] = (count[number] || 0) + 1;
    
//     if (count[number] > maxIndex) {
//       maxIndex = count[number];
//     }
//   }

//   for (i in count) {
//     if (count.hasOwnProperty(i)) {
//       if (count[i] === maxIndex) {
//         modes.push(Number(i));
//       }
//     }
//   }

//   return modes;

// }

// numbers = [1, 1, 2, 2, 4, 7, 4, 4];

// function mode(numbers) {
//   var repetitions = [];
//   repetitions[numbers[0]] = 1

//   // [_, 2, 2, _, 3]  
//   // [_, 1]
  
//   // repetitions[numbers[i]]
//   for(var i = 1; i < numbers.length; i++) {
//     if (repetitions[numbers[i]]
//   }

//   // [_, 1]
//   // [_, 1, 1]
//   // [_, 1, 1]
//   // [_, 1, 1, _, 1]
//   // [_, 1, 1, _, 1, _, _, 1]
// }




/**
 * The "mode" is the number that is repeated most often.
 *
 * For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
 *

 */
//   // as result can be bimodal or multi-modal,
//   // the returned result is provided as an array
//   // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]

  // function mode(numbers) {

  // let modes = [];
  // let count = [];
  // let i, number, maxIndex = 0;

  // for (i = 0; i < numbers.length; i += 1) {
  //     number = numbers[i];
  //     count[number] = (count[number] || 0) + 1;
  //     if (count[number] > maxIndex) {
  //         maxIndex = count[number];
  //     }
  // }

  // for (i in count)
  //     if (count.hasOwnProperty(i)) {
  //         if (count[i] === maxIndex) {
  //             modes.push(Number(i));
  //         }
  //     }


  function mode(numbers) {
  var repetitions = [];
  repetitions[numbers[0]] = (repetitions[numbers[0]] || 0) + 1
  for (var i = 1; i < numbers.length; i++) {
    if (repetitions[numbers[i]]) {
      repetitions[numbers[i]] += 1
     } 
     else {
      repetitions[numbers[i]] = (repetitions[numbers[i]] || 0) + 1;
      repetitions[numbers[i]] += 1;
  }
}
  let max_value = 0;
  let index;
  for (var i = 0; i < numbers.length; i++) {
    if (repetitions[numbers[i]] > max_value) {
      index = numbers[i];
      max_value = repetitions[numbers[i]];
    }
    // Math.max(repetitions[numbers[i]]) 
  }
  return index;
}

// console.log(mode(arr));

// Don't change below:

module.exports = { mode: mode };
