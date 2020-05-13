/**
 * NOTE:
 * Standard app layout constants
 *
 * Similar to app constants, the code here is mainly for theme purposes.
 *
 * If the styling gets larger, we can separate this as a NPM library to be used in multiple React app
 */


import {GeneralObjType} from "../models";

const gaps: GeneralObjType = {
    XSmall: '0.3125rem', // 5px
    Small: '0.625rem', // 10px
    Common: '1rem', // 16px
    Large: '2rem', // 32px
};

const fontSizes: GeneralObjType = {
    XSmall: '0.625rem', // 10px
    Small: '0.75rem', // 12px
    Common: '0.875rem', // 14px
    Large: '1rem', // 16px
    XLarge: '1.25rem', // 20px
};

const colors: GeneralObjType = {
    White: '#FFF',
    Black: '#222',
    GrayDarker: '#666',
    GrayDark: '#9B9095',
    Gray: '#d7d7d7',
    GrayLight: '#e5e5e5',
    GrayLighter: '#f5f5f5',
    BlueDarker: '#307bbb',
    Blue: '#0bbce1',
    BlueLight: '#8bd4ff',
    BlueLighter: '#94ecff',
    Red: '#ee1111',
};

const elementSizes: {[key: string]: string | number}  = {
    HeaderHeight: '3rem',
    InputAreaHeight: '3rem',
    PlayerCountInputWidth: '9rem',
    PlayerCountButtonWidth: '5rem',
    PlayerNameWidth: '6.5rem',
    CardHeight: '3rem',
    CardWidth: '2rem',
    ToggleHeight: '2rem',
    ToggleWidth: '7.5rem',
    ToggleBorderWidth: '3px',

    ModalMaxWidth: '20rem',
    ModalTitleHeight: '2rem',
};


export {
    gaps,
    fontSizes,
    colors,
    elementSizes,
}