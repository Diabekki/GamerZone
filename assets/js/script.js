//Functions (Start Game & End Game)//
function startGame(){
   
    //HTML Output//
    const Output = [];

    questions.forEach(
        (currentQ, qNum) => {
            const answers = [];
            for(letter in currentQ.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${qNum}" value="${letter}
                    ${letter} :
                    ${currentQ.answers[letter]}
                    </label>`
                );
            }
            Output.push(
                `<div class="question"> ${currentQ.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quiz.innerHTML = Output.join('');
}

function gameEnd(){}

// Variable contained within the code //
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const submitbtn = document.getElementById('submit');
//question array, including answers and correct answers//
const questions = [
    {
        question: "When did Super Mario release?",
        answers: {
            1: "1990",
            2: "1985",
            3: "1978"
        },
        answer: "2"
    },
    {
        question: "Who is Luigis girlfriend?",
        answers: {
            1: "Princess Peach",
            2: "Princess Daisy",
            3: "Rosalina"
        },
        answer: "2"
    },
    {
        question: "What country was tetris 64 only released in?",
        answers: {
            1: "Russia",
            2: "America",
            3: "Japan"
        },
        answer: "3"
    },
    {
        question: "What was the first commercially successful video game?",
        answers: {
            1: "Tetris",
            2: "Pong",
            3: "Space Invaders"
        },
        answer: "2"
    },
    {
        question: "What is the best selling video game of all time?",
        answers: {
            1: "Call of Duty",
            2: "Fifa",
            3: "Minecraft"
        },
        answer: "3"
    },
    {
        question: "In what game did mario first appear?",
        answers: {
            1: "Donkey Kong",
            2: "Super Mario",
            3: "Mario Kart"
        },
        answer: "1"
    },
    {
        question: "When was the first arcade machine made?",
        answers: {
            1: "1971",
            2: "1985",
            3: "1978"
        },
        answer: "1"
    },
    {
        question: "What is Sonics original home planet called?",
        answers: {
            1: "Earth",
            2: "Emerald Planet",
            3: "Mobius"
        },
        answer: "2"
    },
    {
        question: "What was Pac-Mans original name?",
        answers: {
            1: "Puck-Man",
            2: "Pizza-Man",
            3: "Chomp"
        },
        answer: "1"
    },
    {
        question: "What company developed Space Invaders?",
        answers: {
            1: "Atari",
            2: "Nintendo",
            3: "Taito"
        },
        answer: "3"
    }
    ];

// startGame function will ensure the program is reset and ready to run whenever called //
startGame();

// Compile and display results upon click of Submit button//
submitbtn.addEventListener('click', gameEnd)



