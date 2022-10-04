/////////////////////////////////
//GLOBAL VARIABLES
//const pointsCounter = 0
//let endGame = 0
/////////////////////////////////
//FUNCTION FOR GAME LOGIC

//cited source: Haritha Computers & Technology --https://youtu.be/HQNH2GBYL9k
//this function makes the mole appear & disappear
function outMole(holes) {
  document.getElementById(holes.id).style.visibility = 'visible'
}

const moleArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const outMoles = moleArr[Math.floor(Math.random() * moleArr.length)]

//clicking on the mole to get in the hole
function inMole(holes) {
  if (document.getElementById(holes.id).style.visibility === 'visible') {
    document.getElementById(holes.id).style.visibility = 'hidden'

    setTimeout(() => outMole(holes), 2000)
  }
}

// setTimeout('inMole()', 10000)

////////////////////////////////
//EVENT LISTENERS

//when we click on the mole, it will hide
// document.getElementById('m1').addEventListener('click', inMole)
document.querySelectorAll('.hole').forEach((holes) => {
  holes.addEventListener('click', () => inMole(holes))
})

//start/reset button
// btn.addEventListener('click', resetBoard) //makes reset button work, ready for new game play
