'use strict';


//Product constructor
function Product(name, url){
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
new Product('Sweep', 'sweep.jpg');
new Product('Tauntaun', 'tauntaun.jpg');
new Product('Unicorn', 'unicorn.jpg');
new Product('Water-can', 'water-can.jpg');
new Product('Wine-glass', 'wine-glass.jpg');


//random index function
function randIndex(array){
  let index = Math.floor(Math.random() * array.length);
  return index;
}

//function for cloning arrays.
function cloneArray(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray[i] = array[i];
  }
  return newArray;
}

//function to pick and render 3 random products
function renderChoices(){
  //clone Product pool for array manipulation
  let options = cloneArray(Product.allProducts);

  //remove past products from choices

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


  
}