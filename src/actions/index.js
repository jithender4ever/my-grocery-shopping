//export const ADD_ITEM = 'ADD_ITEM';

export function addItem (itemName) {
  console.log('in action creator', itemName);

  return {
    type: "ADD_ITEM",
    payload: itemName
  };
}

export function selectItem (item) {
  console.log('in handleItemClick', item);

  return {
    type: "SELECT_ITEM",
    payload: item
  };
}
