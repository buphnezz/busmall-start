'use strict';
// array to store all busmall images
BusMallImage.allBusMallImages = [];
// make constructor for busmall images
function BusMallImage(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  BusMallImage.allBusMallImages.push(this);
}
// display images
new BusMallImage('img/bag.jpg', 'Bag');
new BusMallImage('img/banana.jpg', 'Banana');
new BusMallImage('img/bathroom.jpg', 'Bathroom');
new BusMallImage('img/boots.jpg', 'Boots');
new BusMallImage('img/breakfast.jpg', 'Breakfast');
new BusMallImage('img/bubblegum.jpg', 'Bubblegum');
new BusMallImage('img/chair.jpg', 'Chair');
new BusMallImage('img/cthulhu.jpg', 'Cthulhu');
new BusMallImage('img/dog-duck.jpg', 'Dog-Duck');
new BusMallImage('img/dragon.jpg', 'Dragon');
new BusMallImage('img/pen.jpg', 'Pen');
new BusMallImage('img/pet-sweep.jpg', 'Pet-Sweep');
new BusMallImage('img/scissors.jpg', 'Scissors');
new BusMallImage('img/shark.jpg', 'Shark');
new BusMallImage('img/sweep.jpg', 'Sweep');
new BusMallImage('img/tauntaun.jpg', 'Tauntaun');
new BusMallImage('img/unicorn.jpg', 'Unicorn');
new BusMallImage('img/usb.jpg', 'USB');
new BusMallImage('img/water-can.jpg', 'Water-Can');
new BusMallImage('img/wine-glass.jpg', 'Wine-Glass');

// access the img from the DOM
var imgEl = document.getElementById('itemOnPageOne');
var imgEl2 = document.getElementById('itemOnPageTwo');
var imgEl3 = document.getElementById('itemOnPageThree');

// eventlistener on the image
imgEl.addEventListener('click', randomItem);
imgEl2.addEventListener('click', randomItem);
imgEl3.addEventListener('click', randomItem);

// callback function for the event listener to randomly display a busmall item
function randomItem() {
  // random number generator to return a number betwen 0 and the length of the array
  var randomIndex = Math.floor(Math.random() * BusMallImage.allBusMallImages.length + 1);

  // use the random number to display a goat at that random index
  imgEl.src = BusMallImage.allBusMallImages[randomIndex].filepath;
}
// invoke the callback on page load to show a random baby goat
randomItem();

//display 3 images at a time 
// I want those 3 images to display side by side by side
// manage the size and position of the images
// users should be able to select an image
// I want to track which image is selected
// track how many times each image was selected
// display the number of times each image was selected
// user must click 25 times before results are displayed
// calculate and display the percentage of times an image was clicked when it was displayed.
// make it pretty.


