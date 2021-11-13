const cards= document.querySelectorAll(".card");
const scoreNumber = document.querySelector(".scoreNumber");
const attemptsNumber = document.querySelector(".attemptsNumber");

var isFlipped = false;
var firstCard;
var secondCard;
var score = 0;
var attempts = 0;


cards.forEach((card) => card.addEventListener("click", flip));
cards.forEach((card) => card.addEventListener("click", flip));

// TO FLIP A CARD
function flip() {

    this.classList.add("flip");

    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
    }
    else{
        secondCard = this;

        console.log(firstCard);
        console.log(secondCard);
        checkcard();
    }
}

// TO CHECK IF THE CARDS MATCH
function checkcard() {

    setTimeout(() => {
        attemptsNumber.innerText = ++attempts;
    },500);

    if(firstCard.dataset.image === secondCard.dataset.image){
        success();
    }
    else{
        fail();
    }
}

// REMOVE LISTENER FROM CARD AFTER A SUCCESS 
function success() {

    setTimeout(() => {
        scoreNumber.innerText = ++score;
    },500);
    
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);

    resetCard();
}

// FLIP THE CARD TO ITS ORIGINAL POSITON AFTER A FAIL
function fail() {

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetCard();
    },1000);
}

// TO RESET THE CARD AFTER A FAIL
function resetCard() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}

// TO DULL THE CARD AFTER SUCCESS
function dullCard(){

}

// TO SHUFFLE THE CARDS
(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random()*16);
        card.style.order = index;
    });
})();