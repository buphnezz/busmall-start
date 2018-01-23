'use strict';
// array to store all busmall images
BusMallImage.allBusMallImages = [];

// keep track of all clicks no matter which image was clicked on
BusMallImage.totalClicks = 0;

// make constructor for busmall images
function BusMallImage(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.votes = 0;
  this.timesDisplayed = 0;
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
new BusMallImage('img/sweep.png', 'Sweep');
new BusMallImage('img/tauntaun.jpg', 'Tauntaun');
new BusMallImage('img/unicorn.jpg', 'Unicorn');
new BusMallImage('img/usb.gif', 'USB');
new BusMallImage('img/water-can.jpg', 'Water-Can');
new BusMallImage('img/wine-glass.jpg', 'Wine-Glass');

// access the img from the DOM
var leftEl = document.getElementById('itemOnPageOne');
var middleEl = document.getElementById('itemOnPageTwo');
var rightEl = document.getElementById('itemOnPageThree');

// eventlistener on the image
leftEl.addEventListener('click', randomItem);
middleEl.addEventListener('click', randomItem);
rightEl.addEventListener('click', randomItem);


// callback function for the event listener to randomly display a busmall item
function randomItem() {
  // random number generator to return a number betwen 0 and the length of the array
  var randomIndex = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
  var randomIndex2 = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
  var randomIndex3 = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
  
  // use the random number to display 3 items at that random index
  //display 3 images at a time 
  // manage the size and position of the images
  leftEl.src = BusMallImage.allBusMallImages[randomIndex].filepath;
  middleEl.src = BusMallImage.allBusMallImages[randomIndex2].filepath;
  rightEl.src = BusMallImage.allBusMallImages[randomIndex3].filepath;
}
function handleClicks() {
  for(var i in allBusMallImages) {}
  

}

imgEl.addEventListener('click', handleClicks)
// invoke the callback on page load to show a random baby goat
randomItem();


// users should be able to select an image
// I want to track which image is selected
// track how many times each image was selected
// display the number of times each image was selected
// user must click 25 times before results are displayed
// calculate and display the percentage of times an image was clicked when it was displayed.
// make it pretty.


