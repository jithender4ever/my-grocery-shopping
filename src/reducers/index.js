import { combineReducers } from 'redux';
//import ADD_ITEM from '../actions/index';

const INITIAL_STATE = {
  items: []
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  console.log('in reducer: ', action);
  console.log('in reducer state: ', state);

  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, {itemId: state.items.length, itemName: action.payload}]
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  itemsReducer
});

export default reducers;
