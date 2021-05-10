'use strict'

const playerOne = document.querySelector('.player-0')
const playerTwo = document.querySelector('.player-1')

const scoreOne = document.getElementById('score-0')
const scoreTwo = document.getElementById('score-1')

const currentOne = document.getElementById('current-0')
const currentTwo = document.getElementById('current-1')

const dice = document.querySelector('.dice')

const btnRoll = document.querySelector('.btn-roll')
const btnHold = document.querySelector('.btn-hold')
const btnNew = document.querySelector('.btn-new')


//scoreOne.textContent = 0
//scoreTwo.textContent = 0

/*const scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true*/

btnRoll.addEventListener('click', rollDice)
btnHold.addEventListener('click', hold)
btnNew.addEventListener('click', newBtn)

let scores, currentScore, activePlayer, playing

function init() {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    dice.classList.add('hidden')

    scoreOne.textContent = 0
    scoreTwo.textContent = 0

    currentOne.textContent = 0
    currentTwo.textContent = 0
   
    playerOne.classList.remove('player-winner')
    playerTwo.classList.remove('player-winner')

    playerOne.classList.add('player-active')
    playerTwo.classList.remove('player-active')
}
init()


function switchPlayer() {
    document.getElementById(`current-${activePlayer}`).textContent = 0 //while making a switch reset active player back to zero
    activePlayer = activePlayer === 0 ? 1 : 0 //logic to switch
    currentScore = 0 //reset switched player back to zero

    playerOne.classList.toggle('player-active')
    playerTwo.classList.toggle('player-active')
}

function rollDice() {
    if(playing) {
    //Logic to generate random dice
        const dices = Math.trunc(Math.random() * 6) + 1;

        //Logic to display dice
        dice.classList.remove('hidden')
        dice.src = `dice-${dices}.png`;

        //Logic to check if 1 is played
        if(dices !== 1) {
            currentScore += dices
            document.getElementById(`current-${activePlayer}`).textContent = currentScore
        } else {
            //Switch players
            switchPlayer()
        }
    }
}

function hold() {
    if(playing) {
        //Logic to add currentScore to totalScore
        scores[activePlayer] += currentScore
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]

        //Logic for scores
        if(scores[activePlayer] >= 100) {
            playing = false
            dice.classList.add('hidden')
            document.querySelector(`.player-${activePlayer}`).classList.add('player-winner')
            document.querySelector(`.player-${activePlayer}`).classList.remove('player-active')
        } else {
            switchPlayer()
        }
    }
}

function newBtn() {
   init()
} 