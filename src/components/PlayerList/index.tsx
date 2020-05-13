/**
 * NOTE:
 * PlayerList component
 *
 * Generate the rows of player with name and cards in the display.
 * Depending on the withVisual toggle value, it will display in text format or in visual card view
 */


import React from "react";
import styled from "styled-components";
import {DeckType, PlayerType} from "../../models";
import {colors, elementSizes, fontSizes, gaps} from "../../constants/layout";
import {text} from "../../constants/app";
import Card from "../Card";


type PlayerListProps = {
    playerInfo: PlayerType,
    withVisual: boolean,
}

const PlayerList: React.FC<PlayerListProps> = ({playerInfo, withVisual}) => {
    const generateCardListStr = (deckOnHand: DeckType):string => {
        let cardList: string = '';

        if(deckOnHand.length === 0) {
            cardList = text.phraseNoCards;
        } else {
            deckOnHand.forEach((card) => {
                cardList += card + ', ';
            });
            cardList = cardList.substring(0, cardList.length - 2);
        }

        return cardList;
    };

    const generateCardListElement = (deckOnHand: DeckType):JSX.Element[] => {
        let cards = [];
        if(deckOnHand.length === 0) {
            cards = [<span key={0}>{text.phraseNoCards}</span>];
        } else {
            for (let item in deckOnHand) {
                cards.push(<Card key={item} cardType={`${deckOnHand[item]}`}/>);
            }
        }
        return cards;
    };

    return (
        <PlayerListWrapper className="player-list">
            <div className="player-name">
                {playerInfo.name}
                <div className="card-counter">
                    ({`${playerInfo.deckOnHand.length} card${playerInfo.deckOnHand.length > 1 ? 's' : ''}`})
                </div>
            </div>
            <div className={[
                'player-cards',
                (!!withVisual ? ' with-visual' : '')
            ].join('')}>
                { !!withVisual
                    ? generateCardListElement(playerInfo.deckOnHand)
                    : generateCardListStr(playerInfo.deckOnHand)
                }
            </div>
        </PlayerListWrapper>
    );
};

export default PlayerList;



const PlayerListWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid ${colors.GrayLight};
    
    & .player-name {
        width: ${elementSizes.PlayerNameWidth};
        padding: ${gaps.Common};
        font-weight: 600;
        text-align: center;
        box-sizing: border-box;
        background-color: ${colors.GrayLighter};
        
        & .card-counter {
            font-weight: 300;
            font-size: ${fontSizes.Small};
        }
    }
    
    & .player-cards {
        display: flex;
        width: calc(100% - (${elementSizes.PlayerNameWidth} + ${gaps.Common}));
        padding: ${gaps.Common};
        box-sizing: border-box;
        align-items: center;
        
        &.with-visual {
            display: block;
            
            & .card {
                display: inline-block;
            }
        }
    }
`;