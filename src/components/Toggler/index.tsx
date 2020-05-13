import React, {forwardRef} from "react";
import styled from "styled-components";
import {colors, elementSizes} from "../../constants/layout";
import {defaultToggleState} from "../../constants/app";


type TogglerProps = {
    id: string,
    label: string,
    onChange: () => void,
}

type ToggerRef = HTMLInputElement;

const Toggler = forwardRef<ToggerRef, TogglerProps>( ({id, label, onChange}, ref) => {
    const [isChecked, updateIsChecked] = React.useState(defaultToggleState);

    React.useEffect(() => {
        onChange();
    }, [isChecked]);

    const onChangeHandler = () => {
        updateIsChecked(!isChecked);
    };

    return (
        <TogglerWrapper className="toggler">
            <input
                ref={ref}
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={onChangeHandler}
            />
            <span />
            <label htmlFor="withAnimation">{label}</label>
        </TogglerWrapper>
    );
});

export default Toggler;


const TogglerWrapper = styled.div`
    position: relative;
    height: ${elementSizes.ToggleHeight};
    width: ${elementSizes.ToggleWidth};
    border: ${elementSizes.ToggleBorderWidth} solid ${colors.Blue};
    border-radius: calc(${elementSizes.ToggleHeight} / 2);
    line-height: calc(${elementSizes.ToggleHeight} - 2 * ${elementSizes.ToggleBorderWidth});
    background-color: ${colors.BlueLighter};
    box-sizing: border-box;
    cursor: pointer;
    
    & > label {
        position: absolute;
        top: 0;
        left 0;
        right: 0;
        bottom: 0;
        padding-left: ${elementSizes.ToggleHeight};
        text-align: left;
        font-weight: 500;
        color: ${colors.White};
        user-select: none;
        cursor: pointer;
    }
    
    & > span {
        display:inline-block;
        height: calc(${elementSizes.ToggleHeight} - 2 * ${elementSizes.ToggleBorderWidth});
        width: calc(${elementSizes.ToggleHeight} - 2 * ${elementSizes.ToggleBorderWidth});
        border-radius: 50%;
        background: #fff;
    }
    
    & > input {
        display: none;
        
        &:checked + span {
            position: relative;
            
            &:after {
                position: absolute;
                top: .2rem;
                left: .55rem;
                width: .5rem;
                height: 1rem;
                border: 3px solid ${colors.Blue};
                border-top: 0;
                border-left: 0;
                box-sizing: border-box;
                transform: rotate(45deg);
                content: '';
            }
        }
        
        &:checked ~ label {
            color: ${colors.Blue};
        }
    }
`;