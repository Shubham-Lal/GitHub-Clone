import React from 'react'
import Navbar from './components/Navbar'
import Campaign from './components/Campaign';
import Footer from './components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main style={{ background: '#0d1117', overflowX: 'clip' }}>
                <Campaign />
            </main>
            <footer style={{ background: '#0d1117' }}>
                <Footer />
            </footer>
        </>
    )
}

export default Home