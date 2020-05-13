/**
 * NOTE:
 * As this project runs with typescript,
 * this is where I store all my custom type / interface
 */


export type GeneralObjType = {
    [key: string]: any,
}

export type DeckType = string[]

export interface PlayerType {
    name: string;
    deckOnHand: DeckType;
}

export interface ModalType {
    title: string;
    message: string;
    isShown: boolean;
}
