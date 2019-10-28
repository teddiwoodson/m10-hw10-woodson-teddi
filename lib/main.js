'use strict';

// It is always helpful to use comments in your code!

var boilSpan = document.getElementById('boiling-temp');

boilFunction = function boilFunction() {
  var boilTemp = document.createTextNode("211");
  boilSpan.appendChild(boilTemp);
};

boilFunction();

var freezeSpan = document.getElementById('freezing-temp');
freezeFunction = function freezeFunction() {
  var freezeTemp = document.createTextNode("32");
  freezeSpan.appendChild(freezeTemp);
};

freezeFunction();

var waterSpan = document.getElementById('water-temp');
waterFunction = function waterFunction() {
  var waterTemp = document.createTextNode("67");
  waterSpan.appendChild(waterTemp);
};

waterFunction();

//const temp = document.getElementById('good-temp');
//setTimeout(() => {
//temp.classList.remove('hide');
//temp.classList.add('show');
//}, 3000);

//if the water-temp is under 32, remove "hide" from the freezing getElementById
//Else if the water-temp is over 212, remove "hide" from the boiling element
//Else remove the "hide" from the fine element.
var waterTemperature = 67;
setTimeout(function () {
  if (waterTemperature < 32) {
    document.getElementById('frozen').classList.remove('hide');
    document.getElementById('frozen').classList.add('show');
  } else if (waterTemperature > 212) {
    document.getElementById('boiling').classList.remove('hide');
    document.getElementById('boiling').classList.add('show');
  } else {
    document.getElementById('good-temp').classList.remove('hide');
    document.getElementById('good-temp').classList.add('show');
  }
}, 3000);