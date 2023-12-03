import React from 'react'
import Background from '../../components/Background';
import BasicNavbar from '../../components/Navbar/BasicNavbar';
import OTP from './components/OTP';

const Verification = () => {
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
            <BasicNavbar showSignin={false} />
            <OTP />
        </div>
    )
}

export default Verification