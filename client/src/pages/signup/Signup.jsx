import React from 'react'
import Background from '../../components/Background';
import BasicNavbar from '../../components/Navbar/BasicNavbar';
import Form from './components/Form';
import SignupFooter from './components/Footer';

const Signup = () => {
  return (
    <div
      style={{
        position: 'relative',
        background: '#040d21',
        minHeight: '100svh',
        overflow: 'clip',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Background />
      <BasicNavbar showSignin={true} />
      <Form />
      <SignupFooter />
    </div>
  )
}

export default Signup
