var input = process.argv.slice()[2]; 
// for (i = 0; i < input.length; i++)
if (input) 
  console.log(reverse(input));

function reverse(original) {
    
  return(original.split('').reverse().join(''));
}

// var input = process.argv[3]; 

//     if (input) 
//       console.log(reverse(input));
    
//     function reverse(original) {
//         // for (i = 0; i < original.length; i++)
//       return(original.split('').reverse().join(''));
//     }