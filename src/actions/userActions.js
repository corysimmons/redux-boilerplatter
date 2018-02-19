import * as types from './types'

export function updateUser () {
  return {
    type: types.UPDATE_USER,
    payload: {
      firstName: `Bob`,
      lastName: `Smith`,
      email: `bob@example.com`,
    },
  }
}

export function deleteUser () {
  return {
    type: types.DELETE_USER,
    payload: {
      firstName: ``,
      lastName: ``,
      email: ``,
    },
  }
}
