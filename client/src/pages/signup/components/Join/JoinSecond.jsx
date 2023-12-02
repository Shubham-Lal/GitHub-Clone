import React, { useState } from 'react'
import './style.css'

const JoinSecond = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const handleCheck = (e) => {
        if (e.target.checked) {
            setCheckedItems([...checkedItems, e.target.value]);
        } else {
            setCheckedItems(checkedItems.filter(item => item !== e.target.value));
        }
    };

    return (
        <div className='welcome__container'>
            <div className='welcome__wrapper'>
                <div className='welcome-box-second'>
                    <div className='top__container second'>
                        <img src='/images/join-second.svg' />
                        <h1>The tools you need to build what you want.</h1>
                        <p>Soup to nuts, GitHub has it all.</p>
                    </div>
                    <div className='info__container second'>
                        <div className='info__wrapper'>
                            <span className='step-counter'>
                                <span className='second-info-step' />
                            </span>
                            <h1 className='info-header'>
                                What specific features are you interested in using?
                            </h1>
                            <p className='info-text'>
                                Select all that apply so we can point you to the right GitHub plan.
                            </p>
                            {planData.map((item, i) => (
                                <label className='plan__container' key={i}>
                                    <div className='checkbox__container'>
                                        <input
                                            type='checkbox'
                                            value={item.title}
                                            name='plan-input'
                                            onChange={handleCheck}
                                        />
                                    </div>
                                    <div>
                                        <div className='top-info'>
                                            <img src={`/images/join/${item.img}`} width={32} height={32} />
                                            <strong className='info-title'>
                                                {item.title}
                                            </strong>
                                        </div>
                                        <div className='bottom-info'>
                                            {item.info}
                                        </div>
                                        {item.title === 'Security' && checkedItems.includes('Security') && (
                                            <div>
                                                <label className='enterprise__container'>
                                                    <div style={{ marginTop: '4px', marginRight: '16px' }}>
                                                        <input type='checkbox' value='Enterprise security' />
                                                    </div>
                                                    <div>
                                                        <strong className='info-title' style={{ marginLeft: 0 }}>
                                                            Enterprise security
                                                        </strong>
                                                        <div className='bottom-info'>
                                                            SAML, LDAP, IP allow list, GitHub Connect, and Audit log API.
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </label>
                            ))}
                            <button className='continue-button'>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const planData = [
    {
        img: 'collaborative.svg',
        title: 'Collaborative coding',
        info: 'Codespaces, Pull requests, Notifications, Code review, Code review assignments, Code owners, Draft pull requests, Protected branches, and more.'
    },
    {
        img: 'automation.svg',
        title: 'Automation and CI/CD',
        info: 'Actions, Packages, APIs, GitHub Pages, GitHub Marketplace, Webhooks, Hosted runners, Self-hosted runners, Secrets management, and more.'
    },
    {
        img: 'security.svg',
        title: 'Security',
        info: 'Private repos, 2FA, Required reviews, Required status checks, Code scanning, Secret scanning, Dependency graph, Dependabot alerts, and more.'
    },
    {
        img: 'client.svg',
        title: 'Client Apps',
        info: 'GitHub Mobile, GitHub CLI, and GitHub Desktop.'
    },
    {
        img: 'project.svg',
        title: 'Project Management',
        info: 'Projects, Labels, Milestones, Issues, Unified Contribution Graph, Org activity graph, Org dependency insights, Repo insights, Wikis, and GitHub Insights.'
    },
    {
        img: 'team.png',
        title: 'Team Administration',
        info: 'Organizations, Invitations, Team sync, Custom roles, Domain verification, Audit Log API, Repo creation restriction, and Notification restriction.'
    },
    {
        img: 'community.svg',
        title: 'Community',
        info: 'GitHub Marketplace, GitHub Sponsors, GitHub Skills, and Electron.'
    }
]

export default JoinSecond