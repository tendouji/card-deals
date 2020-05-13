import React from 'react';
import styled from 'styled-components';
import CardDeck from './components/CardDeck';

import {DeckType} from "./models";
import Player from "./components/Player";
import PlayerDisplay from "./components/PlayerDisplay";
import {
    colors,
    elementSizes,
    fontSizes,
    gaps
} from "./constants/layout";
import {defaultModalState, defaultToggleState, text} from './constants/app';
import Toggler from "./components/Toggler";
import Modal from "./components/Modal";


const App: React.FC<{}> = () => {
    let cardDeck: CardDeck;
    let newDeck: DeckType;

    const inputPlayerRef: React.RefObject<HTMLInputElement> = React.createRef();
    const withAnimationRef: React.RefObject<HTMLInputElement> = React.createRef();

    const [numOfPlayer, updateNumOfPlayer] = React.useState(0);
    const [playerList, updatePlayerList] = React.useState([] as Player[]);
    const [withVisual, updateWithVisual] = React.useState(defaultToggleState);

    const [modalObj, updateModal] = React.useState(defaultModalState);

    React.useEffect(() => {
        if (numOfPlayer > 0) {
            // NOTE: great let's begin!
            cardDeck = new CardDeck();
            newDeck = cardDeck.shuffleDeck();

            generatePlayerAndDeck();
        }
    }, [numOfPlayer]);

    const onInputHandler = (e: React.MouseEvent | React.TouchEvent) => {
        validateCount();
    };

    const onKeyPressHandler = (e: React.KeyboardEvent) => {
        const code = (e.keyCode ? e.keyCode : e.which);
        if(code === 13) { // NOTE: Enter keycode
            validateCount();
        }
    };

    const validateCount = () => {
        const currentCountStr = inputPlayerRef.current!.value;

        if(currentCountStr === '') {
            updateModal({
                title: text.modalPlayerTitle,
                message: text.modalPlayerInvalidMessage,
                isShown: true
            });
            return;
        }

        const currentCount: number = parseInt(currentCountStr, 10);

        if(currentCount <= 0) {
            updateModal({
                title: text.modalPlayerTitle,
                message: text.modalPlayerLessThan1Message,
                isShown: true
            });
            return;
        }

        updateNumOfPlayer(currentCount);
    };

    const generatePlayerAndDeck = () => {
        updatePlayerList([]); // clear player list first

        // NOTE: let's create player
        let playerList = Array.from({length: numOfPlayer}, (item, key) => {
            return new Player(`Player-${key+1}`);
        });

        // NOTE: distribute card for them
        for (let i = newDeck.length-1; i>=0; i--) {
            playerList[i%numOfPlayer].receiveCard(newDeck[newDeck.length-1]);
            newDeck.pop();
        }
        updatePlayerList(playerList);
    };

    const onChangeHandler = () => {
        updateWithVisual(withAnimationRef.current!.checked);
    };

    const onModalCloseHandler = () => {
        updateModal({
            title: ``,
            message: '',
            isShown: false
        });
    };

    return (<AppWrapper>
        <header><h1>Dealer</h1></header>
        <div className="app-content">
            <div className="input-area">
                <div className="player-input">
                    <input
                        ref={inputPlayerRef}
                        type="number"
                        id="player-count"
                        placeholder={text.phraseEnterPlayerCount}
                        onKeyPress={onKeyPressHandler}
                    />
                    <button id="generatePlayer" onClick={onInputHandler}>{text.createPlayer}</button>
                </div>
                <div className="secondary-input">
                    <Toggler
                        ref={withAnimationRef}
                        id="withAnimation"
                        label={"With visual"}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
            { playerList.length === 0
                ? <div className="no-player">{text.phraseNoPlayers}</div>
                : <PlayerDisplay playerList={playerList} withVisual={withVisual} />
            }

            <Modal {...modalObj} onClose={onModalCloseHandler} />
        </div>

    </AppWrapper>);
};

export default App;


const AppWrapper = styled.div`
    & header {
        height: ${elementSizes.HeaderHeight};
        padding: 0 ${gaps.Common};
        line-height: ${elementSizes.HeaderHeight};
        border-bottom: 1px solid ${colors.GrayLight};
        background-color: ${colors.GrayLighter};
        
        & h1 {
            margin: 0;
            font-size: ${fontSizes.XLarge};
        }
    }
    
    & .app-content {
        & .no-player {
            padding: ${gaps.Common};
            font-size: ${fontSizes.Common};
            text-align: center;
        }
    
        & .input-area {
            display: flex;
            height: ${elementSizes.InputAreaHeight};
            border-bottom: 1px solid ${colors.GrayLight};
            font-size: ${fontSizes.Common};
            
            & .player-input {
                height: ${elementSizes.InputAreaHeight};
                padding: 0 ${gaps.Common};
                border-right: 1px solid ${colors.GrayLight};
                
                & > input {
                    padding: 0;
                    border: 0;
                    width: calc(100% - ${elementSizes.PlayerCountButtonWidth} - ${gaps.Small});
                    margin-right: ${gaps.Small};
                    line-height: ${elementSizes.InputAreaHeight};
                    box-sizing: border-box;
                    text-align: center;
                    font-size: ${fontSizes.Common};
                }
                
                & > button {
                    width: ${elementSizes.PlayerCountButtonWidth};
                    padding: ${gaps.XSmall} ${gaps.Common};
                    border: 0;
                    box-sizing: border-box;
                    background-color: ${colors.Blue};
                    color: ${colors.White};
                    font-weight: 500;
                    font-size: ${fontSizes.Common};
                }
            }
            
            & .secondary-input {
                display: flex;
                height: ${elementSizes.InputAreaHeight};
                padding: 0 ${gaps.Common};
                align-items: center;
            }
            
            @media only screen and (max-width: 400px) {
                display: block;
                height: auto;
                
                & .player-input {
                    border-bottom: 1px solid ${colors.GrayLight};
                    border-right: 0;
                }  
            
                & .secondary-input {
                    justify-content: center;
                }                              
            }
        }
    }
`;