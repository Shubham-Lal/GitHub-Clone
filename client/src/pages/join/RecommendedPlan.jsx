import React, { useState } from 'react'
import JoinSecond from './components/Join/JoinSecond';
import JoinThird from './components/Join/JoinThird';

const RecommendedPlan = () => {
    const [tab, setTab] = useState(0);

    return (
        tab === 0 ? (
            <JoinSecond setTab={setTab} />
        ) : tab === 1 && (
            <JoinThird />
        )
    )
}

export default RecommendedPlan