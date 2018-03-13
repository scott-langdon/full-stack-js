function makeBirdCounter() {
  var count = 0;
  return function() {
  	count += 1;
  	return count + ' birds';
  }
}

function makeDogCounter() {
  var count = 0;
  return function() {
  	count += 1;
  	return count + ' dogs';
  }
}

// Tested inside Dev Tools 
// var birdCounter = makeBirdCounter(); 
// birdCounter(); 
// "1 birds"
// birdCounter(); 
// "2 birds"
// birdCounter(); 
// "3 birds"


// * refresh page

// var birdCounter = makeBirdCounter(); 
// var dogCounter = makeDogCounter(); 
// birdCounter(); 
// "1 birds"
// docCounter(); 
// "1 dogs"

// var birdCounter2 = makeBirdCounter(); 
// birdCounter2(); 
// "1 birds"
// ...... this shows that it has its own private scope, seperate to birdCounter();

// V3end condensed this code

