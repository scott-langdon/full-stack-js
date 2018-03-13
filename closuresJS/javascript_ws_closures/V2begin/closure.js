var birds = 3;

function dogHouse() { // outer function 
	var dogs = 8;
	function showDogs(){ //inner function 
		console.log(dogs);
	}
	return showDogs; 
}

var getDogs = dogHouse(); 

getDogs(); // 8
