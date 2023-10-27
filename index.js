const quizes = [
    {
      que: 'What is the Capital of Pakistan?',
      options: ['Karachi', 'Lahore', 'Islamabad', 'Hyderabad'],
      correct: 'Islamabad'
    },
    {
      que: 'What is the National Sport of Pakistan?',
      options: ['Cricket', 'Hockey', 'Tennis', 'football'],
      correct: 'Hockey'
    },
    {
        que: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correct: 'Paris'
    },
    {
        que: 'Which planet is known as the "Red Planet"?',
        options: ['Earth', 'Venus', 'Jupiter','Mars'],
        correct: 'Mars'
    },
    {
        que: 'Who is the author of the famous play "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'F. Scott Fitzgerald'],
        correct: 'William Shakespeare'
    },
    {
        que: 'What is the largest mammal in the world?',
        options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Grizzly Bear'],
        correct: 'Blue Whale'
    },
    {
        que: 'What is the chemical symbol for gold?',
        options: ['Go', 'Ag', 'Ge','Au'],
        correct: 'Au'
    },
    {
        que: 'Which gas do plants absorb from the atmosphere during photosynthesis?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correct: 'Carbon Dioxide'
    },
    {
        que: 'Who is often referred to as the "Father of Modern Physics"?',
        options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Marie Curie'],
        correct: 'Albert Einstein'
    },
    {
        que: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'South Korea', 'Japan', 'Thailand'],
        correct: 'Japan'
    }
  ]
  
  let currentQuestion = 0
  let rightAnswers = 0
  let wrongAnswers = 0
  let userAnswer = undefined
  let timeLeft = 10;
  let timerInterval;


  const quizContainer = document.getElementById('quizContainer')
  const resultContainer = document.getElementById('resultContainer')
  const nextBtn = document.getElementById('next-btn')
  const timerElement = document.getElementById('time')
  const start = document.getElementById('start')
  const startButton = document.getElementById('start');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
  function startTimer() {
    timeLeft = 10;
    timerInterval = setInterval(updateTimer, 1000);
  }
  startTimer()
  
  function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.innerText = `Time Left: ${timeLeft} sec`;
    } else {
      clearInterval(timerInterval);
      wrongAnswers +
      showNextQuestionn();
    }
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
  }
  


  
  const showQuestion = () => {
    quizContainer.innerHTML = null
    let queDiv = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerText = quizes[currentQuestion].que
    h3.className = 'quiz-question'
    queDiv.appendChild(h3)
    quizes[currentQuestion].options.map(data => {
      let optionDiv = document.createElement('div')
      let input = document.createElement('input')
      let span = document.createElement('span')
      input.type = 'radio'
      input.name = 'quiz-option'
      input.value = data
      span.innerText = data
      input.addEventListener('change', function () {
        console.log(this.value)
        userAnswer = this.value
        nextBtn.disabled = false
      })    
      
      optionDiv.appendChild(input)
      optionDiv.appendChild(span)
      optionDiv.className = 'quiz-option'
      queDiv.appendChild(optionDiv)
    })
  
    quizContainer.appendChild(queDiv)
    start.style.display = 'none'

  }
  
  function checkValue () {
    console.log(this)
  }
  
  showQuestion()
  
  nextBtn.addEventListener('click', showNextQuestionn)
  
  function showNextQuestionn () {
    stopTimer();
    startTimer()
    const question = quizes[currentQuestion]
    if (userAnswer === question.correct) {
      rightAnswers++
    } else {
      wrongAnswers++
    }
  
    if (currentQuestion + 1 < quizes.length) {
      currentQuestion++
    } else if (currentQuestion + 1 === quizes.length) {
      resultContainer.style.display = 'block'
      showResult()
      quizContainer.style.display = 'none'
      nextBtn.style.display = 'none'
    }
  
    nextBtn.disabled = true
  
    showQuestion()
  }
  
  function showResult () {
    stopTimer()
    resultContainer.innerHTML = null
    const div = document.createElement('div')
    div.className = 'resultHeadings'
    const h1 = document.createElement('h1')
    h1.innerText = rightAnswers > wrongAnswers ? 'You Win' : 'You Lost'
    const rightH3 = document.createElement('h3')
    rightH3.innerText = 'Right Answers ' + rightAnswers
    const score = document.createElement('h3')
    score.innerText = 'Score ' + rightAnswers * 10
    const wrongH3 = document.createElement('h3')
    wrongH3.innerText = 'Wrong Answers ' + wrongAnswers
  
    div.appendChild(h1)
    div.appendChild(rightH3)
    div.appendChild(score)
    div.appendChild(wrongH3)
  
    resultContainer.appendChild(div)
    start.style.display = 'none'
    time.style.display = 'none'
  }

}
  
  




