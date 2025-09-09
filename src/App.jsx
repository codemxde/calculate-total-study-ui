import './App.css'
import Header from './components/layout/Header'
import Home from './components/views/Home'

function App() {

  return (
    // <div>
    //   <h1 className='text-4xl text-blue-300'>Hello World</h1>
    //   <h2 className='text-2xl text-green-600 mt-4'>Current Ideas</h2>
    //   <ol>
    //     <li>Able to perform CRUD ops on the entries</li>
    //     <li>Feature to add comments</li>
    //     <li>Calender / Date Functionality</li>
    //     <li>Login functionality</li>
    //   </ol>
    // </div>
    <div className=' h-dvh grid grid-cols-1 grid-rows-[auto_1fr]'>
      <Header />
      <Home />
    </div>
  )
}

export default App
