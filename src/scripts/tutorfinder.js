// add js to display query params on page
// add scrolly carousel thing
// make dummy database, query tutors that match params

function decodeQueryString(qs) {
  // var qStr = qs.split("&");
  var x = qs.indexOf("?");
  var y = qs.indexOf("&");
  var qStr = qs.substr(x + 1, y).split("&");
  var objs = {};
  for (var i = 0; i != qStr.length; ++i) {
    var m = qStr[i].split("=");
    objs[m[0]] = m[1];
  }
  console.log(objs);
  return objs;
}

window.addEventListener("load", function() {
  var url = window.location.href;
  var objs = decodeQueryString(url);
  var name = objs["name"].split("%20");
  document.getElementById("name").innerText = name[0] + " " + name[1];
  document.getElementById("zip").innerText = objs["zip"];
  document.getElementById("distance").innerText = objs["distance"] + " miles";
  document.getElementById("subjects").innerText = objs["subjects"];
});
