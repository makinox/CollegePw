import { createStore } from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer/index'

const persistConfig = {
    key: 'root',
    storage
}

const initialState = {
    products: [{}],
    selected: [{}],
    counter: 0,
    total: 0,
    log: false
}

const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let persistor = persistStore(store)

export { store, persistor }