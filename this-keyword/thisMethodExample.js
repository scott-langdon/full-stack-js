var City = function(name, state){
	this.name = name || 'Portland';
	this.state = state || 'Oregon';
	this.printMyCityAndState = function(){
		console.log('My city is' + this.name + ', and my state is ' + this.state);
	}; 
}; 

portland = new City(); 
seatle = new City('Seatle', 'Washington'); 
salem = new City('Salem'); 
vancouver = new City('Vancouver', 'Washington'); 

portland.printMyCityAndState();
seatle.printMyCityAndState();
salem.printMyCityAndState();
vancouver.printMyCityAndState();