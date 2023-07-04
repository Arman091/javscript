// an Array of set Questions and answers

let questions = [
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Spain"],
    answer: 2,
  },
  {
    question: "In which sport would you perform a slam dunk?",
    options: ["Basketball", "Tennis", "Golf", "Swimming"],
    answer: 0,
  },
  {
    question: "Which country is famous for its passion for cricket?",
    options: ["England", "India", "Australia", "South Africa"],
    answer: 1,
  },
  {
    question: "Which athlete has the most Olympic gold medals?",
    options: [
      "Usain Bolt",
      "Michael Phelps",
      "Serena Williams",
      "Simone Biles",
    ],
    answer: 1,
  },
  {
    question: "What is the national sport of Canada?",
    options: ["Hockey", "Baseball", "Soccer", "Rugby"],
    answer: 0,
  },
  {
    question: "Which sport uses a shuttlecock?",
    options: ["Badminton", "Table Tennis", "Volleyball", "Tennis"],
    answer: 0,
  },
  {
    question: "Which boxer was known as 'The Greatest'?",
    options: [
      "Muhammad Ali",
      "Mike Tyson",
      "Floyd Mayweather Jr.",
      "Manny Pacquiao",
    ],
    answer: 0,
  },
];

let index = 0; // to keep track of Question
let score = 0;
let question = document.getElementById("question-text");
let optionsContainer = document.getElementById("answer-options");

function setQuestion() {
  if (index < questions.length) {
    question.innerText = questions[index].question;
    optionsContainer.innerHTML = `
      <li class="option" onclick="checkAnswer(0)">${questions[index].options[0]}</li>
      <li class="option" onclick="checkAnswer(1)">${questions[index].options[1]}</li>
      <li class="option" onclick="checkAnswer(2)">${questions[index].options[2]}</li>
      <li class="option" onclick="checkAnswer(3)">${questions[index].options[3]}</li>
      `;
  } else {
    // Handle end of quiz (e.g., display results)
    console.log("End of quiz");
    submitHandler();
    // modal to display
  }
}

setQuestion(index); //initial question SetUp;
// function to get Next Question
function nextQuestion() {
  if (index < questions.length) {
    index = index + 1;

    setQuestion(index);
  }
}

function checkAnswer(selectedOption) {
  const selectedOptionElement = optionsContainer.children[selectedOption];
  const correctAnswer = questions[index].answer;
  if (selectedOption === questions[index].answer) {
    selectedOptionElement.style.backgroundColor = "green";
    score++;
    // Perform actions for a correct answer
  } else {
    // Perform actions for a wrong answer
    selectedOptionElement.style.backgroundColor = "red";
  }
}

function closeModal() {
   document.getElementById("myModal").style.display = "none";
}

//submiHandler

function submitHandler() {
  console.log("hello")
    let scorevar = document.getElementById("my_score");
    let correct = document.getElementById("my_correct");
    scorevar.innerText = `${score}`;
    correct.innerText = `${score}`;
   document.getElementById("myModal").style.display = "block";
 }