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
document.addEventListener('keydown',enterReset)

function handleTryClick(event) {
  event.preventDefault() //Não faça o Padrão

  if (Number(inputNumber.value) === randomNumber) {
    showHideScreen()
    attemptsMark.innerText = `Acertou em ${xAttempts} tentativas`
  }else{
    alert('Você errou, tente novamente')
  }
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
function enterReset(e){
    if ((e.key == 'Enter') && (firstScreen.classList.contains('hide'))) {
      handleResetClick()
    }
    }
