import React, { useEffect, useState } from 'react'
import './App.scss'
import OverallStatsCard from './shared/components/card/OverallStatsCard'

import { ReactComponent as FacebookIcon } from './shared/icons/icon-facebook.svg'
import { ReactComponent as TwitterIcon } from './shared/icons/icon-twitter.svg'
import { ReactComponent as InstagramIcon } from './shared/icons/icon-instagram.svg'
import { ReactComponent as YouTubeIcon } from './shared/icons/icon-youtube.svg'
import DetailStatsCard from './shared/components/card/DetailStatsCard'
import ToggleButton from './shared/components/button/ToggleButton'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log({darkMode})
  }, [darkMode])

  const overallStats = [
    {
      icon: <FacebookIcon />,
      primaryColor: 'hsl(208, 92%, 53%)',
      handleName: '@nathanf',
      statsCount: 1987,
      statsDelta: 150,
    },
    {
      icon: <TwitterIcon />,
      primaryColor: 'hsl(203, 89%, 53%)',
      handleName: '@nathanf',
      statsCount: 1044,
      statsDelta: 99,
    },
    {
      icon: <InstagramIcon />,
      primaryColor:
        'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
      handleName: '@realnathanf',
      statsCount: '11k',
      statsDelta: 1099,
    },
    {
      icon: <YouTubeIcon />,
      primaryColor: 'hsl(348, 97%, 39%)',
      handleName: 'Nathan F.',
      statsCount: 8239,
      statsDelta: -144,
      altStatsUnit: 'subscribers',
    },
  ]

  const detailStats = [
    {
      icon: <FacebookIcon />,
      statsName: 'page views',
      statsCount: 87,
      statsPercentageDelta: 3,
    },
    {
      icon: <FacebookIcon />,
      statsName: 'likes',
      statsCount: 52,
      statsPercentageDelta: -2,
    },
    {
      icon: <InstagramIcon />,
      statsName: 'likes',
      statsCount: 5462,
      statsPercentageDelta: 2257,
    },
    {
      icon: <InstagramIcon />,
      statsName: 'profile views',
      statsCount: 52010,
      statsPercentageDelta: 1375,
    },
    {
      icon: <TwitterIcon />,
      statsName: 'retweets',
      statsCount: 117,
      statsPercentageDelta: 303,
    },
    {
      icon: <TwitterIcon />,
      statsName: 'likes',
      statsCount: 507,
      statsPercentageDelta: 553,
    },
    {
      icon: <YouTubeIcon />,
      statsName: 'likes',
      statsCount: 107,
      statsPercentageDelta: -19,
    },
    {
      icon: <YouTubeIcon />,
      statsName: 'total views',
      statsCount: 1407,
      statsPercentageDelta: -12,
    },
  ]

  const onDarkModeTogglerClicked = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="main-bg"></div>

      <div className="wrapper">
        <header>
          <div className="main-header-container">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>

          <span className="divider"></span>
          <div className="toggle-container">
            <p>Dark Mode</p>
            <ToggleButton handler={onDarkModeTogglerClicked}/>
          </div>
        </header>

        <main>
          <section className="overall-stats">
            {overallStats.map((stat) => (
              <OverallStatsCard
                icon={stat.icon}
                statsCount={stat.statsCount}
                primaryColor={stat.primaryColor}
                handleName={stat.handleName}
                statsDelta={stat.statsDelta}
                altStatsUnit={stat.altStatsUnit}
              />
            ))}
          </section>

          <h2>Overview - Today</h2>
          <section className="detail-stats">
            {detailStats.map((stat) => (
              <DetailStatsCard
                icon={stat.icon}
                statsCount={stat.statsCount}
                statsName={stat.statsName}
                statsPercentageDelta={stat.statsPercentageDelta}
              />
            ))}
            {/* <p className="detail-stats__item">Likes 52 2%</p>
            <p className="detail-stats__item">Likes 5462 2257%</p>
            <p className="detail-stats__item">Profile Views 52k 1375%</p>
            <p className="detail-stats__item">Retweets 117 303%</p>
            <p className="detail-stats__item">Likes 507 553%</p>
            <p className="detail-stats__item">Likes 107 19%</p>
            <p className="detail-stats__item">Total Views 1407 12%</p> */}
          </section>
        </main>

        <footer>
          <div className="attribution">
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Your Name Here</a>.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
