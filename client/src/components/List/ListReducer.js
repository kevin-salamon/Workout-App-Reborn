import { GET_ITEMS } from '../../types/Types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
    switch(action.type) {
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload
        }
      default:
        return state
    }
}