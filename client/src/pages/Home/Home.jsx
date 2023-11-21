import React from 'react'
import Navbar from './components/Navbar'
import Campaign from './components/Campaign';

const Home = () => {
    return (
        <>
            <Navbar />
            <main style={{ overflowX: 'clip' }}>
                <Campaign />
            </main>
        </>
    )
}

export default Home