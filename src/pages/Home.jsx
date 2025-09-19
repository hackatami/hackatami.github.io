import { FiArrowRight, FiMessageCircle, FiCalendar } from 'react-icons/fi'
import './Home.css'

const Home = () => {

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="text-gradient">HackTami</span>
            </h1>
            <p className="hero-subtitle">
              Cybersecurity group meeting Tuesdays at Tami hackerspace, Tel Aviv.
            </p>
            <div className="hero-cta">
              <a href="#join" className="btn btn-primary">
                Getting Started <FiArrowRight />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="matrix-code">
              <div className="code-lines">
                <span>{'> whoami'}</span>
                <span>hacktami</span>
                <span>{'> cat mission.txt'}</span>
                <span>Tuesday CTF practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Getting Started */}
      <section id="join" className="getting-started">
        <div className="container">
          <div className="section-header">
            <h2>Getting Started</h2>
          </div>
          
          <div className="learning-paths">
            <div className="path-card">
              <div className="path-header">
                <div className="path-icon">
                  <FiMessageCircle />
                </div>
                <h3>Join Telegram</h3>
              </div>
              <p className="path-description">Get updates about Tuesday meetings.</p>
              <button className="btn btn-primary path-cta">
                Join <FiArrowRight />
              </button>
            </div>
            
            <div className="path-card">
              <div className="path-header">
                <div className="path-icon">
                  <FiCalendar />
                </div>
                <h3>Come Tuesday</h3>
              </div>
              <p className="path-description">Tami hackerspace, Tel Aviv.</p>
              <button className="btn btn-primary path-cta">
                Meetup <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
