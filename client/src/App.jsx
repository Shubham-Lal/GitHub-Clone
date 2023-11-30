import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Verification, Welcome, RecommendedPlan } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account_verifications' element={<Verification />} />
        <Route path='/join/welcome' element={<Welcome />} />
        <Route path='/join/recommended_plan' element={<RecommendedPlan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
