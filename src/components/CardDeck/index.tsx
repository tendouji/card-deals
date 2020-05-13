import {DeckType} from "../../models";
import {cardList, shapeList} from "../../constants/app";

// NOTE: Simple class to generate deck and shuffle the cards

class CardDeck {
    fullDeck:DeckType = new Array<string>(shapeList.length * cardList.length); // assign specific range, 52 cards
    shuffledDeck:DeckType = [];

    constructor() {
        this.fullDeck = []; // let's clear it first

        for(let shape in shapeList) {
            for(let i in cardList) {
                this.fullDeck.push(`${shapeList[shape]}-${cardList[i]}`);
            }
        }
    }

    shuffleDeck():DeckType {
        this.shuffledDeck = Object.assign([], this.fullDeck);

        for (let i = this.shuffledDeck.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [this.shuffledDeck[i], this.shuffledDeck[j]] = [this.shuffledDeck[j], this.shuffledDeck[i]];
        }

        return this.shuffledDeck;
    }
}

export default CardDeck;
