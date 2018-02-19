import axios from 'axios'

import * as types from './types'

export function fetchUsers () {
  return async dispatch => {
    try {
      const users = await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.data)

      dispatch({
        type: types.FETCH_USERS,
        payload: users,
      })
    } catch (err) {
      dispatch({
        type: types.UPDATE_ERRORS,
        payload: [
          {
            code: 735,
            message: err.message,
          },
        ],
      })
    }
  }
}
