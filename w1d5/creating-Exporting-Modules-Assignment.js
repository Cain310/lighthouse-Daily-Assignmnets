
var list = [];
function sortArray() {
  list.sort(function(a, b){return a - b});
  return list
}



module.exports = {

addNumber: function(num) {
  list.push(num)
   
},
getAscendingSorted: function() {
return sortArray();
}
}




    // console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);

//   getCircumference: function(diameter) {
//     var circumference = diameter * getPI();
//     return circumference;
//   }
//   )};