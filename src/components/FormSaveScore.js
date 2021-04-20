import React, { useState } from 'react'
import { useFirebase } from '../firebase/FirebaseContext'
import { Link } from 'react-router-dom'
import './FormSaveScore.css'


export default function FormSaveScore({ score, savedScore }) {
  const [username, setUsername] = useState('')
  const firebase = useFirebase()

  const onUsernameChange = value => {
    setUsername(value.target.value)
  }

  const saveHighScore = value => {
    value.preventDefault()
    const record = {
      name: username,
      score,
    }

    firebase.scores().push(record, () => {
        savedScore()
    })
  }

  return (
    <div className='container'>
      <h1>Score: {score.toFixed(0)}</h1>
      <form onSubmit={saveHighScore}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={onUsernameChange}
        />
        <button type='submit' className='btn' disabled={!username}>
          Save
        </button>
      </form>
      <Link to='/' className='btn'>
        Home
      </Link>
    </div>
  )
}