/**
 * NOTE:
 * Player class
 *
 * Basic JS class to create player with data
 */


import {DeckType, PlayerType} from "../../models";



class Player implements PlayerType {
    name:string = '';
    deckOnHand:DeckType = [];

    constructor(name:string) {
        this.name = name;
    }

    receiveCard(card:string) {
        this.deckOnHand.push(card);
    }

    clearData() {
        this.name = "";
        this.deckOnHand = [];
    }
}


export default Player;