import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Login = () => {
  const [showPasskey, setShowPasskey] = useState(false);
  const [passkeyVerify, setPasskeyVerify] = useState(true);

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
                <button className='signin' type='button'>
                  Sign in
                </button>
              </div>
            </form>
            {showPasskey && (
              <div>
                <div className='divider'>Or</div>
                <div className='warn_message'>
                  <div className='warn__image'>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                      <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                    </svg>
                  </div>
                  <div className='message'>
                    This browser or device is reporting partial passkey support.
                  </div>
                </div>
                {passkeyVerify ? (
                  <div className='waiting__message'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none"></circle>
                      <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path>
                    </svg> Waiting for input from browser interaction...
                  </div>
                ) : (
                  <>
                    <div className='fail_message'>
                      <div className='fail__image'>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                          <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                        </svg>
                      </div>
                      <div className='message'>
                        Authentication failed.
                      </div>
                    </div>
                    <button className='retry__passkey' onClick={() => {
                      setPasskeyVerify(true);
                      setTimeout(() => setPasskeyVerify(false), 3000);
                    }}>
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path d="M2.743 4.757a3.757 3.757 0 1 1 5.851 3.119 5.991 5.991 0 0 1 2.15 1.383c.17.17.257.405.258.646.003.598.001 1.197 0 1.795L11 12.778v.721a.5.5 0 0 1-.5.5H1.221a.749.749 0 0 1-.714-.784 6.004 6.004 0 0 1 3.899-5.339 3.754 3.754 0 0 1-1.663-3.119Z"></path><path d="M15.75 6.875c0 .874-.448 1.643-1.127 2.09a.265.265 0 0 0-.123.22v.59c0 .067-.026.13-.073.177l-.356.356a.125.125 0 0 0 0 .177l.356.356c.047.047.073.11.073.176v.231c0 .067-.026.13-.073.177l-.356.356a.125.125 0 0 0 0 .177l.356.356c.047.047.073.11.073.177v.287a.247.247 0 0 1-.065.168l-.8.88a.52.52 0 0 1-.77 0l-.8-.88a.247.247 0 0 1-.065-.168V9.185a.264.264 0 0 0-.123-.22 2.5 2.5 0 1 1 3.873-2.09ZM14 6.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                      </svg>
                      Retry passkey
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <div className='extra__links'>
            {!showPasskey && (
              <p className='passkey' onClick={() => {
                setShowPasskey(true);
                setTimeout(() => setPasskeyVerify(false), 3000);
              }}>
                Sign in with a passkey
              </p>
            )}
            <p style={{ marginTop: showPasskey ? '4px' : '3px' }}>
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

const Message = ({ message, type }) => {
  return (
    <div className={`message__container ${type}`}>
      <div className='message__wrapper'>
        <p>{message}</p>
        <button>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Login