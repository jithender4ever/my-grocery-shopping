import { combineReducers } from 'redux';
import ADD_ITEM from '../actions/index';

const itemIs = (state, action) => {
  switch (action.type) {
  case ADD_ITEM:
    return {
      item: action.payload
    };
  default:
      return state;
  }
};

const items = (state = null, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  items
});

export default reducers;
