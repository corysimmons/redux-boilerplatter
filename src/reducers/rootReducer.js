import { combineReducers } from 'redux'

import errorsReducer from './errorsReducer'
import userReducer from './userReducer'
import foodReducer from './foodReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  errors: errorsReducer,
  user: userReducer,
  food: foodReducer,
  users: usersReducer,
})
