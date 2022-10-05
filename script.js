/////////////////////////////////
//GLOBAL VARIABLES
let scoreBoard = 0
const randomHoles = document.querySelectorAll('.hole')
let gameOn = false
/////////////////////////////////

//FUNCTION FOR GAME LOGIC

//cited source: Haritha Computers & Technology --https://youtu.be/HQNH2GBYL9k
// Moles are out of holes, set with a parameter to go into the hole
function outMole(holes) {
  document.getElementById(holes.id).style.visibility = 'visible'
}
// Clickable moles to get into the hole when game is on
function inMole(holes) {
  if (gameOn) {
    if (document.getElementById(holes.id).style.visibility === 'visible') {
      document.getElementById(holes.id).style.visibility = 'hidden'
      scoreBoard++
      console.log(scoreBoard)
      setTimeout(() => outMole(holes), 2000)
    }
  }
}
//start game and set game play timer
function gamePlay() {
  gameOn = true
  console.log('the game is starts')
  scoreBoard = 0

  // for (let i = 0; i < 10; i++) {
  //   setTimeout(() => {
  //     let randomMole = randomHoles[Math.floor(Math.random() * 9)]
  //     console.log(randomMole)
  //   }, 1000)
  // }
  setTimeout(() => {
    gameOn = false
    console.log('the game is now overrrrrr')
  }, 15000)
}

////////////////////////////////
//EVENT LISTENERS

//when we click on the mole, it will hide
// document.getElementById('m1').addEventListener('click', inMole)
document.querySelectorAll('.hole').forEach((holes) => {
  holes.addEventListener('click', () => inMole(holes))
})

//start/reset button
btn.addEventListener('click', gamePlay)
