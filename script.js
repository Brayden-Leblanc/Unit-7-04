// Turns userInput into a variable
document.getElementById('button').addEventListener('click', age)
let userInput = 0
let day = 0

function age () {
// Get user input from box
  userInput = document.getElementById('input').value
  day = document.getElementById('input2').value

  // Determines what to say based on the day, and the age entered
  if ((day == 'Monday' || day == 'Friday' || day == 'monday' || day == 'friday') || (userInput > 5 && userInput < 21)) {
  document.getElementById('answer').innerHTML = 'You are eligible for a discount!'
} else {
  document.getElementById('answer').innerHTML = 'You must pay regular price. Sorry!'
}
}