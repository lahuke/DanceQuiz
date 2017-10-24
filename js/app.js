var score = 0;

	$('#status').hide();
	$('#images').hide();
	$('#Questions').hide();
	$('.answers').hide();
	$('.answerPopUp').hide();
	$('#endPage').hide();
	$('#submitButton').hide();
	$('#header').hide();

$('.answer').on('click', function(){
	console.dir(this);
	$('.answer').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

function clearScreen(){
	$('#status').hide();
	$('#images').hide();
	$('#Questions').hide();
	$('.answers').hide();
	$('.answerPopUp').hide();
	$('#endPage').hide();
	$('#submitButton').hide();
	$('#header').hide();
	$('#intro').hide();
};

//checks to see if an answer is correct and asigns one point for each correct answer//
function checkAnswer(question, answer){
	if (question == "q1" && answer == "stretch"){
		clearScreen();
		score++;
		console.log(score);
		$('#correctq1').css({'display':'inline-block'});
	}
	else if (question == "q1" && answer !== 'stretch') {
		console.log('Answer 1 - Wrong!')
		clearScreen();
		$('#incorrectq1').css({'display':'inline-block'});
	}
	else if (question == "q2" && answer == "montagne"){
		clearScreen();
		score++;
		$('#correctq2').css({'display':'inline-block'});
	}
	else if (question == "q2" && answer !== "montagne"){
		clearScreen();
		$('#incorrectq2').css({'display':'inline-block'});
	}
	else if (question == "q3" && answer == "isadora"){
		clearScreen();
		score++;
		$('#correctq3').css({'display':'inline-block'});
	}
	else if (question == "q3" && answer !== "isadora"){
		clearScreen();
		$('#incorrectq3').css({'display':'inline-block'});
	}
	else if (question == "q4" && answer == "chorus"){
		clearScreen();
		score++;
		$('#correctq4').css({'display':'inline-block'});
	}
	else if (question == "q4" && answer !== "chorus"){
		clearScreen();
		$('#incorrectq4').css({'display':'inline-block'});
	}
	else if (question == "q5" && answer == "sex"){
		clearScreen();
		score++;
		$('#correctq5').css({'display':'inline-block'});
	}
	else if (question == "q5" && answer !== "sex"){
		clearScreen();
		$('#incorrectq5').css({'display':'inline-block'});
	}
	document.getElementById("correctAnswers").innerText = score;
	assignPosition(score);
};
//gives dance position label at end//
function assignPosition(){
	if (score === 0){
		document.getElementById("position").innerHTML = "You are a rookie. Keep the dancing to very dark rooms."
	}
	else if (score === 1){
		document.getElementById("position").innerHTML = "You are a novice. Take a few more dance classes and give it another go."
		console.log('working position');
	}
	else if (score === 5){
		document.getElementById("position").innerHTML = "You're a professional dancer!"
	}
	else {
		document.getElementById("position").innerHTML = "You almost had us fooled. Stick to the ballet barre and you'll be a professional before you know it."
	}

};

$('#submitButton').on('click', function(){
	var questionNumber = $('.selectedAnswer')[0].parentElement.id;
	var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");
	checkAnswer(questionNumber, questionAnswer);
	console.log ('Submit Button working');
});

//Displays 'correct' or 'incorrect' popups//
$('#buttonq1, #buttonq1i').on('click', function(){
	$('#incorrectq1').css({'display':'none'});
	$('#correctq1').css({'display':'none'});
	q2appear();
	console.log('q1 incorrect clicked')
});

$('#buttonq2 , #buttonq2i').on('click', function(){
	$('#incorrectq2').css({'display':'none'});
	$('#correctq2').css({'display':'none'});
	q3appear();
});

$('#buttonq3 , #buttonq3i').on('click', function(){
	$('#incorrectq3').css({'display':'none'});
	$('#correctq3').css({'display':'none'});
	q4appear();
});

$('#buttonq4 , #buttonq4i').on('click', function(){
	$('#incorrectq4').css({'display':'none'});
	$('#correctq4').css({'display':'none'});
	q5appear();
});

$('#buttonq5, #buttonq5i').on('click', function(){
	$('#incorrectq5').css({'display':'none'});
	$('#correctq5').css({'display':'none'});
	$('#endPage').show();
});

//calls first question//
function q1appear(){
	$('#intro').hide();
	$('#status').show();
		$('#firstStatus').show();
		$('#secondStatus').hide();
		$('#thirdStatus').hide();
		$('#fourthStatus').hide();
		$('#fifthStatus').hide();
	$('#Questions').show();
		$('#firstQuestion').show();
		$('#secondQuestion').hide();
		$('#thirdQuestion').hide();
		$('#fourthQuestion').hide();
		$('#fifthQuestion').hide();
	$('#images').show();
		$('#image1').show();
		$('#image2').hide();
		$('#image3').hide();
		$('#image4').hide();
		$('#image5').hide();
	$('#q1').show();
		$('#q2').hide();
		$('#q3').hide();
		$('#q4').hide();
		$('#q5').hide();
	$('#submitButton').show();
};

//calls second question//
function q2appear(){
	$('#intro').hide();
	$('#status').show();
		$('#firstStatus').hide();
		$('#secondStatus').show();
		$('#thirdStatus').hide();
		$('#fourthStatus').hide();
		$('#fifthStatus').hide();
	$('#Questions').show();
		$('#firstQuestion').hide();
		$('#secondQuestion').show();
		$('#thirdQuestion').hide();
		$('#fourthQuestion').hide();
		$('#fifthQuestion').hide();
	$('#images').show();
		$('#image1').hide();
		$('#image2').show();
		$('#image3').hide();
		$('#image4').hide();
		$('#image5').hide();
	$('#q2').show();
		$('#q1').hide();
		$('#q3').hide();
		$('#q4').hide();
		$('#q5').hide();
	$('#submitButton').show();
};

//calls third question//
function q3appear(){
	$('#intro').hide();
		$('#status').show();
		$('#firstStatus').hide();
		$('#secondStatus').hide();
		$('#thirdStatus').show();
		$('#fourthStatus').hide();
		$('#fifthStatus').hide();
	$('#Questions').show();
		$('#firstQuestion').hide();
		$('#secondQuestion').hide();
		$('#thirdQuestion').show();
		$('#fourthQuestion').hide();
		$('#fifthQuestion').hide();
	$('#images').show();
		$('#image1').hide();
		$('#image2').hide();
		$('#image3').show();
		$('#image4').hide();
		$('#image5').hide();
	$('#q3').show();
		$('#q1').hide();
		$('#q2').hide();
		$('#q4').hide();
		$('#q5').hide();
	$('#submitButton').show();
};

//calls fourth question//
function q4appear(){
	$('#intro').hide();
		$('#status').show();
		$('#firstStatus').hide();
		$('#secondStatus').hide();
		$('#thirdStatus').hide();
		$('#fourthStatus').show();
		$('#fifthStatus').hide();
	$('#Questions').show();
		$('#firstQuestion').hide();
		$('#secondQuestion').hide();
		$('#thirdQuestion').hide();
		$('#fourthQuestion').show();
		$('#fifthQuestion').hide();
	$('#images').show();
		$('#image1').hide();
		$('#image2').hide();
		$('#image3').hide();
		$('#image4').show();
		$('#image5').hide();
	$('#q4').show();
		$('#q1').hide();
		$('#q2').hide();
		$('#q3').hide();
		$('#q5').hide();
	$('#submitButton').show();
};

//calls fifth question//
function q5appear(){
	$('#intro').hide();
		$('#status').show();
		$('#firstStatus').hide();
		$('#secondStatus').hide();
		$('#thirdStatus').hide();
		$('#fourthStatus').hide();
		$('#fifthStatus').show();
	$('#Questions').show();
		$('#firstQuestion').hide();
		$('#secondQuestion').hide();
		$('#thirdQuestion').hide();
		$('#fourthQuestion').hide();
		$('#fifthQuestion').show();
	$('#images').show();
		$('#image1').hide();
		$('#image2').hide();
		$('#image3').hide();
		$('#image4').hide();
		$('#image5').show();
	$('#q5').show();
		$('#q1').hide();
		$('#q2').hide();
		$('#q3').hide();
		$('#q4').hide();
	$('#submitButton').show();
};

//Restarts quiz from beginning//
function reloadPage(){
		location.reload();
	};



