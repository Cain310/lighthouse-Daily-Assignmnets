var password = process.argv[2];

function obfuscate(password) {
  var passarray = password.split("");
  for (var i = 0; i < passarray.length; i++) {
    if (passarray[i] == "a") {
      passarray[i] = "4";
    }
    if (passarray[i] == "e") {
      passarray[i] = "3";
    }
    if (passarray[i] == "o") {
      passarray[i] = "0";
    }
    if (passarray[i] == "l") {
      passarray[i] = "1";
    }
  }
  return passarray.join("");
}

console.log(obfuscate(password));