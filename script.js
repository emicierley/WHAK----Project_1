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
// Moles are clickable, when game is on they can get into the hole
function inMole(holes) {
  if (gameOn) {
    if (document.getElementById(holes.id).style.visibility === 'visible') {
      document.getElementById(holes.id).style.visibility = 'hidden'
      scoreBoard++
      console.log(scoreBoard)
      //tells moles to pop out of holes every x milli-seconds
      setTimeout(() => outMole(holes), 2000)
    }
  }
}
//start & set game play timer
function gamePlay() {
  gameOn = true
  console.log('the game is starts')
  scoreBoard = 0
  //TODO unfinished mole-- get moles to pop up
  for (let i = 0; i < randomHoles.length; i++) {
    document.getElementById(randomHoles[i].id).style.visibility = 'hidden'
    setTimeout(() => {
      let randomMole = randomHoles[Math.floor(Math.random() * 9)]
      outMole(randomMole)
    }, 2000)
  }
  //tells moles game is over after x milli-seconds
  setTimeout(() => {
    gameOn = false
    console.log('the game is now over')
  }, 15000)
}

////////////////////////////////
//EVENT LISTENERS

//click on the mole, it will go into hole
// document.getElementById('m1').addEventListener('click', inMole)
document.querySelectorAll('.hole').forEach((holes) => {
  holes.addEventListener('click', () => inMole(holes))
})
//start/reset button
btn.addEventListener('click', gamePlay)
