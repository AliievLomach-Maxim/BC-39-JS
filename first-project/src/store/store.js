import { createStore } from 'redux'

import { reducer } from './reducer'

export const store = createStore(reducer)

// console.log(store.getState())
// store.dispatch({ type: 'plus', payload: 1 })

// console.log(store.getState())
