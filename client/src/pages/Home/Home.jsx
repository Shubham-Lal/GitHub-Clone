import React from 'react'
import Navbar from './components/Navbar'
import Campaign from './components/Campaign';
import Footer from './components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main style={{ overflowX: 'clip' }}>
                <Campaign />
            </main>
            <Footer />
        </>
    )
}

export default Home