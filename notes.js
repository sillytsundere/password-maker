var chars = {
  specials: ["!", "#", "$", "%", "&", "*", "+", "-", "/", "?", "@", "^", "~"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  lower: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  upper: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ], //try to use toUpperCase method
};

var newUpper = [];
for (let i = 0; i < chars.lower.length; i++) {
  var newChar = chars.lower[i].toUpperCase();
  newUpper.push(newChar);
}

console.log("newUpper", newUpper);

let mapUpper = chars.lower.map((char) => char.toUpperCase());
console.log("mapUpper", mapUpper);

let filterNumbers = chars.number.filter((char) => char > 5);


function getRandomArrayItem(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var randItem = array[randIndex];
  console.log("Random Item: ", randItem);
  return randItem;
}

  for (let i = 10; i < 20; i++) {

  }

  var animal = ["dog", "cat", "bird"];

  for (let i = animals.length-1; i > 0; i--) {

  }


  function nameOfFunction () {}

  const differentName = function () {}

  const imAnArrow = () => {}

  var generateBtn = document.querySelector('#generate');

  generateBtn.addEventListener('click', () => {

  })

  fetch(api)
  .then((res) => { return res.json(); })
  .then((data) => { console.log(data) })