function outerFunction() {
	var someCount = 0; 
	function innerFunction() {
		someCount++;
		console.log("Called " + someCount + " times");
	}
	return innerFunction; 
}
counter1 = outerFunction(); 
counter2 = outerFunction(); 
counter1(); // Called 1 times 
counter2(); // Called 1 times 