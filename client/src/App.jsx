import './App.css'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { Home, Login, Signup, Verification, Join, Dashboard } from './pages'

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Dashboard /> : <Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account_verifications' element={<Verification />} />
        <Route path="join/*" element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
