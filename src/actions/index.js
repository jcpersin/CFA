import { ADD_DOG, TAB_SELECT } from './actionTypes';

export function addDog(text) {
    console.log('addDog');
    return {
        type: ADD_DOG,
        name: text
    }
}

export function tabSelect(id) {
    return {
        type: TAB_SELECT,
        tabName: id
    }
}
