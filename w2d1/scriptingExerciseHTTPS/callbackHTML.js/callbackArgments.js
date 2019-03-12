// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    arr.forEach(function(element, i) {
     if (element === "Waldo") {
        found(i);
        }
      });
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr[i] === "Waldo") {
    //     found(arr.indexOf("Waldo")) // execute callback
        // console.log(arr.indexOf("Waldo"))
}
    
  
  
  function actionWhenFound(waldo) {
    // console.log(arr.indexOf("Waldo"))
    console.log("Found Waldo at Index " +  waldo);
}
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);