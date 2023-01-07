const result = document.querySelector("#result")
const menuBtn = document.querySelector(".menu-container")
const input1 = document.querySelector("#player1")
const input2 = document.querySelector("#player2")
const playerName1 = document.querySelector("#player-name1")
const playerName2 = document.querySelector("#player-name2")
const dice1 = document.querySelector(".dice1")
const dice2 = document.querySelector(".dice2")

const rules = [
    [0,0,0,0,1,0,0,0,0],
    [1,0,0,0,0,0,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [1,0,1,0,0,0,1,0,1],
    [1,0,1,0,1,0,1,0,1],
    [1,0,1,1,0,1,1,0,1]
]

function addGlobalEventListener (type, selector, callback) {
    document.addEventListener(type, (event) => {
        if (event.target.matches(selector)) {
            callback(event)
        }
    })
}

addGlobalEventListener("click", ".menu-btn", () => menuBtn.style.display = "flex")
addGlobalEventListener("click", ".cancel-btn", closeMenuHandler)
addGlobalEventListener("click", ".submit-btn", submitHandler)
addGlobalEventListener("click", ".roll-btn", rollHandler)



function closeMenuHandler () {
    menuBtn.style.display = "none"
}

function submitHandler () {
    input1.value ? playerName1.textContent = input1.value : playerName1.textContent = "player 1"
    input2.value ? playerName2.textContent = input2.value : playerName2.textContent = "player 2"

    input1.value = ""
    input2.value = ""

    closeMenuHandler()
}

function rollHandler () {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1

    const dotsArray1 = [...dice1.children]
    const dotsArray2 = [...dice2.children]

    dotsArray1.forEach((element, index) => {
        if (rules[randomNumber1 - 1][index]) {
            element.style.opacity = "1"
        } else {
            element.style.opacity = "0"
        }
    });

    dotsArray2.forEach((element, index) => {
        if (rules[randomNumber2 - 1][index]) {
            element.style.opacity = "1"
        } else {
            element.style.opacity = "0"
        }
    });


    if (randomNumber1 > randomNumber2) {
        result.textContent = `${playerName1.textContent} wins`
    } else if (randomNumber1 < randomNumber2) { 
        result.textContent = `${playerName2.textContent} wins`
    } else {
        result.textContent = "Draw"
    }
}