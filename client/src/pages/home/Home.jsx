import React from 'react'
import LinksNavbar from '../../components/Navbar/LinksNavbar';
import Campaign from './components/Campaign';
import Footer from './components/Footer';

const Home = () => {
    return (
        <>
            <LinksNavbar />
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