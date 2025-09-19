import { FiShield, FiUsers, FiCalendar, FiTarget, FiArrowRight, FiMessageCircle } from 'react-icons/fi'
import './Home.css'

const Home = () => {
  const activities = [
    {
      icon: FiCalendar,
      title: 'Weekly Meetups',
      description: 'Join us every Tuesday at Tami hackerspace in Tel Aviv for hands-on CTF sessions and collaborative learning.'
    },
    {
      icon: FiMessageCircle,
      title: 'Telegram Community',
      description: 'Stay connected with our Telegram group for updates, discussions, and coordination of our activities.'
    },
    {
      icon: FiTarget,
      title: 'CTF Practice',
      description: 'We actively practice on OverTheWire, HackTheBox, and participate in custom online CTF challenges.'
    },
    {
      icon: FiUsers,
      title: 'Future Goals',
      description: 'Working towards representing Tami hackerspace in global competitions and transitioning to bug bounty sessions.'
    }
  ]

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
              A cybersecurity group meeting every Tuesday at Tami hackerspace in Tel Aviv. 
              We practice CTF challenges together and work towards representing our community in competitions worldwide.
            </p>
            <div className="hero-cta">
              <a href="#activities" className="btn btn-primary">
                Our Activities <FiArrowRight />
              </a>
              <a href="#join" className="btn btn-secondary">
                Join Us
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="matrix-code">
              <div className="code-lines">
                <span>{'> whoami'}</span>
                <span>hacktami</span>
                <span>{'> ls -la /platforms/'}</span>
                <span>overthewire.sh</span>
                <span>hackthebox.py</span>
                <span>custom_ctf.md</span>
                <span>{'> cat goals.txt'}</span>
                <span>Representing Tami in competitions...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mission">
        <div className="container">
          <div className="section-header">
            <h2>About HackTami</h2>
            <p>
              A cybersecurity learning group based at Tami hackerspace in Tel Aviv, 
              focused on practical CTF practice and competitive preparation.
            </p>
          </div>
          
          <div className="mission-content">
            <div className="mission-text">
              <p>
                HackTami meets every Tuesday at Tami hackerspace, where we work together on CTF challenges 
                from platforms like OverTheWire and HackTheBox. We also tackle custom CTF challenges 
                created by community members and participate in online competitions.
              </p>
              <p>
                Our goal is to develop our skills sufficiently to represent Tami hackerspace in 
                cybersecurity competitions around the world. Eventually, we plan to transition 
                to collaborative bug bounty sessions where we work together on real targets.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat">
                <div className="stat-number">Every</div>
                <div className="stat-label">Tuesday</div>
              </div>
              <div className="stat">
                <div className="stat-number">Tel Aviv</div>
                <div className="stat-label">Tami Hackerspace</div>
              </div>
              <div className="stat">
                <div className="stat-number">CTF</div>
                <div className="stat-label">Focus</div>
              </div>
              <div className="stat">
                <div className="stat-number">Future</div>
                <div className="stat-label">Bug Bounties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="core-values">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>
              Our regular activities and platforms we use for cybersecurity learning and practice.
            </p>
          </div>
          
          <div className="values-grid">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent />
                  </div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="getting-started">
        <div className="container">
          <div className="section-header">
            <h2>How to Join</h2>
            <p>
              Simple steps to become part of the HackTami community and start attending our Tuesday sessions.
            </p>
          </div>
          
          <div className="learning-paths">
            <div className="path-card">
              <div className="path-header">
                <div className="path-icon">
                  <FiMessageCircle />
                </div>
                <h3>Join Our Telegram</h3>
              </div>
              <p className="path-description">Connect with the community through our Telegram group for updates and coordination.</p>
              <ul className="path-features">
                <li>Get notified about Tuesday meetings</li>
                <li>Discuss CTF challenges and solutions</li>
                <li>Share interesting security findings</li>
                <li>Coordinate carpools to Tami</li>
              </ul>
              <button className="btn btn-primary path-cta">
                Join Telegram <FiArrowRight />
              </button>
            </div>
            
            <div className="path-card">
              <div className="path-header">
                <div className="path-icon">
                  <FiCalendar />
                </div>
                <h3>Attend Tuesday Meetups</h3>
              </div>
              <p className="path-description">Come to Tami hackerspace every Tuesday for hands-on CTF practice and learning.</p>
              <ul className="path-features">
                <li>Collaborative CTF solving</li>
                <li>Learn from experienced members</li>
                <li>Work on OverTheWire and HackTheBox</li>
                <li>Participate in custom challenges</li>
              </ul>
              <button className="btn btn-primary path-cta">
                Find on Meetup <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join HackTami?</h2>
            <p>
              Connect with our cybersecurity learning group and join us for Tuesday CTF sessions 
              at Tami hackerspace in Tel Aviv.
            </p>
            <div className="cta-buttons">
              <a href="#telegram" className="btn btn-primary">
                Join Telegram Group
              </a>
              <a href="#meetup" className="btn btn-secondary">
                Tuesday Meetups
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
