var questionBox = document.getElementsByClassName('questions');
var result = document.getElementsByClassName('result');
var submit = document.getElementById('submit');
function createQuiz (questions, questionBox, result, submitButton){
    function showQuiz(questions, questionBox){
	var output = [];
	var answers;
	for(var i=0; i<questions.length; i++){
		answers = [];
		for(letter in questions[i].answers){
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}
		output.push(
			'<div class="questions">' + questions[i].questions + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	questionBox.innerHTML = output.join('');
}
    function result (questions, questionBox, result) {
	var answerContainers = questionBox.querySelectorAll('.answers');
	var userAnswer = '';
	var numCorrect = 0;
	for(var i=0; i<questions.length; i++){
		userAnswer = (answerContainers[i].querySelector('input[name=questions'+i+']:checked')||{}).value;
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].style.color = 'lightgreen';
		}
		else{
			answerContainers[i].style.color = 'red';
		}
	}
	result.innerHTML = numCorrect + ' out of ' + questions.length;
}
    showQuiz(questions, questionBox);

    submitButton.onclick = function(){
        result(questions, questionBox, result);
    }
}
var quizQuestions = [
    {
        question: "What year was the PlayStation 1 released?",
        answers: {
            a: '1993',
            b: '1994',
            c: '1996'
        },
        correctAnswer: 'b'
    },
    {
        question: "What year was the PlayStation 2 released?",
        answers: {
            a: '2000',
            b: '2003',
            c: '1999'
        },
        correctAnswer: 'a'
    },
    {
        question: "What year was the PlayStation 3 released?",
        answers: {
            a: '2004',
            b: '2007',
            c: '2006'
        },
        correctAnswer: 'c'
    },
    {
        question: "What year was the PlayStation 4 released?",
        answers: {
            a: '2009',
            b: '2011',
            c: '2013'
        },
        correctAnswer: 'c'
    },
    {
        question: "What year was the PlayStation 5 released?",
        answers: {
            a: '2018',
            b: '2019',
            c: '2020'
        },
        correctAnswer: 'c'
    }
    
];
generateQuiz(quizQuestions, questionBox, result, submit);