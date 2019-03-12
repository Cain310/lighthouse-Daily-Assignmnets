var https = require("https");

function getHTML(requestOptions, callback) {
  var chunkyVar = "";

  https.get(requestOptions, function(response) {
    response.on("data", function(data) {
      chunkyVar += data;
    });
    response.on("end", function() {
      callback(chunkyVar);
    });
  });
}
var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step3.html"
};
function printHTML(html) {
  console.log(html);
}
getHTML(requestOptions, printHTML);
