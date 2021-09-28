'use strict';


//Product constructor
function Product(name, url) {
  this.name = name;
  this.url = 'assets/' + url;
  this.votes = 0;
  this.timesShown = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

//Generate product objects

new Product('Bag', 'bag.jpg');
new Product('Banana', 'banana.jpg');
new Product('Bathroom', 'bathroom.jpg');
new Product('Boots', 'boots.jpg');
new Product('Breakfast', 'breakfast.jpg');
new Product('Bubblegum', 'bubblegum.jpg');
new Product('Chair', 'chair.jpg');
new Product('Cthulhu', 'cthulhu.jpg');
new Product('Dog-duck', 'dog-duck.jpg');
new Product('Dragon', 'dragon.jpg');
new Product('Pen', 'pen.jpg');
new Product('Pet-sweep', 'pet-sweep.jpg');
new Product('Scissors', 'scissors.jpg');
new Product('Shark', 'shark.jpg');
new Product('Sweep', 'sweep.png');
new Product('Tauntaun', 'tauntaun.jpg');
new Product('Unicorn', 'unicorn.jpg');
new Product('Water-can', 'water-can.jpg');
new Product('Wine-glass', 'wine-glass.jpg');


//random index function
function randIndex(array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
}

//function for cloning arrays.
function cloneArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }
  return newArray;
}

//function for eliminating duplicates
function dupeKill(obj, array) {
  for (let i = 0; i < array.length; i++) {
    if (obj.name === array[i].name) {
      array.splice(i, 1);
    }
  }
}

//define choice containers
let choice1 = document.getElementById('img1');
let choice2 = document.getElementById('img2');
let choice3 = document.getElementById('img3');

//function to pick and render 3 random products
function renderChoices() {

  //clone Product pool for array manipulation
  let options = cloneArray(Product.allProducts);

  //remove past products from choices, if necessary
  dupeKill(choice1, options);
  dupeKill(choice2, options);
  dupeKill(choice3, options);

  //grab 3 random DIFFERENT objects from options.
  let index = randIndex(options);
  let img1 = options[index];
  options.splice(index, 1);

  index = randIndex(options);
  let img2 = options[index];
  options.splice(index, 1);

  index = randIndex(options);
  let img3 = options[index];
  options.splice(index, 1);

  //render imgs to page
  choice1.src = img1.url;
  choice1.name = img1.name;
  choice2.src = img2.url;
  choice2.name = img2.name;
  choice3.src = img3.url;
  choice3.name = img3.name;

  //keep count of render total per obj
  img1.timesShown++;
  img2.timesShown++;
  img3.timesShown++;

  // let log = [img1, img2, img3];
  // console.log(log);
}

//render initial choices
renderChoices();

let totalVotes = 0;

//handle user input
function choiceHandler(event) {
  if (totalVotes < 25) {
    let userChoice = event.target;
    let choices = Product.allProducts;
    console.log(userChoice.name);
    for (let i = 0; i < choices.length; i++) {
      if (userChoice.name === choices[i].name) {
        choices[i].votes++;
      }
    }
    renderChoices();
    totalVotes++;

    if(totalVotes === 25){
      alert('Voting complete! Please click "View Results" to see results!');
      choice1.removeEventListener('click', choiceHandler);
      choice2.removeEventListener('click', choiceHandler);
      choice3.removeEventListener('click', choiceHandler);
    }

  }
}

choice1.addEventListener('click', choiceHandler);
choice2.addEventListener('click', choiceHandler);
choice3.addEventListener('click', choiceHandler);

//Render results

let resultsRendered = false;
let listEl = document.getElementById('countList');

function renderResults() {
  if (totalVotes >= 25 && !resultsRendered) {
    let products = Product.allProducts;
    for (let i = 0; i < products.length; i++) {
      let percentPicked = Math.round(1000 * products[i].votes / products[i].timesShown) / 10;
      let text = products[i].name + ': ' + products[i].votes + ' votes. (' + percentPicked + '% of ' + products[i].timesShown + ' showings)';
      let choiceEl = document.createElement('li');
      choiceEl.innerText = text;
      listEl.appendChild(choiceEl);
    }
    resultsRendered = true;
  }else if(resultsRendered){
    alert('Results already displayed!');
  }else {
    alert('25 votes required! Current votes: ' + totalVotes);
  }
}
