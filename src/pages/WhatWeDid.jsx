import { FiFlag, FiUsers, FiCalendar, FiExternalLink } from 'react-icons/fi'
import './WhatWeDid.css'

const WhatWeDid = () => {
  const achievements = [
    {
      category: 'CTF & Challenges',
      icon: FiFlag,
      items: [
        {
          title: 'OverTheWire',
          description: 'Linux based different machnies.',
          date: 'Ongoing',
          participants: 'Thuesday HackemTami events',
          highlights: ['Natas', 'Bandit']
        },
        {
          title: 'HackTheBox',
          description: 'CTF platform',
          date: 'Ongoing',
          participants: 'Thuesday HackemTami events + TAMI HTB team',
          highlights: ['Web security', 'Network analysis']
        },
        {
          title: 'Beginner-Friendly CTF',
          description: 'Specially designed challenges for newcomers to the cybersecurity field.',
          date: 'January 2024',
          participants: '180+ participants',
          highlights: ['Educational writeups', 'Guided solutions', 'Mentorship program', 'Basic concepts']
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
            <h1>What We Did</h1>
            <p>
              Explore our journey of achievements, contributions, and impact in the 
              cybersecurity community. From CTF competitions to research publications, 
              here&apos;s how we&apos;ve been making a difference.
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
            <h2>Want to Be Part of Our Next Achievement?</h2>
            <p>
              Join our community and contribute to meaningful cybersecurity initiatives. 
              Together, we can continue making a positive impact in the field.
            </p>
            <div className="cta-buttons">
              <a href="#join" className="btn btn-primary">
                Join Our Community
              </a>
              <a href="#contribute" className="btn btn-secondary">
                Start Contributing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default WhatWeDid
