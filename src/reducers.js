import {
  SEARCH_CHARACTERS_REQUEST,
  SEARCH_CHARACTERS_SUCCESS,
  SEARCH_CHARACTERS_ERROR,
} from './actions';

const initialState = {
  characters: [],
  loading: false,
  error: null,
};

export function characterReducer(state = initialState, action) {
  // Handle these sync actions
  if (action.type === SEARCH_CHARACTERS_REQUEST) {
    console.log('search request inside reducer');
    //loading: true

    return {...state, loading: true };

  } else if (action.type === SEARCH_CHARACTERS_SUCCESS) {
    console.log('search success inside reducer');
    //characters: data?
    return {...state, characters: action.characters, loading: false }; 

  } else if (action.type === SEARCH_CHARACTERS_ERROR) {
    // return Object.assign({},state, {});
    return {...state, error: action.error };

  }
  return state;
}
