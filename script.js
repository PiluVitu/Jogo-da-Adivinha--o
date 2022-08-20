const firstScreen = document.querySelector('.questionBox')
const secondScreen = document.querySelector('.answerBox')
const tryBtn = document.querySelector('#tryBtn')
const resetBtn = document.querySelector('#resetBtn')
let attemptsMark = document.querySelector('#attemptsMarks')
let inputNumber = document.querySelector('#inputNumber')
let xAttempts = 1
let randomNumber = Math.round(Math.random() * 10)

tryBtn.addEventListener('click', handleTryClick)
resetBtn.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

function handleTryClick(event) {
  event.preventDefault() //Não faça o Padrão
  validateInputNumber()
  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  showHideScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function showHideScreen() {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
}

function enterReset(e) {
  if (e.key == 'Enter' && firstScreen.classList.contains('hide')) {
    handleResetClick()
  }
}

function validateInputNumber() {
  if (
    Number(inputNumber.value) === randomNumber &&
    !firstScreen.classList.contains('hide')
  ) {
    showHideScreen()
    attemptsMark.innerText = `Acertou em ${xAttempts} tentativas`
  } else if (inputNumber.value === '') {
    alert('Insira um número válido')
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert('Digite um numero dentro do escopo definido ')
  } else if (Number(inputNumber.value) != randomNumber) {
    alert('Você errou, tente novamente')
  }
}

