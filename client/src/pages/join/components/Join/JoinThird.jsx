import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const JoinThird = () => {
    return (
        <div className='join__container'>
            <div className='join__wrapper'>
                <div className='join-box-third'>
                    <div className='top__container second'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="79" viewBox="0 0 79 79" fill="none">
                            <path d="M15.5178 5.64282C13.1805 5.64282 11.2857 7.53762 11.2857 9.87497V31.0357C11.2857 33.373 13.1805 35.2678 15.5178 35.2678H29.625C30.4041 35.2678 31.0357 34.6362 31.0357 33.8571C31.0357 33.078 30.4041 32.4464 29.625 32.4464H15.5178C14.7387 32.4464 14.1071 31.8148 14.1071 31.0357V9.87497C14.1071 9.09585 14.7387 8.46425 15.5178 8.46425H63.4821C64.2612 8.46425 64.8928 9.09585 64.8928 9.87497V31.0612C64.8928 31.8262 64.2727 32.4464 63.5077 32.4464C62.7286 32.4464 62.097 33.078 62.097 33.8571C62.097 34.6362 62.7286 35.2678 63.5077 35.2678C65.8309 35.2678 67.7143 33.3845 67.7143 31.0612V9.87497C67.7143 7.53762 65.8195 5.64282 63.4821 5.64282H15.5178Z" fill="#9DF4D3"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.0575 49.4006C7.0575 46.2842 9.58341 43.7583 12.6998 43.7583C15.8158 43.7583 18.3432 46.2837 18.3432 49.4006C18.3432 50.9779 17.6964 52.4036 16.6538 53.4274C17.1435 53.7599 17.589 54.1521 17.9796 54.5934C18.496 55.1768 18.4417 56.0683 17.8583 56.5847C17.2749 57.1011 16.3833 57.0468 15.8669 56.4634C15.134 55.6354 14.0866 55.0989 12.912 55.0401C12.8416 55.0427 12.7709 55.044 12.6998 55.044C12.6275 55.044 12.5556 55.0426 12.4839 55.0399C10.2453 55.1506 8.46425 57.0008 8.46425 59.2668C8.46425 60.046 7.83265 60.6776 7.05354 60.6776C6.27442 60.6776 5.64282 60.046 5.64282 59.2668C5.64282 56.8362 6.87227 54.6927 8.74323 53.4243C7.70267 52.4006 7.0575 50.9761 7.0575 49.4006ZM15.5218 49.4006C15.5218 50.8943 14.3619 52.1162 12.8941 52.216C12.8284 52.2142 12.7625 52.2133 12.6964 52.2133C12.6319 52.2133 12.5677 52.2141 12.5036 52.2159C11.0372 52.1151 9.87893 50.8941 9.87893 49.4006C9.87893 47.8424 11.1416 46.5797 12.6998 46.5797C14.2585 46.5797 15.5218 47.8429 15.5218 49.4006Z" fill="#9DF4D3"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M33.8611 49.4006C33.8611 50.9762 34.5063 52.4007 35.5469 53.4244C35.2873 53.6004 35.0401 53.7931 34.8069 54.001C34.6038 54.1821 34.4113 54.3748 34.2304 54.578C33.7123 55.1599 33.7641 56.0516 34.346 56.5697C34.9279 57.0878 35.8196 57.036 36.3377 56.4541C36.4466 56.3318 36.5625 56.2158 36.6847 56.1068C37.3843 55.483 38.2891 55.0892 39.2872 55.0399C39.359 55.0426 39.431 55.044 39.5034 55.044C39.5744 55.044 39.6451 55.0427 39.7155 55.0401C40.8958 55.0991 41.9478 55.6406 42.6811 56.4755C43.1953 57.0608 44.0867 57.1185 44.672 56.6043C45.2574 56.0901 45.3151 55.1988 44.8009 54.6134C44.4061 54.164 43.9545 53.7649 43.4573 53.4274C44.5 52.4036 45.1468 50.9779 45.1468 49.4006C45.1468 46.2837 42.6194 43.7583 39.5034 43.7583C36.387 43.7583 33.8611 46.2842 33.8611 49.4006ZM39.5 52.2133C39.4355 52.2133 39.3713 52.2141 39.3073 52.2159C37.8408 52.1152 36.6825 50.8941 36.6825 49.4006C36.6825 47.8424 37.9452 46.5797 39.5034 46.5797C41.0621 46.5797 42.3254 47.8429 42.3254 49.4006C42.3254 50.8943 41.1654 52.1162 39.6976 52.216C39.6319 52.2142 39.5661 52.2133 39.5 52.2133Z" fill="#9DF4D3"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M60.6646 49.4006C60.6646 50.9762 61.3099 52.4008 62.3506 53.4245C61.8612 53.7562 61.4159 54.1475 61.0253 54.5878C60.5083 55.1707 60.5617 56.0623 61.1446 56.5793C61.7275 57.0963 62.6191 57.0429 63.1361 56.46C63.8694 55.6332 64.9167 55.0979 66.0909 55.0399C66.1626 55.0426 66.2347 55.044 66.307 55.044C66.378 55.044 66.4487 55.0427 66.5191 55.0401C68.7563 55.1523 70.5358 57.0017 70.5358 59.2668C70.5358 60.046 71.1674 60.6776 71.9465 60.6776C72.7256 60.6776 73.3572 60.046 73.3572 59.2668C73.3572 56.8381 72.1296 54.696 70.2611 53.4272C71.3036 52.4034 71.9504 50.9778 71.9504 49.4006C71.9504 46.2837 69.423 43.7583 66.307 43.7583C63.1906 43.7583 60.6646 46.2842 60.6646 49.4006ZM66.3036 52.2133C66.2392 52.2133 66.1749 52.2141 66.1109 52.2159C64.6444 52.1152 63.4861 50.8941 63.4861 49.4006C63.4861 47.8424 64.7488 46.5797 66.307 46.5797C67.8656 46.5797 69.1289 47.8429 69.1289 49.4006C69.1289 50.8943 67.9691 52.1162 66.5013 52.216C66.4356 52.2142 66.3697 52.2133 66.3036 52.2133Z" fill="#9DF4D3"></path>
                            <path d="M20.777 11.691C21.3468 12.2224 21.3779 13.115 20.8466 13.6848L18.9224 15.7483L20.9858 17.6725C21.5557 18.2039 21.5868 19.0965 21.0555 19.6663C20.5241 20.2362 19.6314 20.2673 19.0616 19.736L15.9664 16.8497C15.3966 16.3183 15.3655 15.4256 15.8968 14.8558L18.7831 11.7606C19.3145 11.1908 20.2072 11.1596 20.777 11.691Z" fill="#64ACFF"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M46.5564 16.9323C43.44 16.9323 40.914 19.4582 40.914 22.5746C40.914 24.0754 41.4995 25.4392 42.4544 26.45C40.2438 27.676 38.6398 29.8628 38.2064 32.4465H36.6786C35.8995 32.4465 35.2679 33.0781 35.2679 33.8572V39.5001C35.2679 40.2792 35.8995 40.9108 36.6786 40.9108H57.8393C58.6185 40.9108 59.2501 40.2792 59.2501 39.5001V33.8572C59.2501 33.0781 58.6185 32.4465 57.8393 32.4465H54.9009C54.4677 29.8643 52.8653 27.6786 50.6568 26.4522C51.6132 25.4412 52.1998 24.0766 52.1998 22.5746C52.1998 19.4578 49.6724 16.9323 46.5564 16.9323ZM46.4107 28.2162C46.4591 28.2174 46.5077 28.218 46.5564 28.218L46.6092 28.2178C46.6393 28.2175 46.6693 28.217 46.6993 28.2162C49.2643 28.2812 51.4039 30.0578 52.0187 32.4465H41.0885C41.7036 30.0569 43.8445 28.2799 46.4107 28.2162ZM46.6806 25.3939C48.1814 25.3289 49.3783 24.092 49.3783 22.5746C49.3783 21.0169 48.115 19.7537 46.5564 19.7537C44.9982 19.7537 43.7355 21.0164 43.7355 22.5746C43.7355 24.092 44.9311 25.3282 46.4308 25.3938L46.4672 25.3934C46.496 25.3931 46.5248 25.393 46.5536 25.393C46.596 25.393 46.6383 25.3933 46.6806 25.3939ZM38.0893 38.0894V35.268H56.4286V38.0894H38.0893Z" fill="#64ACFF"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.3964 56.4548C22.2799 56.4548 19.754 58.9808 19.754 62.0972C19.754 63.6727 20.3992 65.0972 21.4397 66.1209C19.5688 67.3893 18.3393 69.5327 18.3393 71.9634C18.3393 72.7425 18.9709 73.3741 19.7501 73.3741C20.5292 73.3741 21.1608 72.7425 21.1608 71.9634C21.1608 69.6973 22.9418 67.8472 25.1804 67.7365C25.2521 67.7392 25.3241 67.7406 25.3964 67.7406C25.4673 67.7406 25.538 67.7392 25.6083 67.7366C27.8456 67.8488 29.6251 69.6983 29.6251 71.9634C29.6251 72.7425 30.2567 73.3741 31.0358 73.3741C31.8149 73.3741 32.4465 72.7425 32.4465 71.9634C32.4465 69.5346 31.2189 67.3926 29.3505 66.1238C30.393 65.1 31.0397 63.6743 31.0397 62.0972C31.0397 58.9803 28.5123 56.4548 25.3964 56.4548ZM25.5906 64.9125C27.0584 64.8128 28.2183 63.5909 28.2183 62.0972C28.2183 60.5394 26.955 59.2763 25.3964 59.2763C23.8382 59.2763 22.5754 60.539 22.5754 62.0972C22.5754 63.5906 23.7337 64.8117 25.2001 64.9124C25.2642 64.9107 25.3285 64.9098 25.3929 64.9098C25.459 64.9098 25.5249 64.9107 25.5906 64.9125Z" fill="#64ACFF"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M47.9683 62.0972C47.9683 63.6727 48.6135 65.0972 49.654 66.1209C47.7831 67.3893 46.5536 69.5327 46.5536 71.9634C46.5536 72.7425 47.1852 73.3741 47.9643 73.3741C48.7435 73.3741 49.3751 72.7425 49.3751 71.9634C49.3751 69.6973 51.1561 67.8472 53.3947 67.7365C53.4663 67.7392 53.5383 67.7406 53.6106 67.7406C53.6816 67.7406 53.7523 67.7392 53.8226 67.7366C56.0599 67.8488 57.8393 69.6983 57.8393 71.9634C57.8393 72.7425 58.4709 73.3741 59.2501 73.3741C60.0292 73.3741 60.6608 72.7425 60.6608 71.9634C60.6608 69.5346 59.4332 67.3926 57.5648 66.1238C58.6073 65.1 59.254 63.6743 59.254 62.0972C59.254 58.9803 56.7266 56.4548 53.6106 56.4548C50.4942 56.4548 47.9683 58.9808 47.9683 62.0972ZM53.6072 64.9098C53.5427 64.9098 53.4785 64.9107 53.4145 64.9124C51.948 64.8117 50.7897 63.5906 50.7897 62.0972C50.7897 60.539 52.0524 59.2763 53.6106 59.2763C55.1693 59.2763 56.4326 60.5394 56.4326 62.0972C56.4326 63.5909 55.2727 64.8128 53.8049 64.9125C53.7392 64.9107 53.6733 64.9098 53.6072 64.9098Z" fill="#64ACFF"></path>
                            <path d="M34.5796 11.691C34.0098 12.2224 33.9786 13.115 34.5099 13.6848L36.4341 15.7483L34.3707 17.6725C33.8009 18.2039 33.7697 19.0965 34.3011 19.6663C34.8324 20.2362 35.7251 20.2673 36.2949 19.736L39.3901 16.8497C39.9599 16.3183 39.9911 15.4256 39.4597 14.8558L36.5734 11.7606C36.042 11.1908 35.1494 11.1596 34.5796 11.691Z" fill="#64ACFF"></path>
                            <path d="M27.5144 13.3051C27.769 12.4712 28.3627 11.312 29.8202 11.312C32.0779 11.312 32.4464 12.8881 32.4464 14.1404C32.4464 14.9104 32.103 15.6655 31.6011 16.3626C30.6566 17.6743 29.1507 18.7808 28.3145 19.3952C28.2308 19.4568 28.1537 19.5134 28.0846 19.5648C27.7162 19.8388 27.3157 19.8428 26.932 19.5648C26.9119 19.5505 26.8913 19.5359 26.8702 19.5209C25.6055 18.6221 22.5714 16.4657 22.5714 14.1404C22.5714 12.8881 23.0615 11.312 25.12 11.312C26.4579 11.312 27.1991 12.4712 27.455 13.3051C27.4814 13.3908 27.4884 13.3902 27.5144 13.3051Z" fill="#64ACFF"></path>
                        </svg>
                        <h1>Learn to ship software like a pro.</h1>
                        <p>GitHub gives students free access to the best developer tools so they can learn by doing.</p>
                    </div>
                    <div className='subscription__container'>
                        <div className='subscription-free'>
                            <div className='free__wrapper'>
                                <h2 className='subscription-name'>Free</h2>
                                <ul className='free-info'>

                                </ul>
                                <Link to='/' className='subscription-continue free'>Continue for free</Link>
                            </div>
                        </div>

                        <div className='subscription-team'>

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
        icon: '',
        title: 'Everything included in Free, plus...'
    },
    {
        title: 'Protect your branches',
        subTitle: 'Ensure that collaborators on your repository cannot make irrevocable changes to branches.'
    },
    {
        title: 'Multiple pull requests reviewers',
        subTitle: 'Add more control with multiple pull requests reviewers for any changes to your code before it can be merged.'
    },
    {
        title: 'Code owners',
        subTitle: 'Define who owns the code and who is notified for reviews for pull requests.'
    },
    {
        title: 'Draft pull requests',
        info: "After you create a pull request, you can ask a specific team to review the changes you've proposed."
    },
    {
        title: 'Required reviewers',
        info: 'Ensure that pull requests have a specific number of approving reviews before collaborators can make changes to a protected branch.'
    },
    {
        title: 'Pages and Wikis',
        info: 'Host documentation and simple websites for your project in a wiki format that contributors can easily edit either on the web or command line.'
    },
    {
        title: 'Environment deployment branches and secrets',
        info: 'A job cannot access secrets that are defined in an environment unless it is running on the specified branch.'
    },
    {
        title: '3,000 CI/CD minutes/month',
        subTitle: 'Free for public repositories',
        info: 'Get execution minutes for hosted runners to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.'
    },
    {
        title: '2GB of Packages storage',
        subTitle: 'Free for public repositories',
        info: 'Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.'
    },
    {
        title: 'Web-based support',
        info: 'GitHub Support can help you troubleshoot issues you run into while using GitHub.'
    },
]

export default JoinThird