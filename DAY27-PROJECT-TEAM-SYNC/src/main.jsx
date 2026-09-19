import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoter from './app/routes/AppRoter'
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoter />
  </Provider >,
)
