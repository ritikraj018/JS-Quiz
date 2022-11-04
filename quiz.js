var quizdata = [

	{
		question :' Best country of the world is',
		a: 'India',
		b: 'Israel',
		c: 'Russia',
		d: 'Justina',
		correct:'d'
	},

	{
		question:' Who is the Prime Minister of India?',
		a: 'Narendra Lodi',
		b: 'Ibrahim Modi',
		c: 'Narendra Modi',
		d: 'Umang Kumar',
		correct:'c'
	},

	{
		question:' Who is the President of India?',
		a: 'Akash Prasad',
		b: 'Dropadi Murmu',
		c: 'Bahlol Lodi',
		d: 'Sheikh Rashid Al Makhtun',
		correct:'a'
	},

	{
		question:' Capital of India',
		a: 'Chengalpattu',
		b: 'New Delhi',
		c: 'Barh',
		d: 'Chennai',
		correct:'b'
	}

]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz()
{
	deselect()

	question.innerHTML = quizdata[currentQuestion].question
	option_a.innerHTML = quizdata[currentQuestion].a
	option_b.innerHTML = quizdata[currentQuestion].b
	option_c.innerHTML = quizdata[currentQuestion].c
	option_d.innerHTML = quizdata[currentQuestion].d

}

function deselect()
{
	answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener( 'click', ()=>{

	var selectedOption;

	answer.forEach(answer=>{
		if(answer.checked)
		{
			selectedOption=answer.id
		}
	})

	if(selectedOption==quizdata[currentQuestion].correct)
	{
		quizScore=quizScore+1
	}
	currentQuestion=currentQuestion+1
	
	if(currentQuestion==quizdata.length)
	{
		document.getElementById('quizDiv').innerHTML = `<h2 class="text-center"> Your Score for this quiz is ${quizScore} / ${quizdata.length}.</h2>`
	}
	else
	{
		loadQuiz()
	}

})