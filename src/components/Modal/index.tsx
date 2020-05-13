import React from "react";
import styled from "styled-components";
import {
    elementSizes,
    gaps,
    colors,
    fontSizes
} from "../../constants/layout";
import {CloseIcon} from "../../assets";


type ModalProps = {
    isShown: boolean
    message: string,
    title?: string,
    onClose?: () => void,
}

const Modal: React.FC<ModalProps> = ({isShown, message, title = 'Error', onClose}) => {
    const onCloseHandler = () => {
        if(!!onClose) onClose();
    };

    return ( !!isShown ? (
        <ModalWrapper className="modal-display">
            <div className="float-panel">
                <div className="header">
                    <div className="title">{title}</div>
                    <div className="close-button">
                        <button onClick={onCloseHandler} />
                    </div>
                </div>
                <div className="content">{message}</div>
            </div>
        </ModalWrapper>
    ) : null);
};

export default Modal;


const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .float-panel {
        width: calc(100% - 2 * ${gaps.Common});
        max-width: ${elementSizes.ModalMaxWidth};
        border: 1px solid ${colors.GrayLight};        
        
        & .header {
            display: flex;
            height: ${elementSizes.ModalTitleHeight};
            line-height: ${elementSizes.ModalTitleHeight};
            border-bottom: 1px solid ${colors.GrayLight};
            
            & .title {
                height: 100%;
                width: calc(100% - ${elementSizes.ModalTitleHeight});
                padding: 0 ${gaps.Common};
                font-weight: 500;
                font-size: ${fontSizes.Large};
                box-sizing: border-box;
                border-right: 1px solid ${colors.GrayLight};
            }
            
            & .close-button { 
                height: 100%;
                width: ${elementSizes.ModalTitleHeight};
                background-color: ${colors.GrayLighter};
                
                & > button {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    border: 0;
                    font-size: 3rem;
                    background: transparent url(${CloseIcon}) center / 45% no-repeat;
                }
            }
        }
        
        & .content {
            padding: ${gaps.Common};
            text-align: center;
        }
    }
`;