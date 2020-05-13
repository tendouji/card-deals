import React from "react";
import styled from "styled-components";
import {Card_S, Card_H, Card_C, Card_D} from "../../assets";
import {colors, elementSizes} from "../../constants/layout";


type PlayerDisplayProps = {
    cardType: string,
}

const Card: React.FC<PlayerDisplayProps> = ({cardType}) => {
    const getShape = (): string => 'shape-' + cardType.charAt(0).toLowerCase();

    const getNumber = (): string => cardType.charAt(cardType.length - 1);

    return (
        <CardWrapper className={`card ${getShape()}`}>
            <div className="num">{getNumber()}</div>
            <div className="shape" />
        </CardWrapper>
    );
};

export default Card;


const CardWrapper = styled.div`
    border: 1px solid ${colors.Gray};
    height: ${elementSizes.CardHeight};
    width: ${elementSizes.CardWidth};
    background: ${colors.White};
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .num {
        width: calc(${elementSizes.CardWidth} /2);
        font-size: calc(${elementSizes.CardWidth} /2);
        line-height: calc(${elementSizes.CardWidth} /2);
        text-align: center;
        font-weight: 600;
    }
    
    & .shape {
        height: calc(${elementSizes.CardWidth} * 0.65);
        background: center / contain no-repeat;
    }
    
    &.shape-s {
        & .shape {
            background-image: url(${Card_S});
        }
    }
    
    &.shape-h {
        color: ${colors.Red};
        
        & .shape {
            background-image: url(${Card_H});
        }  
    }
    
    &.shape-c {
        & .shape {
            background-image: url(${Card_C});
        }   
    }
    
    
    &.shape-d {
        color: ${colors.Red};
        
        & .shape {
            background-image: url(${Card_D});
        }    
    }
`;