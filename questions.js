function Questions(title,choices,answer) {
	this.title = title;
	this.choices = choices;
	this.answer = answer;
}

Questions.prototype.checkAnswer = function(selectedChoice) {
	return selectedChoice === this.answer;
};