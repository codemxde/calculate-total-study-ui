import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <h1 className='text-4xl text-blue-300'>Hello World</h1>
      <h2 className='text-2xl text-green-600 mt-4'>Current Ideas</h2>
      <ol>
        <li>Able to perform CRUD ops on the entries</li>
        <li>Feature to add comments</li>
        <li>Calender / Date Functionality</li>
        <li>Login functionality</li>
      </ol>
    </div>
  )
}

export default App
