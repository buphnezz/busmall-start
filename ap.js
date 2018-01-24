'use strict';
// array to store all busmall images
BusMallImage.allBusMallImages = [];

// keep track of all clicks no matter which image was clicked on
BusMallImage.totalClicks = 0;

BusMallImage.lastDisplayed = [];

var sectionEl = document.getElementById('images');

//access the ul element from the DOM
var ulEl = document.getElementById('results');

// array to store the names for our chart labels
var imageNames = [];

// array to store votes per images
var imageVotes = [];

// make constructor for busmall images
function BusMallImage(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.votes = 0;
  this.timesDisplayed = 0;
  BusMallImage.allBusMallImages.push(this);
  imageNames.push(this.name);
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

// callback function for the event listener to randomly display a busmall item
function randomItem() {
  // random number generator to return a number betwen 0 and the length of the array
  var randomLeft = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
  var randomMiddle = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
  var randomRight = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);

  // before we set the src attribute, we want to make sure the random images are unique
  // check to make sure each random number is unique AND not one of the previously displayed images 
  // if they are the same we need to generate new random numbers
  // condition 1: left and middle are the same
  // condition 2: left and right are the same
  // condition 3: middle and right are the same
  while(randomLeft === randomMiddle || BusMallImage.lastDisplayed.includes(randomLeft) || randomLeft === randomRight || BusMallImage.lastDisplayed.includes(randomMiddle) || randomMiddle === randomRight || BusMallImage.lastDisplayed.includes(randomRight)) {  
    console.log('Duplicate was caught');
    randomLeft = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
    randomMiddle = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
    randomRight = Math.floor(Math.random() * BusMallImage.allBusMallImages.length);
  }

  // use the random number to display 3 items at that random index
  //display 3 images at a time 
  // manage the size and position of the images
  // set the src and alt attributes of the 3 items
  leftEl.src = BusMallImage.allBusMallImages[randomLeft].filepath;
  leftEl.alt = BusMallImage.allBusMallImages[randomLeft].name;
  middleEl.src = BusMallImage.allBusMallImages[randomMiddle].filepath;
  middleEl.alt = BusMallImage.allBusMallImages[randomMiddle].name;
  rightEl.src = BusMallImage.allBusMallImages[randomRight].filepath;
  rightEl.alt = BusMallImage.allBusMallImages[randomRight].name;

  // increment the number of times each image was shown
  BusMallImage.allBusMallImages[randomLeft].timesDisplayed += 1;  
  BusMallImage.allBusMallImages[randomMiddle].timesDisplayed += 1;  
  BusMallImage.allBusMallImages[randomRight].timesDisplayed += 1;  

  // keep track of these three as the previously displayed goats
  // APPROACH 1   the pushes accumulate and I have to clear them out
  BusMallImage.lastDisplayed = [];
  BusMallImage.lastDisplayed.push(randomLeft);
  BusMallImage.lastDisplayed.push(randomMiddle);
  BusMallImage.lastDisplayed.push(randomRight);
//added this one manually!
}

// e is the same as event
function handleClick(event) {
  // to track the total number of clicks
  BusMallImage.totalClicks += 1;
  console.log('a click occurred');
  
  // count the clicks on a specific image
  // access with our for loop a specific image
  for( var i in BusMallImage.allBusMallImages) {
    if(event.target.alt === BusMallImage.allBusMallImages[i].name) {
      BusMallImage.allBusMallImages[i].votes += 1;
    }
  }
  
  if(BusMallImage.totalClicks > 24) {
    sectionEl.removeEventListener('click', handleClick);
    showResults();
    updateVotes();
    renderChart();
  } else {
    randomItem();
  }
} 

function showResults() {
  for(var i in BusMallImage.allBusMallImages) {
    var liEl = document.createElement('li');
    liEl.textContent = BusMallImage.allBusMallImages[i].name + ' has ' + BusMallImage.allBusMallImages[i].votes + ' votes and was displayed ' + BusMallImage.allBusMallImages[i].timesDisplayed + ' times.';
    ulEl.appendChild(liEl);
  }
}

// function to update the number of votes per image
function updateVotes() {
  for(var i in BusMallImage.allBusMallImages) {
    imageVotes[i] = BusMallImage.allBusMallImages[i].votes;
  }
}

// function to render the chart on the screen
function renderChart() {
  var context = document.getElementById('chart-placeholder').getContext('2d');
  console.log('found the barchart');

  // add as many hex colors as I have pictures
  var chartColors = ['#E37222', '#DAF7A6', '#FFC300', '#C70039', '#33FFBD', '#33FF57', '#75FF33', '#DBFF33', '#5733FF', '#8F7A76', '#CF6650', '#ebf442', '#f44153', '#f207c7', '#d30610', '#71bc16', '#444740', '#1f0fd8', '#7c75ce', '#40a5aa', '#b003c6'];
  // refer to the barChart doc to see where my {} is out of place.
  console.log(imageNames);
  console.log(imageVotes);  
  var busMallChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: imageNames,
      datasets: [{
        label: 'Votes Per Image',
        data: imageVotes,
        backgroundColor: chartColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          tick: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

// eventlistener on the image
// leftEl.addEventListener('click', randomItem);
// middleEl.addEventListener('click', randomItem);
// rightEl.addEventListener('click', randomItem);

  

  // sectionEl.addEventListener('click', handleClick);
  // APPROACH 2 (BETTER BUT I DONT UNDERSTAND IT FULLY) the pushes just override themselves.
  // BusMallImage.lastDisplayed[0] = randomLeft;
  // BusMallImage.lastDisplayed[1] = randomMiddle;
  // BusMallImage.lastDisplayed[2] = randomRight;

sectionEl.addEventListener('click', handleClick);
// imgEl.addEventListener('click', handleClicks)
// invoke the callback on page load to show a random baby goat
randomItem();


// users should be able to select an image
// I want to track which image is selected
// track how many times each image was selected
// display the number of times each image was selected
// user must click 25 times before results are displayed
// calculate and display the percentage of times an image was clicked when it was displayed.
// make it pretty.


