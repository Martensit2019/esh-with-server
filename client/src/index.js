import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// import { store0 } from './store/store' //achb
import { createStore } from './store/createStore' //minin
import { Provider } from 'react-redux'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
)
