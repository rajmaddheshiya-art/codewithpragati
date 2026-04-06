import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router"
import UserContext from './useContext/useContext.jsx'
import {Provider} from "react-redux"
import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContext>
    <Provider store={store}>
    <App />
    </Provider>
    </UserContext>
  </BrowserRouter>

)
