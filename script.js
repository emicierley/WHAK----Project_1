/////////////////////////////////
//GLOBAL VARIABLES
//let endGame= 0
/////////////////////////////////
//FUNCTION FOR GAME LOGIC
// HOW TO DECLARE AN ARROW FUNCTION:
// const functionName = (parameters) => {
//}

//we are accessing the sq. & inside of the sq.
// const square = document.querySelectorAll('.square')
// const mole = document.querySelectorAll('m1')

//cited source: Haritha Computers & Technology --https://youtu.be/HQNH2GBYL9k
//this function makes the mole appear & disappear
function outMole() {
  document.getElementById('m1').style.visibility = 'visible'
}
function inMole() {
  if (document.getElementById('m1').style.visibility === 'visible')
    document.getElementById('m1').style.visibility = 'hidden'
}
// setTimeout('outMole()', 2000)
// setTimeout('inMole()', 10000)

////////////////////////////////
//EVENT LISTENERS

//when we click on the mole, it will hide
document.getElementById('m1').addEventListener('click', inMole)
document.querySelectorAll()

//start/reset button
// btn.addEventListener('click', resetBoard) //makes reset button work, ready for new game play
