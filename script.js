/////////////////////////////////
//GLOBAL VARIABLES

let scoreBoard = 0
const randomHoles = document.querySelectorAll('.hole')
let gameOn = false
const clickAudio = new Audio('Click.mp3')
/////////////////////////////////
//FUNCTION FOR GAME LOGIC

//cited source: Haritha Computers & Technology --https://youtu.be/HQNH2GBYL9k
// Moles are out of holes, set with a parameter to go into the hole
function outMole(hole) {
  document.getElementById(hole.id).style.visibility = 'visible'
  //generating a random number between the two values (min&max) making a range
  let randomNumber = Math.random() * (3000 - 1000) + 1000
  //tells moles to pop IN hole every x milli-seconds
  setTimeout(() => inMole(hole), randomNumber)
}
// Moles are clickable, when game is on they can get into the hole
function inMole(hole) {
  if (gameOn) {
    if (document.getElementById(hole.id).style.visibility === 'visible') {
      document.getElementById(hole.id).style.visibility = 'hidden'
      // generates random values(both decimals and whole numbers)
      let randomNumber = Math.random() * (6000 - 4000) + 1000
      //tells moles to pop OUT of hole every x milli-seconds
      setTimeout(() => outMole(hole), randomNumber)
    }
  }
}
//When
function gamePlay() {
  gameOn = true
  console.log('the game is starts')
  scoreBoard = 0
  //hides moles and they each pop-up @ different times
  for (let i = 0; i < randomHoles.length; i++) {
    document.getElementById(randomHoles[i].id).style.visibility = 'hidden'
    let randomNumber = Math.random() * (3000 - 1000) + 1000
    setTimeout(() => {
      outMole(randomHoles[i])
    }, randomNumber)
  }
  //tells moles game is over after x milli-seconds
  setTimeout(() => {
    gameOn = false
    console.log('the game is now over')
  }, 25000)
}

////////////////////////////////
//EVENT LISTENERS

//click on the mole, it will go into hole
document.querySelectorAll('.hole').forEach((hole) => {
  hole.addEventListener('click', () => {
    inMole(hole)
    if (gameOn) {
      scoreBoard++
      document.getElementById('point-total').innerText = scoreBoard

      //source cited: https://stackoverflow.com/questions/9419263/how-to-play-audio
      clickAudio.play()
      console.log(scoreBoard)
    }
  })
})

//start/reset button
playbtn.addEventListener('click', gamePlay)

const resetBoard = () => {
  document.querySelectorAll(outMole).forEach((randomMole) => {
    gameOver = false
    console.log(resetBoard)
  })
}
