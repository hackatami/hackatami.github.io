import { FiMessageCircle, FiTarget, FiCalendar, FiExternalLink } from 'react-icons/fi'
import './Platforms.css'

const Platforms = () => {
  const platformCategories = [
    {
      title: 'Communication',
      icon: FiMessageCircle,
      description: 'Stay connected with the HackTami community.',
      platforms: [
        {
          name: 'Telegram Group',
          description: 'Our main communication channel for updates, discussions, and coordination.',
          url: '#telegram-hacktami',
          features: ['Event notifications', 'Challenge discussions', 'Resource sharing', 'Community chat'],
          members: 'Active members',
          activity: 'Daily updates'
        }
      ]
    },
    {
      title: 'Learning Platforms',
      icon: FiTarget,
      description: 'CTF platforms we practice on together.',
      platforms: [
        {
          name: 'OverTheWire',
          description: 'Linux-based wargames that we solve during our Tuesday sessions.',
          url: 'https://overthewire.org',
          features: ['Bandit series', 'Natas web challenges', 'Krypton crypto', 'Progressive difficulty'],
          members: 'Group practice',
          activity: 'Every Tuesday'
        },
        {
          name: 'HackTheBox',
          description: 'Penetration testing practice with retired machines and challenges.',
          url: 'https://hackthebox.com',
          features: ['Retired machines', 'Team collaboration', 'Realistic scenarios', 'TAMI team'],
          members: 'Team members',
          activity: 'Regular practice'
        },
        {
          name: 'Custom CTFs',
          description: 'Member-created challenges and online CTF competitions.',
          url: '#custom-ctfs',
          features: ['Community challenges', 'Online competitions', 'Educational focus', 'Skill building'],
          members: 'All levels',
          activity: 'As available'
        }
      ]
    },
    {
      title: 'Meetups',
      icon: FiCalendar,
      description: 'In-person meetings at Tami hackerspace.',
      platforms: [
        {
          name: 'Tuesday Sessions',
          description: 'Regular meetups every Tuesday at Tami hackerspace in Tel Aviv.',
          url: '#meetup-tuesday',
          features: ['Hands-on practice', 'Collaborative learning', 'All skill levels', 'Free attendance'],
          members: 'Open to all',
          activity: 'Every Tuesday'
        }
      ]
    }
  ]

  const quickLinks = [
    { icon: FiMessageCircle, name: 'Telegram', url: '#telegram', color: '#0088cc' },
    { icon: FiTarget, name: 'OverTheWire', url: 'https://overthewire.org', color: '#ff6b35' },
    { icon: FiTarget, name: 'HackTheBox', url: 'https://hackthebox.com', color: '#9FEF00' },
    { icon: FiCalendar, name: 'Meetup', url: '#meetup', color: '#ed1c40' }
  ]

  return (
    <div className="platforms">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Our Platforms</h1>
            <p>
              The platforms we use for communication, learning, and meeting up. 
              Simple and focused on what we actually need for our Tuesday CTF sessions.
            </p>
            
            {/* Quick Links */}
            <div className="quick-links">
              <h3>Quick Access</h3>
              <div className="quick-links-grid">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quick-link"
                      style={{ '--link-color': link.color }}
                    >
                      <IconComponent />
                      <span>{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <div className="container">
          {platformCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={categoryIndex} className="platform-category">
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent />
                  </div>
                  <div className="category-info">
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </div>
                </div>
                
                <div className="platforms-grid">
                  {category.platforms.map((platform, platformIndex) => (
                    <div key={platformIndex} className="platform-card">
                      <div className="platform-header">
                        <h3>{platform.name}</h3>
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="platform-link"
                          aria-label={`Visit ${platform.name}`}
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                      
                      <p className="platform-description">
                        {platform.description}
                      </p>
                      
                      <div className="platform-stats">
                        <div className="platform-stat">
                          <FiUsers />
                          <span>{platform.members}</span>
                        </div>
                        <div className="platform-stat">
                          <FiTarget />
                          <span>{platform.activity}</span>
                        </div>
                      </div>
                      
                      <div className="platform-features">
                        <h4>Features:</h4>
                        <ul>
                          {platform.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="platform-actions">
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary platform-cta"
                        >
                          Join Platform <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>


      {/* Getting Started */}
      <section className="getting-started-platforms">
        <div className="container">
          <div className="getting-started-content">
            <div className="getting-started-text">
              <h2>How to Join</h2>
              <p>
                Simple steps to start participating in our Tuesday CTF sessions at Tami hackerspace.
              </p>
              
              <div className="recommended-flow">
                <div className="flow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Join Telegram</h4>
                    <p>Connect with our Telegram group to get updates about Tuesday meetings.</p>
                  </div>
                </div>
                
                <div className="flow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Come on Tuesday</h4>
                    <p>Show up at Tami hackerspace in Tel Aviv for our weekly CTF sessions.</p>
                  </div>
                </div>
                
                <div className="flow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Start Practicing</h4>
                    <p>Jump into OverTheWire, HackTheBox, or custom challenges with the group.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="getting-started-cta">
              <h3>Ready to Join?</h3>
              <div className="starter-platforms">
                <a href="#telegram" className="btn btn-primary">
                  Join Telegram
                </a>
                <a href="#meetup" className="btn btn-secondary">
                  Tuesday Meetups
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Platforms
