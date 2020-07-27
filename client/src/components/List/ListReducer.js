import { GET_ITEMS } from '../../types/Types';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
    switch(action.types) {
      case GET_ITEMS:
        return {
          ...state
        }
      default:
        return {
          ...state
        }
    }
}