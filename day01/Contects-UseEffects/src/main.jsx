import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConetxtProvider } from './Contacts/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <ConetxtProvider>
    <App />
  </ConetxtProvider>,
)
