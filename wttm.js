let moondeck = [
    [1, "E"],
    [1, "R"],

    [2, "P"],
    [2, "R"],

    [3, "A"],
    [3, "C"],
    [3, "W"],

    [4, "A"],
    [4, "C"],
    [4, "E"],
    [4, "P"],

    [5, "E"],
    [5, "E"],
    [5, "P"],
    [5, "R"],
    [5, "R"],

    [6, "A"],
    [6, "C"],
    [6, "E"],
    [6, "P"],
    [6, "R"],
    [6, "W"],

    [7, "E"],
    [7, "E"],
    [7, "P"],
    [7, "P"],
    [7, "R"],
    [7, "W"],

    [8, "A"],
    [8, "C"],
    [8, "P"],
    [8, "P"],
    [8, "R"],
    [8, "R"],
    [8, "W"],

    [9, "E"], 
    [9, "E"],
    [9, "P"],
    [9, "P"],
    [9, "R"],
    [9, "W"],

    [10, "A"],
    [10, "C"],
    [10, "E"],
    [10, "P"],
    [10, "R"],
    [10, "W"],

    [11, "E"],
    [11, "E"],
    [11, "P"],
    [11, "R"],
    [11, "R"],

    [12, "A"],
    [12, "C"],
    [12, "E"],
    [12, "P"],

    [13, "A"],
    [13, "C"],
    [13, "W"],

    [14, "P"],
    [14, "R"],

    [15, "E"],
    [15, "R"]

]

class Deck {
    constructor(deck) {
        this.deck = deck
        this.drawpile = this.deck.slice()
        this.discardpile = []
    }

    shuffle() {
        console.log(this)
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        this.drawpile = this.deck.slice()
        this.discardpile = []

        return this;
    
    }

    draw() {
        this.discardpile.push(this.drawpile.pop())
    }
}



function nextcards() {
  const btn = document.getElementById("btnNext")
  const snd = document.getElementById("sndClick")
  
  snd.play();

  btn.disabled = true;
  setTimeout(()=>{
    btn.disabled = false;
    //console.log('Button Activated')
    }, 500)

    // tx = Number
    // px = Preview
    // ix = Image

    // card = topmost card -> Number (t), Preview (p)
    // nextCard = image (i)


    cardsOnPile = thirdCards[0].drawpile.length
    cardsOnDiscardPile = thirdCards[0].discardpile.length

    document.getElementById("LastCards").innerHTML = ("Noch " + cardsOnPile + " Karten ")

    console.log( thirdCards[0].drawpile.length , 'cards on pile ')

    if (cardsOnPile === 21) {
        console.log("21")
        for (i = 0; i < 3; i++) {
            
            drawcard = thirdCards[i].drawpile[cardsOnPile - 1]
    
            tag = "t" + (i + 1)
            document.getElementById(tag).innerHTML = drawcard[0]

            tag = "p" + (i + 1)
            fn = "./img/" + drawcard[1] + ".png"
            document.getElementById(tag).src = fn
            
            tag = "i" + (i + 1)
            fn = "./img/X.png"
            document.getElementById(tag).src = fn

            thirdCards[i].draw()
        }
    } else if (cardsOnPile > 1) {
        console.log("2-20")

        for (i = 0; i < 3; i++) {



            drawcard = thirdCards[i].drawpile[cardsOnPile - 1]
            discardcard = thirdCards[i].discardpile[cardsOnDiscardPile - 1] === undefined ? [0, 'X'] : thirdCards[i].discardpile[cardsOnDiscardPile - 1]
    
            tag = "t" + (i + 1)
            document.getElementById(tag).innerHTML = drawcard[0]

            tag = "i" + (i + 1)
            fn = "./img/" + discardcard[1] + ".png"
            document.getElementById(tag).src = fn

            tag = "p" + (i + 1)
            fn = "./img/" + drawcard[1] + ".png"
            document.getElementById(tag).src = fn

            thirdCards[i].draw()

        }
    }
    else {
        console.log( 'Only 1 Card on Pile')
        for (i = 0; i < 3; i++) {
            discardcard = thirdCards[i].discardpile[cardsOnDiscardPile - 1] === undefined ? [0, 'X'] : thirdCards[i].discardpile[cardsOnDiscardPile - 1]


            tag = "t" + (i + 1)
            document.getElementById(tag).innerHTML = "&nbsp;"
    
            tag = "p" + (i + 1)
            fn = "./img/X.png"
            document.getElementById(tag).src = fn
            
            tag = "i" + (i + 1)
            fn = "./img/" + discardcard[1] + ".png"
            document.getElementById(tag).src = fn
        }
        
    }



    
    if (cardsOnDiscardPile > 1) {
        lastcardstext = "Letzte Karten: "
        for (i=0; i<3; i++) {
            lastcardstext += thirdCards[i].discardpile[cardsOnDiscardPile-1][0] + " " + thirdCards[i].discardpile[cardsOnDiscardPile-2][1] + " "
            
        }
        document.getElementById("LastCards").innerText += " / " + lastcardstext
        console.log(lastcardstext)
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
    for (i = 0; i < 3; i++) {
        thirdCards[i].shuffle()
    }
    nextcards()
}


// Sort Setup Deck
// moondeck.sort()

// console.log(moondeck)
let allCards = new Deck(moondeck)
let thirdCards = []

function freshStart() {
    thirdCards = []
    allCards.shuffle()
    let idx

    for (idx = 0; idx < 3; idx++) {
        thirdCards.push(new Deck(allCards.deck.slice(21 * idx, 21 * idx + 21)))
    }
    nextcards()
}

freshStart()




