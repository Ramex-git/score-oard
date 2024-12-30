let sHome = 0
let sGuest = 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

function add1Home () {
    sHome += 1
    scoreHome.textContent = sHome
}
function add2Home () {
    sHome += 2
    scoreHome.textContent = sHome
}
function add3Home () {
    sHome += 3
    scoreHome.textContent = sHome
}
function add1Guest () {
    sGuest += 1
    scoreGuest.textContent = sGuest
}
function add2Guest () {
    sGuest += 2
    scoreGuest.textContent = sGuest
}
function add3Guest () {
    sGuest += 3
    scoreGuest.textContent = sGuest
    }