import {ModalType} from "../models";
import React from "react";

const shapeList:string[] = ['S', 'H', 'C', 'D'];
const cardList:string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'X', 'J', 'Q', 'K'];

const defaultToggleState: boolean = true;
const defaultModalState:ModalType = {
    title: '',
    message: '',
    isShown: false,
};

const text = {
    createPlayer: 'Create',
    phraseEnterPlayerCount: 'Enter player count',
    phraseNoCards: 'No cards available for this user.',
    phraseNoPlayers: 'Enter amount of players to begin.',

    modalPlayerTitle: `Player Count`,
    modalPlayerInvalidMessage: 'Player count is invalid or empty!',
    modalPlayerLessThan1Message: 'Player count cannot be less than 1!',
};

export {
    shapeList,
    cardList,

    defaultToggleState,
    defaultModalState,

    text,
}