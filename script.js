const firstScreen = document.querySelector('.questionBox')
const secondScreen = document.querySelector('.answerBox')
let attemptsMark = document.querySelector('#attemptsMarks')

function handleClick() {
  const randomNumber = Math.round(Math.random() * 10)
  let xAttempts = 1
  const inputNumber = Number(document.querySelector('#inputNumber').value)

  

  if (inputNumber === randomNumber) {
    firstScreen.classList.toggle('hide')
    secondScreen.classList.toggle('hide')
    attemptsMark.innerHTML = `Acertou em ${xAttempts} tentativas`
  }

  console.log(
    'Que é que há velhinho ' + xAttempts + ' e o num é ' + randomNumber
  )
  xAttempts++
}

function playAgainClick() {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
  xAttempts = 1
}
