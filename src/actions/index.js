export const ADD_ITEM = 'ADD_ITEM';

export default function addItem (itemName) {
  console.log('in action creator', itemName);
  
  return {
    type: ADD_ITEM,
    payload: itemName
  };
}
