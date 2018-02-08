var questions = [
	new Question("What year was the movie Back To The Future released?", ["1985","1990"], "1985"), 
	new Question("Who performed at the Super Bowl in 2018?", ["Snoop Dogg", "Justin Timberlake"], "Justin Timblerlake")
]; 

var quiz = new Quiz(questions); 

QuizUI.displayNext();