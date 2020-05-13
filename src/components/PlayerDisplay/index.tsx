/**
 * NOTE:
 * PlayerDisplay component
 *
 * Container that generate the list and hold the rows of PlayerList
 */


import React from "react";
import styled from "styled-components";
import {PlayerType} from "../../models";

import PlayerList from "../PlayerList";


type PlayerDisplayProps = {
    playerList: PlayerType[],
    withVisual: boolean,
}

const PlayerDisplay: React.FC<PlayerDisplayProps> = ({playerList, withVisual}) => {
    return (
        <PlayerDisplayWrapper className="player-display">
            { playerList.map((item: PlayerType, key: number) => (
                <PlayerList
                    key={key}
                    playerInfo={item}
                    withVisual={withVisual}
                />
            ))}
        </PlayerDisplayWrapper>
    );
};

export default PlayerDisplay;


const PlayerDisplayWrapper = styled.div`
    padding: 0;
`;