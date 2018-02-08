function Quiz(questions){
	this.questions = questions;
	this.score = 0; 
	this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(guess){
	if(this.getCurrentQuestion().isCorrectAnswer(guess)){
		this.score++; 
	}
	this.currentQuestionIndex++;
}

Quiz.prototype.getCurrentQuestion = function(){
	return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.hasEnded = function(){
	return this.currentQuestionIndex >= this.questions.length;
}