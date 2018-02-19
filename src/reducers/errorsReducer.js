import * as types from '../actions/types'

const initialErrorsState = []

export default (state = initialErrorsState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_ERRORS:
      return payload.map(error => {
        return {
          code: error.code,
          message: error.message,
        }
      })

    default:
      return state
  }
}
