// It is always helpful to use comments in your code!

const boilSpan = document.getElementById('boiling-temp');
var boilTemp = document.createTextNode("211");
boilSpan.appendChild(boilTemp);

const freezeSpan = document.getElementById('freezing-temp');
var freezeTemp = document.createTextNode("32");
freezeSpan.appendChild(freezeTemp);

const waterSpan = document.getElementById('water-temp');
var waterTemp = document.createTextNode("67");
waterSpan.appendChild(waterTemp);

const temp = document.getElementById('good-temp');
setTimeout(() => {
  temp.classList.remove('hide');
  temp.classList.add('show');
}, 3000);
