let homeScoreBtn = document.getElementById("homescore-btn")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0


function increaseBtn1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseBtn2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseBtn3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

    
let guestScoreEl = document.getElementById("guest-score")
let guestScoreBtn = document.getElementById("guestscore-btn")
let guestScore = 0

function increaseBtng1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseBtng2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseBtng3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}