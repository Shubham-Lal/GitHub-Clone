import React from 'react'
import './style.css'

const WelcomeFirst = () => {
    return (
        <div className='welcome__container'>
            <div className='welcome__wrapper'>
                <div className='welcome-box'>
                    <div className='top__container'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 70.85 71.14" width="80"><path d="M32.79,59.57A4.46,4.46,0,0,0,28.34,64V89.21a4.46,4.46,0,0,0,4.45,4.45H35.6v4.45a1.46,1.46,0,0,0,.79,1.3,1.48,1.48,0,0,0,1.52-.07l8.52-5.68H65.25a4.45,4.45,0,0,0,4.44-4.45V68.61a1.48,1.48,0,0,0-3,0v20.6a1.49,1.49,0,0,1-1.48,1.49H46a1.42,1.42,0,0,0-.82.25l-6.59,4.39V92.18a1.48,1.48,0,0,0-1.48-1.48h-4.3a1.49,1.49,0,0,1-1.48-1.49V64a1.49,1.49,0,0,1,1.48-1.48h4.15a1.49,1.49,0,0,0,0-3Z" transform="translate(-28.34 -28.45)" fill="#9cf3d4"></path><path d="M48.94,72.47a4.15,4.15,0,0,0,0,8.3,4.1,4.1,0,0,0,2.74-1A4.15,4.15,0,0,0,58.56,77a1.5,1.5,0,0,0,0-.22v-.14a.31.31,0,0,0,0-.1A9.53,9.53,0,1,0,54,84.84a1.48,1.48,0,0,0-1.57-2.52,6.51,6.51,0,1,1,3.15-5.66,1.19,1.19,0,0,1-2.37,0,1.45,1.45,0,0,0-.22-.78A4.15,4.15,0,0,0,48.94,72.47Zm-1.18,4.15a1.19,1.19,0,1,1,1.18,1.18A1.18,1.18,0,0,1,47.76,76.62Z" transform="translate(-28.34 -28.45)" fill="#9cf3d4" fillRule="evenodd"></path><path d="M74.26,48.94a7.27,7.27,0,1,0-9.45,0,9.81,9.81,0,0,0-3.38,3,7.34,7.34,0,0,0-1.65-1.44,5.78,5.78,0,1,0-8.34,0,7.26,7.26,0,0,0-3.2,4.57,1.48,1.48,0,1,0,2.89.64,4.45,4.45,0,0,1,4.47-3.43h0a4.46,4.46,0,0,1,4.47,3.4,1,1,0,0,0,.07.25,1.47,1.47,0,0,0,1.37.94,1.4,1.4,0,0,0,.54-.1,1.43,1.43,0,0,0,.86-.87,2.17,2.17,0,0,0,.07-.24,6.65,6.65,0,0,1,6.53-5h0a6.77,6.77,0,0,1,6.54,5.08c0,.05,0,.1.05.15a1.38,1.38,0,0,0,.4.6,1.35,1.35,0,0,0,.47.3,1.55,1.55,0,0,0,.57.09,1.34,1.34,0,0,0,.49-.1,1.49,1.49,0,0,0,.52-.33,1.52,1.52,0,0,0,.4-.75,4.46,4.46,0,0,1,4.47-3.41h0A4.45,4.45,0,0,1,88,55.74a1.48,1.48,0,1,0,2.89-.64,7.26,7.26,0,0,0-3.2-4.57,5.78,5.78,0,1,0-8.34,0A7.49,7.49,0,0,0,77.62,52,9.7,9.7,0,0,0,74.26,48.94Zm-4.73-1.23a4.3,4.3,0,1,1,4.31-4.29,4.29,4.29,0,0,1-4.31,4.29h0Zm14,1.63a2.82,2.82,0,1,0-2.83-2.81,2.8,2.8,0,0,0,2.83,2.81Zm-27.88,0a2.82,2.82,0,1,1,2.82-2.81,2.81,2.81,0,0,1-2.82,2.81Z" transform="translate(-28.34 -28.45)" fill="#64acff" fillRule="evenodd"></path><path d="M39.9,32.89a4.45,4.45,0,0,1,4.45-4.44H94.74a4.45,4.45,0,0,1,4.45,4.44V61.05a4.46,4.46,0,0,1-4.45,4.45H85.85V70a1.48,1.48,0,0,1-.78,1.3,1.5,1.5,0,0,1-1.53-.07L75,65.5H44.35a4.46,4.46,0,0,1-4.45-4.45Zm4.45-1.48a1.49,1.49,0,0,0-1.48,1.48V61.05a1.49,1.49,0,0,0,1.48,1.49H75.47a1.52,1.52,0,0,1,.83.24l6.58,4.4V64a1.49,1.49,0,0,1,1.49-1.48H94.74a1.49,1.49,0,0,0,1.48-1.49V32.89a1.49,1.49,0,0,0-1.48-1.48Z" transform="translate(-28.34 -28.45)" fill="#64acff" fillRule="evenodd"></path></svg>
                        <h1>Welcome to GitHub</h1>
                        <p>We are glad you're here.</p>
                    </div>
                    <div className='info__container'>
                        <div className='info__wrapper'>
                            <span className='first-step'>
                                <span className='info-step' />
                            </span>
                            <p className='info-text'>
                                This will help us guide you to the tools that are best suited for your projects.
                            </p>
                            <form>
                                <div className='info-form'>
                                    <div className='info-options'>
                                        <fieldset>
                                            <legend>How many team members will be working with you?</legend>
                                            <div className='options'>
                                                {teamData.map((item, id) => (
                                                    <div className='option-wrap' key={id}>
                                                        <input className='radio-box' type="radio" value={item.value} name="team-members" id={item.id} />
                                                        <span className='radio-text'>
                                                            <label htmlFor={item.id}>
                                                                {item.value === '1' ? "Just me" : item.value}
                                                            </label>
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className='info-options'>
                                        <fieldset>
                                            <legend>Are you a student or teacher?</legend>
                                            <div className='options'>
                                                {personalData.map((item, id) => (
                                                    <div className='option-wrap' key={id}>
                                                        <input className='radio-box' type="radio" value={item.value} name="personal-info" id={item.id} />
                                                        <span className='radio-text'>
                                                            <label htmlFor={item.id}>
                                                                {item.value}
                                                            </label>
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>
                                    </div>
                                    <button className='continue-button disabled' disabled={true}>
                                        Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const teamData = [
    {
        id: 'one',
        value: '1'
    },
    {
        id: 'two-five',
        value: '2-5'
    },
    {
        id: 'five-ten',
        value: '5-10'
    },
    {
        id: 'ten-twenty',
        value: '10-20'
    },
    {
        id: 'twenty-fifty',
        value: '20-50'
    },
    {
        id: 'above-fifty',
        value: '50+'
    },
]
const personalData = [
    {
        id: 'n/a',
        value: 'N/A'
    },
    {
        id: 'student',
        value: 'Student'
    },
    {
        id: 'teacher',
        value: 'Teacher'
    }
]

export default WelcomeFirst