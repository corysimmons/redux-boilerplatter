import * as types from '../actions/types'

const initialUserState = {
  firstName: ``,
  lastName: ``,
  email: ``,
}

export default (state = initialUserState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_USER:
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
      }

    case types.DELETE_USER:
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
      }

    default:
      return state
  }
}
