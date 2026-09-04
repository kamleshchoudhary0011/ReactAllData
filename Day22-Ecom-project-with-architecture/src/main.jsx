
import { createRoot } from 'react-dom/client'
import './index.css'

import {Provider} from "react-redux"
import { store } from './app/Store.jsx'
import {ToastContainer} from "react-toastify"
import AppRoute from './router/AppRoute.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoute />
    <ToastContainer/>
  </Provider>,
)
