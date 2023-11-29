import React from 'react'
import useWindowHeight from '../../hooks/useWindowHeight';
import Background from './components/Background';
import Navbar from './components/Navbar';
import OTP from './components/OTP';

const Verification = () => {
    const { height, isReady } = useWindowHeight();

    return (
        <div
            style={{
                position: 'relative',
                background: '#040d21',
                minHeight: `${height}px`,
                opacity: isReady ? 1 : 0,
                transition: 'opacity 0.5s linear',
                overflow: 'clip',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Background />
            <Navbar showSignin={false} />
            <OTP />
        </div>
    )
}

export default Verification