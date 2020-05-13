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
