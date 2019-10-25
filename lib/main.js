'use strict';

// It is always helpful to use comments in your code!

var boilSpan = document.getElementById('boiling-temp');

function boilFunction() {
  var boilTemp = document.createTextNode("211");
  boilSpan.appendChild(boilTemp);
};

boilFunction();

var freezeSpan = document.getElementById('freezing-temp');
function freezeFunction() {
  var freezeTemp = document.createTextNode("32");
  freezeSpan.appendChild(freezeTemp);
};

freezeFunction();

var waterSpan = document.getElementById('water-temp');
function waterFunction() {
  var waterTemp = document.createTextNode("67");
  waterSpan.appendChild(waterTemp);
};

waterFunction();

var temp = document.getElementById('good-temp');
setTimeout(function () {
  temp.classList.remove('hide');
  temp.classList.add('show');
}, 3000);