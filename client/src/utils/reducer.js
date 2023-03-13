import {
  ALL_BOOKS
} from './action';

const initialState = { 
  allbooks: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_BOOKS:
      return {
        ...state,
        allbooks: [...state.allbooks, ...action.allbooks]
      }

    default: 
      return state;
  }
}