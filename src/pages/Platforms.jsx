import { FiMessageCircle, FiTarget, FiCalendar, FiExternalLink } from 'react-icons/fi'
import './Platforms.css'

const Platforms = () => {
  const platformCategories = [
    {
      title: 'Communication',
      icon: FiMessageCircle,
      description: 'Stay connected.',
      platforms: [
        {
          name: 'Telegram',
          description: 'Updates and discussions.',
          url: '#telegram',
          features: ['Notifications', 'Chat'],
          members: 'Members',
          activity: 'Daily'
        }
      ]
    },
    {
      title: 'Practice',
      icon: FiTarget,
      description: 'CTF platforms.',
      platforms: [
        {
          name: 'OverTheWire',
          description: 'Linux wargames.',
          url: 'https://overthewire.org',
          features: ['Bandit', 'Natas'],
          members: 'Group',
          activity: 'Tuesday'
        },
        {
          name: 'HackTheBox',
          description: 'Penetration testing.',
          url: 'https://hackthebox.com',
          features: ['Machines', 'Team'],
          members: 'TAMI team',
          activity: 'Regular'
        }
      ]
    }
  ]

  const quickLinks = [
    { icon: FiMessageCircle, name: 'Telegram', url: '#telegram', color: '#0088cc' },
    { icon: FiTarget, name: 'OverTheWire', url: 'https://overthewire.org', color: '#ff6b35' },
    { icon: FiTarget, name: 'HackTheBox', url: 'https://hackthebox.com', color: '#9FEF00' }
  ]

  return (
    <div className="platforms">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Platforms</h1>
            <p>
              What we use.
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


    </div>
  )
}

export default Platforms
