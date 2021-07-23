import * as constants from './constants';

export const _setLang = (value) => ({
    type: constants.SET_LANG,
    lang: value
})

export const _setLanguage = (value) => ({
    type: constants.SET_LANGUAGE,
    language: value
})