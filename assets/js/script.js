/*jshint esversion: 6 */
//Functions (Start Game & End Game)//
function startGame() {
    const output = [];
    questions.forEach(
        (currentQ, qNum) => {
            const answers = [];
            for (letter in currentQ.answers) {
                answers.push(
                    `<label>
              <input type="radio" name="question${qNum}" value="${letter}">
              ${letter} :
              ${currentQ.answers[letter]}
            </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQ.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quiz.innerHTML = output.join('');
}

function gameEnd() {

    const answersBox = quiz.querySelectorAll('.answers');
    let score = 0;
    questions.forEach((currentQ, qNum) => {
        const answerBox = answersBox[qNum];
        const qSelect = `input[name=question${qNum}]:checked`;
        const userAns = (answerBox.querySelector(qSelect) || {}).value;

        //Correct answer//
        if (userAns === currentQ.answer) {
            score++;
            answersBox[qNum].style.color = 'green';
        } else {
            answersBox[qNum].style.color = 'red';
        }
    });

    results.innerHTML = `${score} out of ${questions.length}`;
}

// Variable contained within the code //
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const submitbtn = document.getElementById('submit');
//question array, including answers and correct answers//
const questions = [{
        question: "When did Super Mario release?",
        answers: {
            a: "1990",
            b: "1985",
            c: "1978"
        },
        answer: "b"
    },
    {
        question: "Who is Luigis girlfriend?",
        answers: {
            a: "Princess Peach",
            b: "Princess Daisy",
            c: "Rosalina"
        },
        answer: "b"
    },
    {
        question: "What country was tetris 64 only released in?",
        answers: {
            a: "Russia",
            b: "America",
            c: "Japan"
        },
        answer: "c"
    },
    {
        question: "What was the first commercially successful video game?",
        answers: {
            a: "Tetris",
            b: "Pong",
            c: "Space Invaders"
        },
        answer: "b"
    },
    {
        question: "What is the best selling video game of all time?",
        answers: {
            a: "Call of Duty",
            b: "Fifa",
            c: "Minecraft"
        },
        answer: "c"
    },
    {
        question: "In what game did mario first appear?",
        answers: {
            a: "Donkey Kong",
            b: "Super Mario",
            c: "Mario Kart"
        },
        answer: "a"
    },
    {
        question: "When was the first arcade machine made?",
        answers: {
            a: "1971",
            b: "1985",
            c: "1978"
        },
        answer: "a"
    },
    {
        question: "What is Sonics original home planet called?",
        answers: {
            a: "Earth",
            b: "Emerald Planet",
            c: "Mobius"
        },
        answer: "b"
    },
    {
        question: "What was Pac-Mans original name?",
        answers: {
            a: "Puck-Man",
            b: "Pizza-Man",
            c: "Chomp"
        },
        answer: "a"
    },
    {
        question: "What company developed Space Invaders?",
        answers: {
            a: "Atari",
            b: "Nintendo",
            c: "Taito"
        },
        answer: "c"
    }
];

// startGame function will ensure the program is reset and ready to run whenever called //
startGame();

// Compile and display results upon click of Submit button//
submitbtn.addEventListener('click', gameEnd)