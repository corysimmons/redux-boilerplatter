import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const middlewares = [logger, thunk]

const persistConfig = {
  key: `root`,
  storage,
  blacklist: [`user`],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)
