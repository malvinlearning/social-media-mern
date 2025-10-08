import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/login/LoginPage'
import SignUpPage from './pages/auth/signup/signUpPage'
import Sidebar from './components/common/SideBar'
import RightPanel from './components/common/RightPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
      </Routes>
      <RightPanel />
    </div>
  )
}

export default App
