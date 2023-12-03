import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Background from '../../components/Background'
import BasicNavbar from '../../components/Navbar/BasicNavbar'
import Welcome from './Welcome'
import RecommendedPlan from './RecommendedPlan'
import JoinFooter from './components/Footer'

const Join = () => {
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
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/" replace />}
                />
                <Route
                    path="welcome"
                    element={<Welcome />}
                />
                <Route
                    path="recommended_plan"
                    element={<RecommendedPlan />}
                />
            </Routes>
            <JoinFooter />
        </div>
    )
}
export default Join
