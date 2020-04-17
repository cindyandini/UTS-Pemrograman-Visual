function convert() {
    var temp = document.getElementById("initialtemp");
    var valueSelected = temp.value;

    if (valueSelected == "c") {
      var convertedF = cToF();
      var convertedK = cToK();
      var convertedR = cToR();

      return document.getElementById("result").value = convertedF + "F" + " = " + convertedK + "K" + " = " + convertedR + "R";
    } else if (valueSelected == "f") {
      var convertedC = fToC();
      var convertedK = fToK();
      var convertedR = fToR();

      return document.getElementById("result").value = convertedC + "C" + " = " + convertedK + "K" + " = " + convertedR + "R";
    } else if (valueSelected == "k") {
      var convertedF = kToF();
      var convertedC = kToC();
      var convertedR = kToR();

      return document.getElementById("result").value = convertedF + "F" + " = " + convertedC + "C" + " = " + convertedR + "R";
    } else if (valueSelected == "r") {
      var convertedF = rToF();
      var convertedC = rToC();
      var convertedK = rToK();

      return document.getElementById("result").value = convertedF + "F" + " = " + convertedC + "C" +"=" + convertedK + "K";
    }
  }
  // celcius to rest

function cToF() {
  var c = document.getElementById("tempinput").value;
  return (c * 9 / 5) + 32;
}

function cToK() {
    var c = document.getElementById("tempinput").value;
    return c + 273;
  }

function cToR(){
    var c = document.getElementById("tempinput").value;
    return c * 4 / 5;
}
  // fahrenheit to rest

function fToC() {
  var f = document.getElementById("tempinput").value;
  return (f - 32) * 5 / 9;
}

function fToK() {
    var f = document.getElementById("tempinput").value;
    return (f - 32) * 5 / 9 + 273;
  }

function fToR() {
    var f = document.getElementById("tempinput").value;
    return (f + 32) *  4 / 9;
  }
  // kelvin to rest

function kToC() {
  var k = document.getElementById("tempinput").value;
  return k + 273;
}

function kToF() {
  var k = document.getElementById("tempinput").value;
  return (k - 273) * 9 / 5 + 32;
}

function kToR() {
    var k = document.getElementById("tempinput").value;
    return (k + 273) * 5 / 4;
  }

  // reamur to rest

  function rToF() {
    var r = document.getElementById("tempinput").value;
    return (r + 32) * 4 / 9;
  }
  
  function rToC() {
      var r = document.getElementById("tempinput").value;
      return r * 4 / 5;
    }
  
  function rToK(){
      var r = document.getElementById("tempinput").value;
      return (r + 273) * 4 / 5;
  } 