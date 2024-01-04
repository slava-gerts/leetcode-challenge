import {tasks} from './utils/getTasks.js'

const selectTask = document.getElementById('select-task')
const executeTaskButton = document.getElementById('execute-task')
const displaySolutionButton = document.getElementById('display-solution')
const resultCode = document.getElementById('result')
const solutionCode = document.getElementById('solution-code')
const solutionSection = document.getElementById('solution-section')

for (let name of tasks.keys()) {
  const opt = document.createElement('option')
  opt.value = name
  opt.innerHTML = name
  selectTask.appendChild(opt)
}

executeTaskButton.onclick = function() {
  const task = tasks.get(selectTask.value)
  if (!task) {
    resultCode.innerHTML = 'Unknown function was selected.'
    return
  }

  const result = task.func(...task.args)

  resultCode.innerHTML = JSON.stringify(result, null, 2)
}

function hideSolution() {
  solutionSection.style.display = 'none'
  displaySolutionButton.innerText = 'Display solution'
}

function displaySolution(hideLabel) {
  const task = tasks.get(selectTask.value)
  if (!task) return

  solutionSection.style.display = 'block'
  displaySolutionButton.innerText = hideLabel
  solutionCode.innerHTML = task.func
}

displaySolutionButton.onclick = function() {
  const hideLabel = 'Hide solution'
  if (displaySolutionButton.innerText === hideLabel) {
    hideSolution()
  } else {
    displaySolution(hideLabel)
  }
}

selectTask.onchange = function() {
  resultCode.innerHTML = ''
  hideSolution()
}