import { FiFlag, FiUsers, FiBook, FiTool, FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'
import './WhatWeDid.css'

const WhatWeDid = () => {
  const achievements = [
    {
      category: 'CTF Challenges',
      icon: FiFlag,
      items: [
        {
          title: 'Hackatami CTF 2024',
          description: 'Our flagship annual CTF competition featuring 50+ challenges across multiple categories.',
          date: 'March 2024',
          participants: '250+ participants',
          highlights: ['Web exploitation', 'Cryptography', 'Reverse engineering', 'Forensics']
        },
        {
          title: 'Weekly Challenge Series',
          description: 'Regular mini-CTF challenges designed to keep skills sharp and community engaged.',
          date: 'Ongoing',
          participants: '150+ weekly',
          highlights: ['Binary exploitation', 'Web security', 'Network analysis', 'Steganography']
        },
        {
          title: 'Beginner-Friendly CTF',
          description: 'Specially designed challenges for newcomers to the cybersecurity field.',
          date: 'January 2024',
          participants: '180+ participants',
          highlights: ['Educational writeups', 'Guided solutions', 'Mentorship program', 'Basic concepts']
        }
      ]
    },
    {
      category: 'Workshops & Training',
      icon: FiUsers,
      items: [
        {
          title: 'Web Application Security Workshop',
          description: 'Comprehensive hands-on training covering OWASP Top 10 vulnerabilities.',
          date: 'February 2024',
          participants: '85 attendees',
          highlights: ['Live demonstrations', 'Practical labs', 'Real-world scenarios', 'Certification']
        },
        {
          title: 'Penetration Testing Bootcamp',
          description: 'Intensive 3-day bootcamp covering penetration testing methodologies.',
          date: 'December 2023',
          participants: '60 attendees',
          highlights: ['Hands-on practice', 'Industry tools', 'Report writing', 'Ethics focus']
        },
        {
          title: 'Incident Response Training',
          description: 'Training program focused on cybersecurity incident response and forensics.',
          date: 'November 2023',
          participants: '70 attendees',
          highlights: ['Live simulations', 'Forensic tools', 'Team coordination', 'Documentation']
        }
      ]
    },
    {
      category: 'Research & Publications',
      icon: FiBook,
      items: [
        {
          title: 'IoT Security Analysis Paper',
          description: 'Research paper analyzing security vulnerabilities in common IoT devices.',
          date: 'April 2024',
          participants: 'Research Team',
          highlights: ['Vulnerability discovery', 'Responsible disclosure', 'Industry impact', 'Peer review']
        },
        {
          title: 'Machine Learning Security Study',
          description: 'Investigation into adversarial attacks on machine learning models.',
          date: 'January 2024',
          participants: 'ML Security Group',
          highlights: ['Novel attack vectors', 'Defense mechanisms', 'Academic publication', 'Conference presentation']
        },
        {
          title: 'Blockchain Security Audit',
          description: 'Security audit of smart contracts and blockchain implementations.',
          date: 'October 2023',
          participants: 'Blockchain Team',
          highlights: ['Smart contract analysis', 'Vulnerability assessment', 'Best practices', 'Community sharing']
        }
      ]
    },
    {
      category: 'Tool Development',
      icon: FiTool,
      items: [
        {
          title: 'HackaScan - Vulnerability Scanner',
          description: 'Open-source vulnerability scanner designed for educational purposes.',
          date: 'Ongoing',
          participants: 'Dev Community',
          highlights: ['Open source', 'Educational focus', 'Active development', '500+ GitHub stars']
        },
        {
          title: 'CTF Platform',
          description: 'Custom-built platform for hosting and managing CTF competitions.',
          date: 'March 2024',
          participants: 'Platform Team',
          highlights: ['Real-time scoring', 'Team management', 'Challenge hosting', 'Analytics dashboard']
        },
        {
          title: 'Security Automation Scripts',
          description: 'Collection of scripts for automating common security tasks.',
          date: 'February 2024',
          participants: 'Automation Team',
          highlights: ['Python scripts', 'Bash automation', 'Documentation', 'Community contributions']
        }
      ]
    },
    {
      category: 'Community Partnerships',
      icon: FiAward,
      items: [
        {
          title: 'University Collaboration Program',
          description: 'Partnership with local universities to provide cybersecurity education.',
          date: 'Ongoing',
          participants: '5 universities',
          highlights: ['Guest lectures', 'Internship programs', 'Research collaboration', 'Student mentorship']
        },
        {
          title: 'Industry Advisory Board',
          description: 'Board of industry professionals providing guidance and mentorship.',
          date: 'Established 2023',
          participants: '12 industry experts',
          highlights: ['Career guidance', 'Industry insights', 'Networking events', 'Job placement']
        },
        {
          title: 'Open Source Contributions',
          description: 'Active contributions to major cybersecurity open source projects.',
          date: 'Ongoing',
          participants: 'Community members',
          highlights: ['Bug fixes', 'Feature additions', 'Documentation', 'Security improvements']
        }
      ]
    }
  ]

  const stats = [
    { label: 'Total Events Organized', value: '25+' },
    { label: 'Community Members Trained', value: '500+' },
    { label: 'CTF Challenges Created', value: '200+' },
    { label: 'Research Papers Published', value: '8' },
    { label: 'Tools Developed', value: '15+' },
    { label: 'University Partnerships', value: '5' }
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
              here's how we've been making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
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

      {/* Recognition Section */}
      <section className="recognition">
        <div className="container">
          <div className="section-header">
            <h2>Recognition & Impact</h2>
            <p>
              Our contributions have been recognized by the cybersecurity community 
              and have made a meaningful impact on security education and research.
            </p>
          </div>
          
          <div className="recognition-grid">
            <div className="recognition-card">
              <h3>Community Recognition</h3>
              <ul>
                <li>Featured in Cybersecurity Education Quarterly</li>
                <li>Winner of "Best Community Initiative" at SecCon 2024</li>
                <li>Recognized by SANS Institute for educational contributions</li>
                <li>Highlighted in InfoSec community newsletter</li>
              </ul>
            </div>
            
            <div className="recognition-card">
              <h3>Media Coverage</h3>
              <ul>
                <li>Interview on CyberSecTalk Podcast</li>
                <li>Article feature in Security Magazine</li>
                <li>Panel discussion at RSA Conference</li>
                <li>Guest speaker at DEF CON Education Track</li>
              </ul>
            </div>
            
            <div className="recognition-card">
              <h3>Academic Impact</h3>
              <ul>
                <li>Research cited in 15+ academic papers</li>
                <li>Curriculum adopted by 3 universities</li>
                <li>Tools used in 10+ academic courses</li>
                <li>Student thesis supervision and mentorship</li>
              </ul>
            </div>
          </div>
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
