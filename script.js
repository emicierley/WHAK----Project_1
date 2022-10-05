/////////////////////////////////
//GLOBAL VARIABLES
//const scoreBoard = 0
const randomHoles = document.querySelectorAll('.hole')
let gameOn = false
/////////////////////////////////

//FUNCTION FOR GAME LOGIC

//cited source: Haritha Computers & Technology --https://youtu.be/HQNH2GBYL9k
// Moles are out of holes, set with a parameter to go into the hole
function outMole(holes) {
  document.getElementById(holes.id).style.visibility = 'visible'
}
// Clickable moles to get into the hole
function inMole(holes) {
  if (document.getElementById(holes.id).style.visibility === 'visible') {
    document.getElementById(holes.id).style.visibility = 'hidden'
    //Clickable mole, generates random id
    let randomMoles = randomHoles[Math.floor(Math.random() * 9)]
    console.log(randomMoles)
    setTimeout(() => outMole(holes), 2000)
  }
}

//Moles pop-up function when game begins
if (gameOn) {
  console.log('the game is on')
}

// setTimeout(inMole(holes), 2000)

////////////////////////////////
//EVENT LISTENERS

//when we click on the mole, it will hide
// document.getElementById('m1').addEventListener('click', inMole)
document.querySelectorAll('.hole').forEach((holes) => {
  holes.addEventListener('click', () => inMole(holes))
})

//start/reset button
// btn.addEventListener('click', () => {
//   gameOn = true
//   console.log('button on')
// })

// variable.forEach(var => var.addEventListener('click', bonk));
