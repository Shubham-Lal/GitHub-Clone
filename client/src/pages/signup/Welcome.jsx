import React from 'react'
import useWindowHeight from '../../hooks/useWindowHeight';
import Background from '../../components/Background';
import BasicNavbar from '../../components/Navbar/BasicNavbar';

const Welcome = () => {
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
            <BasicNavbar showSignin={false} />
        </div>
    )
}

export default Welcome