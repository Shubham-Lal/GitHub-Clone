import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Login = () => {
  return (
    <>
      <div className='logo__container'>
        <div className='logo__wrapper'>
          <Link to='/' style={{ display: 'inline-block', width: '48px', height: '48px' }}>
            <img src='/images/logo-large.svg' alt='Logo' />
          </Link>
        </div>
      </div>
      <main className='main__container'>
        <div className='main__wrapper'>
          <div className='title'>
            <h1>Sign in to GitHub</h1>
          </div>

          <div className='input__container'>
            <form>
              <label htmlFor='login'>
                Username or email address
              </label>
              <input id='login' />
              <div style={{ position: 'relative' }}>
                <label htmlFor='password'>
                  Password
                </label>
                <input id='password' type='password' />
                <Link className='forgot-password'>
                  Forgot password?
                </Link>
                <button type='button'>
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <div className='extra__links'>
            <div>
              <Link className='passkey'>
                Sign in with a passkey
              </Link>
            </div>
            <p>
              New to GitHub? <Link to='/signup' className='create-account'>Create an account</Link>
            </p>
          </div>
        </div>
      </main>
      <div className='login__footer'>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Docs</li>
          <li>Contact GitHub Support</li>
        </ul>
      </div>
    </>
  )
}

export default Login