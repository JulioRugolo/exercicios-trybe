import { ACTION_NAME } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  fullName: {
    name: '',
    gender: '',
    born: '',
    titles: '',
    tvSeries: '',
  },
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return {
        ...state,
        isLoading: false,
        fullName: action.payload
      };
  
    default:
      return state;
  }
  
};