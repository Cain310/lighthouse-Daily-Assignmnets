// take param from command line
var numDice = process.argv.slice(2)[0];


//take variable dice and make it roll that many times

function diceRoll(numDice){
  var outcome = "";
  for(var i = 0; i < numDice; i++){
    var resultOfEachRoll = "";
    resultOfEachRoll = Math.floor(Math.random() * 6 + 1);
    outcome += resultOfEachRoll + ", ";
    }
    outcome = outcome.replace(/,\s*$/, "")
  return  " rolled " + numDice + " dice " + outcome;
}


console.log(diceRoll(numDice));





/*
 else if (i !== conceptList.length - 1){
      final += conceptList[i] + ", ";
    }
    else {
      final += "and " + conceptList[i];
    }
  }
  */


// example output:
// node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5