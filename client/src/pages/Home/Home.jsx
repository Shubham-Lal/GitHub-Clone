import React from 'react'
import Navbar from './components/Navbar'
import useWindowHeight from '../../hooks/useWindowHeight'

const Home = () => {
    const { height, isReady } = useWindowHeight();

    return (
        <>
            <Navbar />
            <main
                style={{
                    height: `${height - 65}px`,
                    opacity: isReady ? 1 : 0,
                    transition: 'opacity 0.5s linear',
                    display: 'grid',
                    placeItems: 'center'
                }}
            >
                Currently working on it!
            </main>
        </>
    )
}

export default Home