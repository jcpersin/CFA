import { ADD_DOG, TAB_SELECT } from '../actions/actionTypes';

const initialState = {
    doglist: []
}

let tabName = 0;

export default function cfaApp(state = initialState, action) {
    switch(action.type) {
        case ADD_DOG:
            return Object.assign({}, state, {
                doglist: [
                    ...state.doglist,
                    {
                        name: action.name
                    }
                ]
            });
        case TAB_SELECT:
            return Object.assign({}, state, {
                tabName: action.tabName
            })
        default:
            return state;
    }
    return state;
}
