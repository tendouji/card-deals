import {DeckType, PlayerType} from "../../models";


// NOTE: Simple class to create player with data

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