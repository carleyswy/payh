import * as constants from './constants';

const defaultState = {
	name: '',
	id: 0
}

export default (state=defaultState, action)=>{
    switch (action.type) {
        case constants.SET_NAME:
            state.name = action.name;
            return state;
        case constants.SET_ID:
            state.id = action.id
            return state;
        default:
            return state;
    }

}