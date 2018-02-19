import * as types from '../actions/types'

const initialUsersState = []

export default (state = initialUsersState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USERS:
      return [
        ...state,
        ...payload,
      ]

    default:
      return state
  }
}
