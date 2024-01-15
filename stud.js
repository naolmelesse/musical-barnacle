// var randomNumber = Math.random();
// var randomNumber = random * 6;
// randomNumber = Math.floor(document.querySelector()) + 1;
// console.log(randomNumber1);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(".dice .img1")[0].setAttribute("src", images1);
document.querySelectorAll(".dice .img2")[0].setAttribute("src", images2);
