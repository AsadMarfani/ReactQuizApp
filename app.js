function populate(){
	if(quiz.isEnded()) {
		showScores();
	}
	else {
		document.getElementById('questions').innerHTML = "<b>Question No. "+(quiz.questionIndex + 1)+" : </b>"+quiz.getQuestionIndex().title;
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			document.getElementById("choice"+i).textContent = choices[i];
			guess("btn"+i,choices[i]);
		}

		showProgress();
	}
};

function showScores() {
	var gameOver = "<div class='jumbotron text-center'><h1 id='result' class='text-primary'>Result</h1></br>";
	gameOver += "<h2>Your Have Earned : "+quiz.score+" point(s)</h2></div>";
	console.log(gameOver);
	document.getElementById('quizUI').innerHTML = gameOver;
};

function guess(id, selectedAnswer) {
	var button = document.getElementById(id);
	 console.log(button);
	button.onclick = function() {
		quiz.guess(selectedAnswer);
		console.log(quiz.score);
		populate();
	}

};

function showProgress() {
	var currentQuestion = quiz.questionIndex + 1;
	document.getElementById('progress').textContent = "Question "+currentQuestion+" of "+quiz.questions.length;
}

var questions = [
	
	new Questions ("Which one is not an Object Oriented Programming Language?",["C#","Java","C","Python"],"C"),
	new Questions ("Which one is used for styling Web Pages?",["HTML","JavaScript","PHP","CSS"],"CSS"),
	new Questions ("Which tag is introduced in HTML5?",["footer","img","div","h1"],"footer"),
	new Questions ("The upcoming version of Angular is?",["Angular 2 ","Angular 3","Angular 4","Angular 6"],"Angular 4"),
	new Questions ("MVC is a ______",["Platform","Framework","Language","All"],"Framework")
];

var quiz = new Quiz(questions);

populate();