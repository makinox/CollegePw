import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './dist/utils/redux/index'

ReactDOM.render(
    <Provider store={store} >
        <PersistGate persistor={persistor} >
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('root'))

serviceWorker.register()