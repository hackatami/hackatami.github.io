import { FiFlag, FiUsers, FiCalendar, FiExternalLink } from 'react-icons/fi'
import './WhatWeDid.css'

const WhatWeDid = () => {
  const achievements = [
    {
      category: 'Current Activities',
      icon: FiFlag,
      items: [
        {
          title: 'OverTheWire Challenges',
          description: 'Regularly practicing on various OverTheWire wargames during our Tuesday sessions.',
          date: 'Ongoing',
          participants: 'Tuesday HackTami group',
          highlights: ['Bandit series', 'Natas web challenges', 'Krypton cryptography', 'Collaborative solving']
        },
        {
          title: 'HackTheBox Practice',
          description: 'Working through HackTheBox machines and challenges as a team.',
          date: 'Ongoing',
          participants: 'Tuesday HackTami group + TAMI HTB team',
          highlights: ['Retired machines', 'Web security', 'Network penetration', 'Team collaboration']
        },
        {
          title: 'Custom CTF Challenges',
          description: 'Participating in and creating custom CTF challenges for group learning.',
          date: 'Ongoing',
          participants: 'Community members',
          highlights: ['Member-created challenges', 'Educational focus', 'Skill progression', 'Knowledge sharing']
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
              Our ongoing activities and practice sessions as we work together to improve 
              our cybersecurity skills through hands-on CTF challenges and collaborative learning.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          {achievements.map((category, categoryIndex) => {
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

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Join Our CTF Sessions?</h2>
            <p>
              Come practice with us every Tuesday at Tami hackerspace. 
              All skill levels welcome - we learn together!
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
export default WhatWeDid
