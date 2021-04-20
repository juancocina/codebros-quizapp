import React from 'react'
import './App.css'
import Home from './screens/HomeScreen'
import HighScores from './screens/HighScoresScreen'
import Game from './screens/GameScreen'
import { HashRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/game' component={Game} />
        <Route path='/highScores' component={HighScores} />
      </div>
    </Router>
  )
}

export default App