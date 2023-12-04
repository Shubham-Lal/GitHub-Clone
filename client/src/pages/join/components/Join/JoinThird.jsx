import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const JoinThird = () => {
    return (
        <div className='join__container'>
            <div className='join__wrapper'>
                <div className='join-box-third'>
                    <div className='top__container third'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 70.85 71.14" width="80"><path d="M32.79,59.57A4.46,4.46,0,0,0,28.34,64V89.21a4.46,4.46,0,0,0,4.45,4.45H35.6v4.45a1.46,1.46,0,0,0,.79,1.3,1.48,1.48,0,0,0,1.52-.07l8.52-5.68H65.25a4.45,4.45,0,0,0,4.44-4.45V68.61a1.48,1.48,0,0,0-3,0v20.6a1.49,1.49,0,0,1-1.48,1.49H46a1.42,1.42,0,0,0-.82.25l-6.59,4.39V92.18a1.48,1.48,0,0,0-1.48-1.48h-4.3a1.49,1.49,0,0,1-1.48-1.49V64a1.49,1.49,0,0,1,1.48-1.48h4.15a1.49,1.49,0,0,0,0-3Z" transform="translate(-28.34 -28.45)" fill="#9cf3d4"></path><path d="M48.94,72.47a4.15,4.15,0,0,0,0,8.3,4.1,4.1,0,0,0,2.74-1A4.15,4.15,0,0,0,58.56,77a1.5,1.5,0,0,0,0-.22v-.14a.31.31,0,0,0,0-.1A9.53,9.53,0,1,0,54,84.84a1.48,1.48,0,0,0-1.57-2.52,6.51,6.51,0,1,1,3.15-5.66,1.19,1.19,0,0,1-2.37,0,1.45,1.45,0,0,0-.22-.78A4.15,4.15,0,0,0,48.94,72.47Zm-1.18,4.15a1.19,1.19,0,1,1,1.18,1.18A1.18,1.18,0,0,1,47.76,76.62Z" transform="translate(-28.34 -28.45)" fill="#9cf3d4" fillRule="evenodd"></path><path d="M74.26,48.94a7.27,7.27,0,1,0-9.45,0,9.81,9.81,0,0,0-3.38,3,7.34,7.34,0,0,0-1.65-1.44,5.78,5.78,0,1,0-8.34,0,7.26,7.26,0,0,0-3.2,4.57,1.48,1.48,0,1,0,2.89.64,4.45,4.45,0,0,1,4.47-3.43h0a4.46,4.46,0,0,1,4.47,3.4,1,1,0,0,0,.07.25,1.47,1.47,0,0,0,1.37.94,1.4,1.4,0,0,0,.54-.1,1.43,1.43,0,0,0,.86-.87,2.17,2.17,0,0,0,.07-.24,6.65,6.65,0,0,1,6.53-5h0a6.77,6.77,0,0,1,6.54,5.08c0,.05,0,.1.05.15a1.38,1.38,0,0,0,.4.6,1.35,1.35,0,0,0,.47.3,1.55,1.55,0,0,0,.57.09,1.34,1.34,0,0,0,.49-.1,1.49,1.49,0,0,0,.52-.33,1.52,1.52,0,0,0,.4-.75,4.46,4.46,0,0,1,4.47-3.41h0A4.45,4.45,0,0,1,88,55.74a1.48,1.48,0,1,0,2.89-.64,7.26,7.26,0,0,0-3.2-4.57,5.78,5.78,0,1,0-8.34,0A7.49,7.49,0,0,0,77.62,52,9.7,9.7,0,0,0,74.26,48.94Zm-4.73-1.23a4.3,4.3,0,1,1,4.31-4.29,4.29,4.29,0,0,1-4.31,4.29h0Zm14,1.63a2.82,2.82,0,1,0-2.83-2.81,2.8,2.8,0,0,0,2.83,2.81Zm-27.88,0a2.82,2.82,0,1,1,2.82-2.81,2.81,2.81,0,0,1-2.82,2.81Z" transform="translate(-28.34 -28.45)" fill="#64acff" fillRule="evenodd"></path><path d="M39.9,32.89a4.45,4.45,0,0,1,4.45-4.44H94.74a4.45,4.45,0,0,1,4.45,4.44V61.05a4.46,4.46,0,0,1-4.45,4.45H85.85V70a1.48,1.48,0,0,1-.78,1.3,1.5,1.5,0,0,1-1.53-.07L75,65.5H44.35a4.46,4.46,0,0,1-4.45-4.45Zm4.45-1.48a1.49,1.49,0,0,0-1.48,1.48V61.05a1.49,1.49,0,0,0,1.48,1.49H75.47a1.52,1.52,0,0,1,.83.24l6.58,4.4V64a1.49,1.49,0,0,1,1.49-1.48H94.74a1.49,1.49,0,0,0,1.48-1.49V32.89a1.49,1.49,0,0,0-1.48-1.48Z" transform="translate(-28.34 -28.45)" fill="#64acff" fillRule="evenodd"></path></svg>
                        <h1>Where teams collaborate and ship.</h1>
                        <p>Unlock advanced features with GitHub Team or continue with a free plan for the basics.</p>
                    </div>
                    <div className='subscription__container'>
                        <div className='subscription-free'>
                            <div className='free__wrapper'>
                                <h2 className='subscription-name'>Free</h2>
                                <ul className='free-info'>
                                    {freeSubscriptionData.map((item, i) => {
                                        const [showInfo, setShowInfo] = useState(false);
                                        return (
                                            <li className='info-list' key={i}>
                                                <details className='info-details'>
                                                    <summary onClick={() => setShowInfo(!showInfo)}>
                                                        <span className='icon-wrapper'>
                                                            <svg className={`info-arrow ${showInfo && "rotate"}`} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                                                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path>
                                                            </svg>
                                                        </span>
                                                        {item.title}
                                                        {item.subTitle && (
                                                            <div className='info-subtitle'>
                                                                Free for public repositories
                                                            </div>
                                                        )}
                                                    </summary>
                                                    {showInfo && <p>{item.info}</p>}
                                                </details>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <Link to='/' className='subscription-continue free'>Continue for free</Link>
                            </div>
                        </div>

                        <div className='subscription-team'>
                            <div className='team__wrapper'>
                                <div className='subscription-name team'>
                                    <h2>Team</h2>
                                    <span>Recommended for you</span>
                                </div>
                                <ul className='team-info'>
                                    {teamSubscriptionData.map((item, i) => {
                                        const [showInfo, setShowInfo] = useState(false);
                                        return (
                                            <li className='info-list' key={i}>
                                                <details className='info-details'>
                                                    <summary onClick={() => setShowInfo(!showInfo)} style={{ cursor: item.icon && "default" }}>
                                                        <span className='icon-wrapper' style={{ marginLeft: (item.id !== 1 && item.icon) && "0" }}>
                                                            {item.icon ? item.icon : (
                                                                <svg className={`info-arrow ${showInfo && "rotate"}`} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                                                    <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path>
                                                                </svg>
                                                            )}
                                                        </span>
                                                        {item.title}
                                                        {item.subTitle && (
                                                            <div className='info-subtitle'>
                                                                {item.subTitle}
                                                            </div>
                                                        )}
                                                    </summary>
                                                    {showInfo && <p>{item.info}</p>}
                                                </details>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <Link to='/' className='subscription-continue team'>
                                    Level up to GitHub Team {` `}
                                    <span style={{ fontWeight: '400' }}>for $4 per user/month</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const freeSubscriptionData = [
    {
        title: 'Unlimited public/private repositories',
        info: 'Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.'
    },
    {
        title: '2,000 CI/CD minutes/month',
        subTitle: true,
        info: 'Get execution minutes for hosted runners to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.'
    },
    {
        title: '500MB of Packages storage',
        subTitle: true,
        info: 'Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.'
    },
    {
        title: '120 core-hours of Codespaces compute',
        info: 'Blazing fast cloud developer environments with flexible compute and pre-configured containers, developers can code, collaborate, and debug from any browser.'
    },
    {
        title: '15GB of Codespaces storage',
        info: 'Blazing fast cloud developer environments with flexible compute and pre-configured containers, developers can code, collaborate, and debug from any browser.'
    },
    {
        title: 'Community support',
        info: 'Get help with most of your GitHub questions and issues in our Community Forum.'
    },
]

const teamSubscriptionData = [
    {
        id: 1,
        title: 'Everything included in Free, plus...',
        icon: <svg className='icon-svg' fill="#fff" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path></svg>
    },
    {
        id: 2,
        title: 'Protect your branches',
        subTitle: 'Ensure that collaborators on your repository cannot make irrevocable changes to branches.',
        icon: <svg className='icon-svg' xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 67.7 67.7" width="40"><path d="M33.85,0A33.87,33.87,0,0,1,67.18,39.78a1.41,1.41,0,0,1-1.63,1.14,1.42,1.42,0,0,1-1.15-1.64,30.3,30.3,0,0,0,.48-5.43,31,31,0,1,0-24.6,30.36A1.41,1.41,0,0,1,40.86,67a33.85,33.85,0,1,1-7-67Z" transform="translate(0 0)" fill="#79b8ff"></path><path d="M28.21,11.28A5.65,5.65,0,0,0,26.8,22.39V45.31a5.64,5.64,0,1,0,2.82,0V44a2.45,2.45,0,0,0,0-.27,9,9,0,0,1,.8-2.89,6.83,6.83,0,0,1,2.13-3,19.22,19.22,0,0,1,5.86-2.3,8.7,8.7,0,0,0,6-4.56,5.65,5.65,0,1,0-3-.45,6.24,6.24,0,0,1-3.67,2.27A21.83,21.83,0,0,0,31,35.49a6.69,6.69,0,0,0-1.4,1.26V22.39a5.65,5.65,0,0,0-1.41-11.11Zm-2.82,5.65a2.82,2.82,0,1,1,2.82,2.82A2.83,2.83,0,0,1,25.39,16.93ZM40.9,25.39a2.82,2.82,0,1,1,2.82,2.82A2.82,2.82,0,0,1,40.9,25.39ZM25.39,50.77a2.82,2.82,0,1,1,2.82,2.83A2.82,2.82,0,0,1,25.39,50.77Z" transform="translate(0 0)" fill="#79b8ff" fillRule="evenodd"></path><path d="M59.24,56.41a2.81,2.81,0,0,1-1.39,2.43V60.7a1.41,1.41,0,1,1-2.82,0V58.86a2.82,2.82,0,1,1,4.21-2.45Z" transform="translate(0 0)" fill="#9df4d3"></path><path d="M63.47,45v3a4.23,4.23,0,0,1,4.23,4.24V63.47a4.23,4.23,0,0,1-4.23,4.23H49.36a4.23,4.23,0,0,1-4.23-4.23V52.19A4.24,4.24,0,0,1,49.36,48V45a6.76,6.76,0,0,1,2.17-4.8,6.81,6.81,0,0,1,9.72-.06A6.72,6.72,0,0,1,63.47,45ZM52.18,45a4,4,0,0,1,1.31-2.77,4.36,4.36,0,0,1,2.94-1.28,4.41,4.41,0,0,1,2.89,1.24A3.93,3.93,0,0,1,60.65,45v3H52.18ZM48,52.19a1.42,1.42,0,0,1,1.41-1.42H63.47a1.42,1.42,0,0,1,1.41,1.42V63.47a1.41,1.41,0,0,1-1.41,1.41H49.36A1.41,1.41,0,0,1,48,63.47Z" transform="translate(0 0)" fill="#9df4d3" fillRule="evenodd"></path></svg>
    },
    {
        id: 3,
        title: 'Multiple pull requests reviewers',
        subTitle: 'Add more control with multiple pull requests reviewers for any changes to your code before it can be merged.',
        icon: <svg className='icon-svg' xmlns="http://www.w3.org/2000/svg" id="Layer_3" data-name="Layer 3" viewBox="0 0 67.44 61.82" width="40"><path d="M3.3,6.14a1.31,1.31,0,0,0-.36,1V31a1.33,1.33,0,0,0,.36,1,1.72,1.72,0,0,0,1.25.38H10v2.81H4.55a4.51,4.51,0,0,1-3.21-1.17A4.15,4.15,0,0,1,.13,31V7.16a4.13,4.13,0,0,1,1.21-3A4.52,4.52,0,0,1,4.55,2.94h58.6a4.52,4.52,0,0,1,3.21,1.18,4.13,4.13,0,0,1,1.21,3V31a4.15,4.15,0,0,1-1.21,3,4.51,4.51,0,0,1-3.21,1.17H22.61a1.41,1.41,0,0,1,0-2.81H63.15a1.72,1.72,0,0,0,1.25-.38,1.33,1.33,0,0,0,.36-1V7.16a1.31,1.31,0,0,0-.36-1,1.72,1.72,0,0,0-1.25-.39H4.55A1.72,1.72,0,0,0,3.3,6.14Zm8.07,27.71A1.4,1.4,0,0,1,10,35.25V32.44A1.41,1.41,0,0,1,11.37,33.85Z" transform="translate(-0.13 -2.94)" fill="#79b8ff" fillRule="evenodd"></path><path d="M17,14.19a1.41,1.41,0,1,0-2.81,0V18.4H10a1.41,1.41,0,1,0,0,2.81h4.2v4.22a1.41,1.41,0,0,0,2.81,0V21.21h4.23a1.41,1.41,0,0,0,0-2.81H17Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M43.68,15.59a1.41,1.41,0,0,1,1.41-1.41H57.73a1.41,1.41,0,1,1,0,2.81H45.09A1.41,1.41,0,0,1,43.68,15.59Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M28.24,14.19a1.41,1.41,0,1,0,0,2.81H38.1a1.41,1.41,0,1,0,0-2.81Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M28.23,21.21a1.41,1.41,0,1,0,0,2.81H45.09a1.41,1.41,0,0,0,0-2.81Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M52.12,21.21a1.41,1.41,0,1,0,0,2.81h5.62a1.41,1.41,0,0,0,0-2.81Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M26.82,52.83a2.11,2.11,0,1,1-2.1-2.11A2.1,2.1,0,0,1,26.82,52.83Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M33.86,54.93a2.11,2.11,0,1,0-2.11-2.1A2.1,2.1,0,0,0,33.86,54.93Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M45.09,52.82A2.11,2.11,0,1,1,43,50.71,2.1,2.1,0,0,1,45.09,52.82Z" transform="translate(-0.13 -2.94)" fill="#9df4d3"></path><path d="M14.18,64.76H53.52a3.91,3.91,0,0,0,4.21-4.22V45.09A4.18,4.18,0,0,0,56.6,42a4.32,4.32,0,0,0-3.08-1.13H23.1l-3.05-2.41c-1.49-1.21-3-2.4-3.61-2.9a1.4,1.4,0,0,0-2.26,1.07v4.24h0A4.13,4.13,0,0,0,11.1,42,4.18,4.18,0,0,0,10,45.09V60.54A3.91,3.91,0,0,0,14.18,64.76ZM13.08,44a1.69,1.69,0,0,1,1.1-.3h1.31a1.44,1.44,0,0,0,1-.36,1.36,1.36,0,0,0,.45-1V39.58l.48.38.84.68c1.34,1.08,2.68,2.16,3.43,2.74a1.43,1.43,0,0,0,.87.3H53.52a1.64,1.64,0,0,1,1.1.3,1.7,1.7,0,0,1,.3,1.11V60.54c0,1.06-.35,1.41-1.4,1.41H14.18c-1,0-1.4-.35-1.4-1.41V45.09A1.7,1.7,0,0,1,13.08,44Z" transform="translate(-0.13 -2.94)" fill="#9df4d3" fillRule="evenodd"></path></svg>
    },
    {
        id: 4,
        title: 'Code owners',
        subTitle: 'Define who owns the code and who is notified for reviews for pull requests.',
        icon: <svg className='icon-svg' xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 67.7 62.28" width="40"><path d="M9.48,9.51A6.77,6.77,0,1,1,21,14.36a8.36,8.36,0,0,1,3.23,3.37A1.35,1.35,0,1,1,21.83,19c-1.14-2.06-2.61-2.76-3.9-2.76a5.85,5.85,0,0,0-5.75,5.55,1.35,1.35,0,1,1-2.69-.27,9.05,9.05,0,0,1,3.31-6.23A6.74,6.74,0,0,1,9.48,9.51Zm6.77-4.06a4.06,4.06,0,1,0,4.06,4.06A4.06,4.06,0,0,0,16.25,5.45Z" transform="translate(0 -2.74)" fill="#79b8ff" fillRule="evenodd"></path><path d="M58.22,9.51a6.77,6.77,0,0,1-2.62,5.35,9,9,0,0,1,4,6.7,1.35,1.35,0,0,1-2.69.27,5.85,5.85,0,0,0-5.76-5.55c-1.29,0-2.75.7-3.9,2.76a1.35,1.35,0,1,1-2.37-1.31,8.87,8.87,0,0,1,2.45-2.87A6.77,6.77,0,1,1,58.22,9.51ZM51.45,5.45a4.06,4.06,0,1,0,4.06,4.06A4.06,4.06,0,0,0,51.45,5.45Z" transform="translate(0 -2.74)" fill="#79b8ff" fillRule="evenodd"></path><path d="M5.42,54.19a5.42,5.42,0,1,0,5.41,5.42A5.42,5.42,0,0,0,5.42,54.19ZM2.71,59.61a2.71,2.71,0,1,1,2.71,2.71A2.71,2.71,0,0,1,2.71,59.61Z" transform="translate(0 -2.74)" fill="#79b8ff" fillRule="evenodd"></path><path d="M28.43,59.61A5.42,5.42,0,1,1,33.85,65,5.42,5.42,0,0,1,28.43,59.61Zm5.42-2.71a2.71,2.71,0,1,0,2.71,2.71A2.71,2.71,0,0,0,33.85,56.9Z" transform="translate(0 -2.74)" fill="#79b8ff" fillRule="evenodd"></path><path d="M62.28,54.19a5.42,5.42,0,1,0,5.42,5.42A5.42,5.42,0,0,0,62.28,54.19Zm-2.7,5.42a2.71,2.71,0,1,1,2.7,2.71A2.7,2.7,0,0,1,59.58,59.61Z" transform="translate(0 -2.74)" fill="#79b8ff" fillRule="evenodd"></path><path d="M33.85,8.16a8.14,8.14,0,0,0-4.27,15.06A10.82,10.82,0,0,0,24.39,31a1.35,1.35,0,0,0,2.68.39,8.15,8.15,0,0,1,8.13-7,5.6,5.6,0,0,1,3.29,1.11A1.35,1.35,0,0,0,40,23.29,10.44,10.44,0,0,0,39,22.63,8.15,8.15,0,0,0,33.85,8.16Zm-5.42,8.12a5.44,5.44,0,0,1,5.42-5.42,5.42,5.42,0,1,1-5.42,5.42Z" transform="translate(0 -2.74)" fill="#9df4d3" fillRule="evenodd"></path><path d="M43.33,28.47V27.11a5.42,5.42,0,0,1,10.83,0v1.36A3,3,0,0,1,56,29a2.29,2.29,0,0,1,.85,1.87v7.37a2.31,2.31,0,0,1-.94,1.91,3,3,0,0,1-1.77.5H43.33a3.08,3.08,0,0,1-1.69-.48,2.29,2.29,0,0,1-1-1.93V30.87a2.26,2.26,0,0,1,.94-1.9A3,3,0,0,1,43.33,28.47ZM46,27.11a2.71,2.71,0,1,1,5.41,0v1.36H46ZM43.33,37.94V31.17H54.16v6.77Z" transform="translate(0 -2.74)" fill="#9df4d3" fillRule="evenodd"></path><path d="M33.85,37.94A1.35,1.35,0,0,1,35.2,39.3v5.41H60.48a3.17,3.17,0,0,1,3.16,3.16v2.26a1.36,1.36,0,0,1-2.71,0V47.87a.46.46,0,0,0-.45-.45H35.2v2.71a1.35,1.35,0,1,1-2.7,0V47.42H7.22a.46.46,0,0,0-.45.45v2.26a1.36,1.36,0,0,1-2.71,0V47.87a3.17,3.17,0,0,1,3.16-3.16H32.5V39.3A1.35,1.35,0,0,1,33.85,37.94Z" transform="translate(0 -2.74)" fill="#9df4d3"></path></svg>
    },
    {
        id: 5,
        title: 'Draft pull requests',
        info: "After you create a pull request, you can ask a specific team to review the changes you've proposed."
    },
    {
        id: 6,
        title: 'Required reviewers',
        info: 'Ensure that pull requests have a specific number of approving reviews before collaborators can make changes to a protected branch.'
    },
    {
        id: 7,
        title: 'Pages and Wikis',
        info: 'Host documentation and simple websites for your project in a wiki format that contributors can easily edit either on the web or command line.'
    },
    {
        id: 8,
        title: 'Environment deployment branches and secrets',
        info: 'A job cannot access secrets that are defined in an environment unless it is running on the specified branch.'
    },
    {
        id: 9,
        title: '3,000 CI/CD minutes/month',
        subTitle: 'Free for public repositories',
        info: 'Get execution minutes for hosted runners to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.'
    },
    {
        id: 10,
        title: '2GB of Packages storage',
        subTitle: 'Free for public repositories',
        info: 'Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.'
    },
    {
        id: 11,
        title: 'Web-based support',
        info: 'GitHub Support can help you troubleshoot issues you run into while using GitHub.'
    },
]

export default JoinThird