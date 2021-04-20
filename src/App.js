import React from 'react'
import './App.css'
import Home from './screens/HomeScreen'
import HighScores from './screens/HighScoresScreen'
import Game from './screens/GameScreen'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/highScores' component={HighScores} />
      </div>
    </Router>
  )
}

export default App