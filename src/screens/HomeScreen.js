import React from 'react'
import { Link } from 'react-router-dom'
import './homescreen.css'

export default function HomeScreen() {
  return (
    <>
    <div className='homemain'>
      <h1>CodeBros Quiz App</h1>
      <Link to='/game' className='btn'>
        Start Game
      </Link>
    </div>
    <div className='homemain'>
      <Link to='/highScores' className='btn'>
        High Scores
      </Link>
    </div>
    </>
  )
}
