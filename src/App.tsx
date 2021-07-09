import React from 'react'

function App() {
  return (
    <>
      <header>
        <div className="main-header-container">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>

        <div className="toggle-container">
          <p>Dark Mode</p>
          <div className="toggle-container__the-toggle">
            ...Toggle placeholder...
          </div>
        </div>
      </header>
      <main>
        <section id="overall-stats" className="stats-container">
          <p className="stats-container__item">
            @nathanf 1987 Followers 12 Today
          </p>
          <p className="stats-container__item">
            @nathanf 1044 Followers 99 Today
          </p>
          <p className="stats-container__item">
            @realnathanf 11k Followers 1099 Today
          </p>
          <p className="stats-container__item">
            Nathan F. 8239 Subscribers 144 Today
          </p>
        </section>
        <section id="detail-stats" className="stats-container">
          <h2>Overview - Today</h2>
          <p className="stats-container__item">Page Views 87 3%</p>
          <p className="stats-container__item">Likes 52 2%</p>
          <p className="stats-container__item">Likes 5462 2257%</p>
          <p className="stats-container__item">Profile Views 52k 1375%</p>
          <p className="stats-container__item">Retweets 117 303%</p>
          <p className="stats-container__item">Likes 507 553%</p>
          <p className="stats-container__item">Likes 107 19%</p>
          <p className="stats-container__item">Total Views 1407 12%</p>
        </section>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </>
  )
}

export default App
