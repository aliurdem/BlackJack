let hasBlackJack = false
let isAlive = false
let message = ""

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")

let houseSumEl = document.getElementById("houseSum-el")
let houseCardsEl = document.getElementById("houseCards-el")

let player = {
    name: "Ali",
    chips: 200,
}



let playerEl = document.getElementById("player-el")
function updated(){
    playerEl.textContent = player.name+": $"+player.chips
}
updated()


let sum = 0
let cards = []

let houseSum = 0
let houseCards = []

let bet20 = document.getElementById("20bet")
let bet50 = document.getElementById("50bet")
let bet100 = document.getElementById("100bet")
let betP = document.getElementById("betp")

let choice = 0
let bet = 0

function bet2(){
    
    betP.textContent = `You'r bet: $20` 
    secim = 0
    bet = 20
}
function bet5(){
    
    betP.textContent  = `You'r bet: $50` 
    secim = 1
    bet = 50

}
function bet10(){
    
    betP.textContent  = `You'r bet: $100` 
    secim = 2
    bet = 100

}

let won = true


// krediyi güncelleyen fonksyon 
function creditUpdate(){
    if(won){
        player.chips += bet
    }else{
        player.chips -= bet
    }
}

function getRandomCards(){
    let randomCard = Math.floor(Math.random() *13) + 1 
   
    if (randomCard >10){
        randomCard = 11
    }
    if(randomCard === 1){
        randomCard = 11
    }
    return randomCard
}

function startGame(){
    sayac = 0
    hasBlackJack = false
    if(player.chips<bet){
        alert("Your chips not enught for this much bet!")
        return;
    }
    sumEl.textContent = "Sum:"
    cardsEl.textContent = "Cards: "
    cards = []
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)

    houseSumEl.textContent = "Sum:"
    houseCardsEl.textContent = "Cards: "
    houseCards = []
    let houseFirstCard = getRandomCards()
    houseSum = houseFirstCard 
    houseCards.push(houseFirstCard)
    

    isAlive = true

    renderGame()

}

function renderGame() {
    sumEl.textContent = "Sum:"+" "+sum
    // render out All the cards we have

    cardsEl.textContent = "Cards: "
    for (let i =0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }


    houseSumEl.textContent = "Sum:"+" "+houseSum
    // render out All the HOUSE cards we have

    houseCardsEl.textContent = "Cards: "
    for (let i =0;i<houseCards.length;i++){
        houseCardsEl.textContent += houseCards[i]+" "
    }


    if (sum<=20) {
        message = "Do you want to draw a new card? "
    }else if(sum === 21) {
        message = "Wohooo! You've got Blakjack! "
        hasBlackJack = true
        won = true
        creditUpdate()
        updated()
    }else {
        message= "You're out of the game! "
        isAlive = false
        won = false
        creditUpdate()
        updated()
    
    }
    
    messageEl.textContent = message
    

}
let sayac = 0
function pass(){
    // bakacam buraya
    if(isAlive===true){
        message= "You're out of the game! "
        messageEl.textContent = message
        pass

    }
    for(var i = 0;sayac<2;i++){
         addCard = getRandomCards()
         houseSum += addCard
         sayac +=1
         houseCards.push(addCard)
         if(houseSum ===21){
            break;
         }
         else if (houseSum>21){
            break;
         }
         
        
         
     }
    houseCardsEl.textContent = "Cards: "
    for (let i =0;i<houseCards.length;i++){
         houseCardsEl.textContent += houseCards[i]+" "
    }
    houseSumEl.textContent = "Sum:"+" "+houseSum
    if(houseSum === 21 ||(((21-houseSum)<(21-sum))&&houseSum<21)){
        message= "You're out of the game! "
        isAlive = false
        won = false
        creditUpdate()
        updated()

    }else if(houseSum>21){
        message= "Wohooo! You've got Blakjack! "
        hasBlackJack = true
        won = true
        creditUpdate()
        updated()

    }else{
    message= "Wohooo! You've got Blakjack! "
    hasBlackJack = true
    won = true
    creditUpdate()
    updated()

    }
    messageEl.textContent = message

    
    

}


function newCard() {
    if(isAlive &&  hasBlackJack === false) {
    let newCard = getRandomCards()
    sum+=newCard
    cards.push(newCard)
    renderGame()
    }else{
        alert("Your game is done if you want to play another game click the start game button ")
    }

}

function houseNewCard() {
    if(isAlive &&  hasBlackJack === false) {
    let newCard = getRandomCards()
    sum+=newCard
    cards.push(newCard)
    renderGame()
    }else{
        alert("Your game is done if you want to play another game click the start game button ")
    }

}


