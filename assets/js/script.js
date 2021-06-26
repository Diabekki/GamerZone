/*jshint esversion: 6 */
//Set up variable declerations//
const POINTS = 1000;
const QUESTION_LIMIT = 10;
const scoreNum = document.getElementsByClassName('score');
const quizZone = document.getElementsByClassName('quiz-zone');
const questions = document.getElementsByClassName('.questions');
const options = Array.from(document.querySelectorAll('answers'));
const quizBarFull = document.getElementsByClassName('quiz-bar-full');

//Set up 'let' variables//
let score = 0;
let qCounter = 0;
let currentQ = {};
let remainingQ = [];
let correctAnswers = true;

//Game set up//
startGame = () => {
    score = 0;
    qCounter = 0;
    remainingQ = [...questions];
    nextQ();
};

//Question selection//
nextQ = () => {
    if(remainingQ.length ===0 || qCounter > QUESTION_LIMIT) {
        localStorage.setItem('newScore', score);

        return window.location.assign('/leaderboard.html');
    }
    qCounter++;
    quizZone.innertext = `Question ${qCounter} of ${QUESTION_LIMIT}`;
    quizBarFull.style.width = `${(qCounter/QUESTION_LIMIT) * 100}%`;

    const qIndex = Math.floor(Math.random() * remainingQ.length);
    currentQ = remainingQ[qIndex];
    question.innertext = currentQ.question;

    options.forEach(Option => {
        const num = Option.dataset['num'];
        Option.innertext = currentQ['option' + num];
    });

    remainingQ.splice(qIndex, 1);

    correctAnswers = true;
    
};

options.forEach(Option => {
    Option.addEventListener('click', e => {
        if(!correctAnswers) return;

        const ansClicked = e.target;
        const ansSelect = ansClicked.dataset['num'];
        correctAnswers = false;
        let rightWrong = ansSelect == currentQ.answer ? 'right' : 'wrong';

        if(rightWrong === 'right') {
            incrementScore(POINTS);
        }
        ansClicked.parentElement.classList.add(rightWrong);

        setTimeout(() => {
            ansClicked.parentElement.classList.remove(rightWrong);
            nextQ();
        }, 1000);
    
    });
});
          
incrementScore = num => {
    score +=num;
    scoreText.innertext = score;
};

//question array, including answers and correct answers//
let questions = [
    {
        question: '1.When did Super Mario release?',
        option1: '1990',
        option2: '1985',
        option3: '1978',
        answer: 2,
    },
    {
        question: '2.Who is Luigis girlfriend?',
        option1: 'Princess Peach',
        option2: 'Princess Daisy',
        option3: 'Rosalina',
        answer: 2,
    },
    {
        question: '3.What country was tetris 64 only released in?',
        option1: 'Russia',
        option2: 'America',
        option3: 'Japan',
        answer: 3,
    },
    {
        question: '4.What was the first commercially successful video game?',
        option1: 'Tetris',
        option2: 'Pong',
        option3: 'Space Invaders',
        answer: 2,
    },
    {
        question: '5.What is the best selling video game of all time?',
        option1: 'Call of Duty',
        option2: 'Fifa',
        option3: 'Minecraft',
        answer: 3,
    },
    {
        question: '6.In what game did mario first appear?',
        option1: 'Donkey Kong',
        option2: 'Super Mario',
        option3: 'Mario Kart',
        answer: 1,
    },
    {
        question: '7.When was the first arcade machine made?',
        option1: '1971',
        option2: '1985',
        option3: '1978',
        answer: 1,
    },
    {
        question: '8.What is Sonics original home planet called?',
        option1: 'Earth',
        option2: 'Emerald Planet',
        option3: 'Mobius',
        answer: 2,
    },
    {
        question: '9.What was Pac-Mans original name?',
        option1: 'Puck-Man',
        option2: 'Pizza-Man',
        option3: 'Chomp',
        answer: 1,
    },
    {
        question: '10.What company developed Space Invaders?',
        option1: 'Atari',
        option2: 'Nintendo',
        option3: 'Taito',
        answer: 3,
    }

];
