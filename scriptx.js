const quizData = [
    {
        question: 'What is chief minister of Bihar?',
        options: ['Nitish kumar', 'Lallu yadav', 'Tejasvi Yadav', 'Modi'],
        correctAnswer: 'Nitish Kumar'
    },
    {
        question: 'How many supreme court are there in India?',
        options: ['one', 'two', 'three', 'so many'],
        correctAnswer: 'one'
    },
    {
        question: 'Wher is Ram Mandir located?',
        options: ['chennai', 'mumbai', 'ayodhya', 'delhi'],
        correctAnswer: 'ayodhya'
    },
    {
        question: 'How many iits are there in india?',
        options: ['twenty three', 'twenty two', 'twenty one', 'twenty'],
        correctAnswer: 'twenty three'
    },
    {
        question: 'which is cleanest city of india?',
        options: ['indore', 'surat', 'noida', 'both 1 and 2'],
        correctAnswer: 'both 1 and 2'
    },
    {
        question: 'Who is vice president of india?',
        options: ['N. modi', 'rahul gandhi', 'dropdi murmou', 'jagdeep dhankar'],
        correctAnswer: 'jagdeep dhankar'
    },
    {
        question: 'Who painted mona lisa?',
        options: ['leonardo da vinci', 'alexandra fleming', 'william shakespeare', 'so many'],
        correctAnswer: 'leonardo da vinci'
    },
    {
        question: 'In which year titanic sink?',
        options: ['1910', '1912', '1909', '1911'],
        correctAnswer: '1910'
    },
    {
        question: 'currency of japan?',
        options: ['jpy', 'brl', 'euro', 'zar'],
        correctAnswer: 'leonardo da vinci'
    },
    {
        question: 'Which element has chemical smbol H?',
        options: ['Hydrogen', 'Helium', 'Oxygen', 'other'],
        correctAnswer: 'Hydrogen'
    },
    {
        question: 'Who painted mona lisa?',
        options: ['leonardo da vinci', 'alexandra fleming', 'william shakespeare', 'so many'],
        correctAnswer: 'leonardo da vinci'
    },
    {
        question: 'Who is know as father of computer science?',
        options: ['Alan turing', 'mark steve', 'bill gates', 'mark zucku'],
        correctAnswer: 'Alan turing'
    },
    {
        question: 'Who is first pm of india?',
        options: ['Mahatma gandhi', 'J.L. Nehru', 'Subhaschandraa bose', 'Sardar vallahbhai patel'],
        correctAnswer: 'J.L. Nehru'
    },
    {
        question: 'Which festival is known as festival of lights?',
        options: ['Holi', 'Deepawali', 'Rakshabhandhan', 'Christmas'],
        correctAnswer: 'Deepawali'
    },
    {
        question: 'The Taj mahal is located in ..',
        options: ['Mathura', 'Delhi', 'Agra', 'indore'],
        correctAnswer: 'Agra'
    },
    {
        question: 'Who composed national anthem of india?',
        options: ['Bankim chandra chattopadhyay', 'rabindranath tagore', 'sarojini naidu', 'lata mangeshwar'],
        correctAnswer: 'rabindranath tagore'
    },
    {
        question: 'Ajanta caves are located in which Stae of india?',
        options: ['Uttar pradesh', 'Maharashtra', 'Tamil nadu', 'Gujarat'],
        correctAnswer: 'Maharashtra'
    },
    {
        question: 'Pink city of india?',
        options: ['Udaipur', 'Jodhpur', 'kota', 'jaipur'],
        correctAnswer: 'jaipur'
    },
    {
        question: 'First Women pm of india?',
        options: ['Indira Gandhi', 'mamta banerjee', 'sonia gandhi', 'mayawati'],
        correctAnswer: 'Indira Gandhi'
    },
    {
        question: 'Which state is known as the "land of five rivers"? ',
        options: ['Uttar Pradesh', 'Gujarat', 'Kerala', 'Punjab'],
        correctAnswer: 'Punjab'
    },
];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-button');
const scoreContainer = document.getElementById('score');
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `<input type="radio" name="answer" value="${option}">${option}`;
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }

        
        scoreContainer.textContent = `Score: ${score}`;
    }
}


function showResult() {
    questionContainer.textContent = 'Quiz Completed!';
    optionsContainer.innerHTML = '';
    submitButton.style.display = 'none';
    scoreContainer.textContent = `Score: ${score}`;
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);
