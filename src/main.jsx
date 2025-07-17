import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import CoincontextProvider from './context/Coincontext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
   <CoincontextProvider>
    <App />
   </CoincontextProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
