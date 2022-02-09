let moondeck = [
    [5, "E"],
    [9,  "E"],
    [5, "P"],
    [3, "C"],
    [11, "P"],
    [13, "C"],
    [6, "R"],
    [10, "C"],
    [6, "A"],
    [9, "P"],
    [7, "P"],
    [6, "P"],
    [12, "E"],
    [10, "E"],
    [8, "W"],
    [3, "A"],
    [6, "E"],
    [8, "C"],
    [2, "P"],
    [7, "R"],
    [11, "E"],
    [8, "R"],
    [5, "R"],
    [7, "E"],
    [11, "E"],
    [9, "W"],
    [8, "P"],
    [10, "R"],
    [9, "R"],
    [14, "P"],
    [2, "R"],
    [7, "W"],
    [7, "E"],
    [6, "C"],
    [4, "C"],
    [4, "P"],
    [1, "R"],
    [12, "A"],
    [13, "A"],
    [8, "A"],
    [12, "P"],
    [10, "W"],
    [10, "A"],
    [11, "R"],
    [5, "R"],
    [12, "C"],
    [9, "P"],
    [7, "P"],
    [3, "W"],
    [10, "P"],
    [15, "R"],
    [4, "E"],
    [9, "E"],
    [15, "E"],
    [8, "P"],
    [8, "R"],
    [5, "E"],
    [11, "R"],
    [13, "W"],
    [14, "R"],
    [6, "W"],
    [1, "E"],
    [4, "A"],
]

class Deck {
    constructor(deck) {
        this.deck = deck
        this.drawpile = this.deck.slice()
        this.discardpile = []
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        
        this.drawpile=this.deck
        this.discardpile = []

        return this;
      }

    draw() {
        this.discardpile.push(this.drawpile.pop())
    }
}

function nextcards() {
    cardsOnPile = thirdCards[0].drawpile.length
    
    for (i=0;i<3;i++) {
        card = thirdCards[i].drawpile[cardsOnPile-1]    
        nextCard = thirdCards[i].drawpile[cardsOnPile-2] === undefined ? [0, 'X'] : thirdCards[i].drawpile[cardsOnPile-2]
        thirdCards[i].draw()
        
        let tag = "t" + (i+1)
        document.getElementById(tag).innerHTML = card[0] //+ "<span><img width='30' height='30' src='./img/"+ nextCard[1]+".png' class='preview'></span>"

        tag = "i" + (i+1)
        fn = "./img/" + card[1] + ".png"
        document.getElementById(tag).src = fn

        tag = "p" + (i+1)
        fn = "./img/" + nextCard[1] + ".png"
        document.getElementById(tag).src = fn
    }
}
    /*
    card1 = thirdCards[0].drawpile[cardsOnPile-1]
 
    console.log(card1)
    console.log(nextCard1)
    thirdCards[0].draw()

    document.getElementById("t1").innerHTML = card1[0] + "<span><img width='30' height='30' src='./img/"+ nextCard1[1]+".png' class='preview'></span>"
    //document.getElementById("t2").innerHTML = card2[0] + "<span><img width='30' height='30' src='./img/"+ nc2[1]+".png' class='preview'></span>"
    //document.getElementById("t3").innerHTML = card3[0] + "<span><img width='30' height='30' src='./img/"+ nc3[1]+".png' class='preview'></span>"
    
    fn1 = "../img/" + card1[1] + ".png"
    //fn2 = "../img/" + card2[1] + ".png"
    //fn3 = "../img/" + card3[1] + ".png"
    
    document.getElementById("i1").src = fn1
    //document.getElementById("i2").src = fn2
    //document.getElementById("i3").src = fn3
}
*/

function shuffledeck() {
    for (i=0;i<3;i++) {
        thirdCards[i].shuffle()

    }
}


// Sort Setup Deck
// moondeck.sort()

let allCards = new Deck( moondeck )

// Shuffle all 63 Cards
allCards.shuffle()

let thirdCards = []
let idx

for (idx=0; idx<3; idx++) {
    thirdCards.push( new Deck(allCards.deck.slice(21*idx,21*idx+21)) )
} 



