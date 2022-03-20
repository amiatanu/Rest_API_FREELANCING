// Questions will be asked
const Questions = [{
		id: 0,
		q: "What is capital of India?",
		a: [{ text: "gandhinagar", isCorrect: false },
			{ text: "Surat", isCorrect: false },
			{ text: "Delhi", isCorrect: true },
			{ text: "mumbai", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "What is the capital of Thailand?",
		a: [{ text: "Lampang", isCorrect: false, isSelected: false },
			{ text: "phuket", isCorrect: false },
			{ text: "Ayutthaya", isCorrect: false },
			{ text: "Bangkok", isCorrect: true }
		]

	},
	{
		id: 2,
		q: "What is the capital of Gujarat",
		a: [{ text: "surat", isCorrect: false },
			{ text: "vadodara", isCorrect: false },
			{ text: "gandhinagar", isCorrect: true },
			{ text: "rajkot", isCorrect: false }
		]
	},
    {
		id: 3,
		q: "What is the capital of Gujarat",
		a: [{ text: "surat", isCorrect: false },
			{ text: "vadodara", isCorrect: false },
			{ text: "gandhinagar", isCorrect: true },
			{ text: "rajkot", isCorrect: false }
		]
	}

]
const Questions2=[
    {
        "category": "Geography",
        "type": "boolean",
        "difficulty": "medium",
        "question": "Seoul is the capital of North Korea.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "Science & Nature",
        "type": "boolean",
        "difficulty": "medium",
        "question": "The &quot;Gympie Stinger&quot; is the deadliest plant in the world.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "Entertainment: Books",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
        "correct_answer": "astoria",
        "incorrect_answers": [
            "Pansy Parkinson",
            "Millicent Bulstrode",
            "Hermione Granger"
        ]
    },{
        "category": "Entertainment: Books",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
        "correct_answer": "bhaskar",
        "incorrect_answers": [
            "Pansy Parkinson",
            "Millicent Bulstrode",
            "Hermione Granger"
        ]
    },{
        "category": "Entertainment: Books",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
        "correct_answer": "Atanu",
        "incorrect_answers": [
            "Pansy Parkinson",
            "Millicent Bulstrode",
            "Hermione Granger"
        ]
    }]

// Set start
var start = true;
let counter=0
function count(){
    counter++;
    alert(counter);
}
// Iterate
function iterate(id) {
    //alert(Questions2[0].category);
    //console.log(Questions2[0].correct_answer);
	// Getting the result display section
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	// Getting the question
	const question = document.getElementById("question");


	// Setting the question text
	question.innerText = Questions2[id].question;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions2[id].correct_answer;
	op2.innerText = Questions2[id].incorrect_answers[0];
	op3.innerText = Questions2[id].incorrect_answers[1];
	op4.innerText = Questions2[id].incorrect_answers[2];
    
	// Providing the true or false value to the options

	op1.value = "true";
	op2.value = "falsa";
	op3.value = "false";
	op4.value = "false";

	var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightgoldenrodyellow";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "lightskyblue";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	})

	// Grabbing the evaluate button
	const evaluate = document.getElementsByClassName("evaluate");
	// Evaluate method
	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
            //count();
			result[0].innerHTML = "True";
			result[0].style.color = "green";
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "red";
		}
	})
}

if (start) {
	iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
	start = false;
	if (id <=Questions2.length) {
		id++;
		iterate(id);
		console.log(id);
	}
})

//prev question
const prev = document.getElementsByClassName('prev')[0];
var id = 0;
prev.addEventListener("click", () => {
	start = false;
	if (id>0) {
		id--;
		iterate(id);
		console.log(id);
	}

})

