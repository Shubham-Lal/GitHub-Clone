import React from 'react'
import LinksNavbar from '../../components/Navbar/LinksNavbar';
import Campaign from './components/Campaign';
import Productivity from './components/Productivity';
import Footer from './components/Footer';

const Home = () => {
    return (
        <>
            <LinksNavbar />
            <main style={{ background: '#0d1117', overflowX: 'clip' }}>
                <div className='campaign__image'>
                    <img className='campaign__image-medium' src='/images/campaign-medium.webp' width='860' height='544' alt='Campaign Medium' />
                    <img className='campaign__image-large' src='/images/campaign-large.webp' width='2236' height='1630' alt='Campaign Desktop' />
                </div>
                <Campaign />
                <Productivity />
            </main>
            <footer style={{ background: '#0d1117' }}>
                <Footer />
            </footer>
        </>
    )
}

export default Home