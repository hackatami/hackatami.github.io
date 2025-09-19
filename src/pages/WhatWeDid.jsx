import { FiFlag, FiUsers, FiCalendar, FiExternalLink } from 'react-icons/fi'
import './WhatWeDid.css'

const WhatWeDid = () => {
  const activities = [
    {
      category: 'Activities',
      icon: FiFlag,
      items: [
        {
          title: 'OverTheWire',
          description: 'Linux wargames practice.',
          date: 'Ongoing',
          participants: 'Tuesday group',
          highlights: ['Bandit', 'Natas']
        },
        {
          title: 'HackTheBox',
          description: 'Penetration testing practice.',
          date: 'Ongoing', 
          participants: 'TAMI team',
          highlights: ['Retired machines', 'Team solving']
        }
      ]
    }
  ]


  return (
    <div className="what-we-did">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>What We Do</h1>
            <p>
              Tuesday CTF practice at Tami hackerspace.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="achievements">
        <div className="container">
          {activities.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={categoryIndex} className="achievement-category">
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent />
                  </div>
                  <h2>{category.category}</h2>
                </div>
                
                <div className="achievements-grid">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="achievement-card">
                      <div className="achievement-header">
                        <h3>{item.title}</h3>
                        <div className="achievement-meta">
                          <span className="achievement-date">
                            <FiCalendar />
                            {item.date}
                          </span>
                          <span className="achievement-participants">
                            <FiUsers />
                            {item.participants}
                          </span>
                        </div>
                      </div>
                      
                      <p className="achievement-description">
                        {item.description}
                      </p>
                      
                      <div className="achievement-highlights">
                        <h4>Key Highlights:</h4>
                        <ul>
                          {item.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="achievement-actions">
                        <button className="btn btn-secondary">
                          Learn More <FiExternalLink />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Join */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us</h2>
            <p>Tuesdays at Tami hackerspace.</p>
            <div className="cta-buttons">
              <a href="#telegram" className="btn btn-primary">
                Telegram
              </a>
              <a href="#meetup" className="btn btn-secondary">
                Meetup
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default WhatWeDid
