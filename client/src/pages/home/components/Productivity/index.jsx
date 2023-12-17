import React from 'react'
import Line from '../../../../components/Line'
import './style.css'

const Productivity = () => {
    return (
        <div id='productivity'>
            <div className='productivity__container'>
                <div className='productivity__first'>
                    <div className='first__left'>
                        <div className='left__job'>
                            <img src='/images/productivity/job.svg' />
                            <div className='job__shadow' />
                        </div>
                        <Line background='three' />
                    </div>
                    <div className='first__right'>
                        <h2>Productivity</h2>
                        <h3>
                            <span>Accelerate innovation</span>
                            Our AI-powered platform increases the pace of software development.
                        </h3>
                    </div>
                </div>
                <div className='productivity__second'>
                    <img className='first-image' src='/images/productivity/image-1.png' width={2496} height={1302} />
                </div>
            </div>
        </div>
    )
}

export default Productivity