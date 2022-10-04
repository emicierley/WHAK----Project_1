/////////////////////////////////
//GLOBAL VARIABLES
//const pointsCounter = 0
//let endGame = 0
/////////////////////////////////
//FUNCTION FOR GAME LOGIC

//cited source: Haritha Computers & Technology --https://youtu.be/HQNH2GBYL9k
//this function makes the mole appear & disappear
function outMole() {
  document.getElementById('m1').style.visibility = 'visible'
}
//clicking on the mole to get in the hole
function inMole(h) {
  console.log(h)
  console.log(h.path[0].id)
  if (document.getElementById(h.path[0].id).style.visibility === 'visible')
    document.getElementById(h.path[0].id).style.visibility = 'hidden'
}
setTimeout('outMole()', 2000)
setTimeout('inMole()', 10000)

////////////////////////////////
//EVENT LISTENERS

//when we click on the mole, it will hide
// document.getElementById('m1').addEventListener('click', inMole)
document.querySelectorAll('.hole').forEach((h) => {
  h.addEventListener('click', inMole)
})

//start/reset button
// btn.addEventListener('click', resetBoard) //makes reset button work, ready for new game play
