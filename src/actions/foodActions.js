import * as types from './types'

export function updateFood (newFruit, newVeggie) {
  return {
    type: types.UPDATE_FOOD,
    payload: {
      fruit: newFruit,
      veggie: newVeggie,
    },
  }
}
