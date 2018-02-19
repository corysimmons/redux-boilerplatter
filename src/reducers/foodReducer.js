import * as types from '../actions/types'

const initialFoodState = {
  fruit: ``,
  veggie: ``,
}

export default (state = initialFoodState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_FOOD:
      return {
        ...state,
        fruit: payload.fruit,
        veggie: payload.veggie,
      }
    default:
      return state
  }
}
