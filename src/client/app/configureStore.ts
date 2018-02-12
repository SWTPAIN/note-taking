import { applyMiddleware, compose, createStore } from 'redux'
import { IRootState, rootReducer } from './redux'

const composeEnhancers = (
 process.env.NODE_ENV === 'development' &&
 window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const configureStore = (initialState?: IRootState) => {
  // configure middlewares
  const middlewares = [
  ]
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  )
  // create store
  return createStore(
    rootReducer,
    initialState!,
    enhancer,
  )
}

export default configureStore
