import * as constants from './constants';

const defaultState = {
	lang: 0,
	language: 'en_US'
}

export default (state=defaultState, action)=>{
    switch (action.type) {
        case constants.SET_LANG:
            state.lang = action.lang;
            return state;
        case constants.SET_LANGUAGE:
            state.language = action.language
            return state;
        default:
            return state;
    }

}