import { ISLOADING_SET, POKEMONS_SET } from './actionType';

const initialState = {
  pokemons: [],
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case POKEMONS_SET:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ISLOADING_SET:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
