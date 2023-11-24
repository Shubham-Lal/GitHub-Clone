import React from 'react'
import useWindowHeight from '../../hooks/useWindowHeight'
import Navbar from './components/Navbar'
import Background from './components/Background';

const Signup = () => {
  const { height, isReady } = useWindowHeight();

  return (
    <div
      style={{
        position: 'relative',
        background: '#040d21',
        minHeight: `${height}px`,
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.5s linear',
        overflow: 'clip'
      }}
    >
      <Background />
      <Navbar />
    </div>
  )
}

export default Signup