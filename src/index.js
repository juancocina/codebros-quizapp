import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import FirebaseConfig from "./firebase/FirebaseConfig"
import { FirebaseContext } from "./firebase/FirebaseContext"

ReactDOM.render(
  <FirebaseContext.Provider value={new FirebaseConfig()}>
    <App />,
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
