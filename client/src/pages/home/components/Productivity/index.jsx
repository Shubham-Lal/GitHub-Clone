import React from 'react'
import { Link } from 'react-router-dom'
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
                <div className='productivity__third'>
                    <div className='third__left'>
                        <Line background='four' />
                    </div>
                    <div className='third__right'>
                        <div className='third-first'>
                            <div className='third-first-container'>
                                <div className='third-first-wrapper'>
                                    <h2>
                                        <em>GitHub Copilot </em>
                                        empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.
                                    </h2>
                                    <Link>
                                        Explore GitHub Copilot{` `}
                                        <svg className='right-arrow' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='third-second'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productivity