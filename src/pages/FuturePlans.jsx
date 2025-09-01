import { FiCalendar, FiUsers, FiTrendingUp, FiArrowRight, FiStar, FiCheck, FiClock } from 'react-icons/fi'
import './FuturePlans.css'

const FuturePlans = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2025',
      status: 'planning',
      title: 'Advanced Learning Paths',
      description: 'Launch specialized learning tracks for advanced cybersecurity topics.',
      initiatives: [
        {
          title: 'Malware Analysis Track',
          description: 'Comprehensive course covering static and dynamic malware analysis techniques.',
          impact: 'Enable members to analyze and understand modern threats',
          timeline: 'January - March 2025'
        },
        {
          title: 'Red Team Operations',
          description: 'Advanced penetration testing and red team methodology training.',
          impact: 'Develop advanced offensive security capabilities',
          timeline: 'February - April 2025'
        },
        {
          title: 'Cloud Security Specialization',
          description: 'Focus on AWS, Azure, and GCP security best practices and assessments.',
          impact: 'Address growing demand for cloud security expertise',
          timeline: 'March - May 2025'
        }
      ]
    },
    {
      quarter: 'Q2 2025',
      status: 'planning',
      title: 'Platform Improvements',
      description: 'Major upgrades to our learning platform and community tools.',
      initiatives: [
        {
          title: 'AI-Powered Learning Assistant',
          description: 'Integration of AI to provide personalized learning recommendations.',
          impact: 'Improve learning efficiency and personalization',
          timeline: 'April - June 2025'
        },
        {
          title: 'Virtual Lab Environment',
          description: 'Cloud-based isolated environments for safe security testing.',
          impact: 'Provide accessible hands-on learning environments',
          timeline: 'May - July 2025'
        },
        {
          title: 'Mobile Learning App',
          description: 'Mobile application for on-the-go learning and community interaction.',
          impact: 'Increase accessibility and engagement',
          timeline: 'June - August 2025'
        }
      ]
    },
    {
      quarter: 'Q3 2025',
      status: 'research',
      title: 'Community Expansion',
      description: 'Scale our community and establish new partnerships.',
      initiatives: [
        {
          title: 'International Chapters',
          description: 'Establish Hackatami chapters in major cities worldwide.',
          impact: 'Create global cybersecurity learning network',
          timeline: 'July - September 2025'
        },
        {
          title: 'Industry Mentorship Program',
          description: 'Connect members with experienced cybersecurity professionals.',
          impact: 'Provide career guidance and networking opportunities',
          timeline: 'August - October 2025'
        },
        {
          title: 'Corporate Training Solutions',
          description: 'Develop customized cybersecurity training for organizations.',
          impact: 'Expand impact to corporate security teams',
          timeline: 'September - November 2025'
        }
      ]
    },
    {
      quarter: 'Q4 2025',
      status: 'ideation',
      title: 'Certification Programs',
      description: 'Launch industry-recognized certification programs.',
      initiatives: [
        {
          title: 'Hackatami Certified Ethical Hacker',
          description: 'Comprehensive certification program covering ethical hacking fundamentals.',
          impact: 'Provide recognized credentials for career advancement',
          timeline: 'October - December 2025'
        },
        {
          title: 'Incident Response Specialist',
          description: 'Specialized certification in cybersecurity incident response.',
          impact: 'Address skill gap in incident response capabilities',
          timeline: 'November 2025 - January 2026'
        },
        {
          title: 'Security Awareness Trainer',
          description: 'Certification for professionals training non-technical staff.',
          impact: 'Improve overall organizational security posture',
          timeline: 'December 2025 - February 2026'
        }
      ]
    }
  ]

  const upcomingEvents = [
    {
      title: 'Hackatami Global CTF 2025',
      date: 'March 15-17, 2025',
      description: 'Our biggest CTF competition yet, featuring international teams and advanced challenges.',
      registrations: 'Opening February 1st',
      prizes: '$10,000 in prizes'
    },
    {
      title: 'Cybersecurity Career Fair',
      date: 'May 20, 2025',
      description: 'Connect with leading cybersecurity employers and explore career opportunities.',
      registrations: 'Opening March 1st',
      prizes: '50+ companies participating'
    },
    {
      title: 'Annual Security Research Conference',
      date: 'August 12-14, 2025',
      description: 'Premier conference showcasing latest cybersecurity research and innovations.',
      registrations: 'Opening June 1st',
      prizes: '100+ speakers expected'
    }
  ]

  const longTermVision = [
    {
      icon: FiStar,
      title: 'Global Impact',
      description: 'Become the leading global platform for cybersecurity education and community building.',
      goals: [
        '1 million active community members worldwide',
        'Presence in 50+ countries',
        'Recognition as top cybersecurity education platform'
      ]
    },
    {
      icon: FiUsers,
      title: 'Educational Excellence',
      description: 'Set the standard for practical, ethical cybersecurity education.',
      goals: [
        'University-level accredited programs',
        'Industry-standard certification pathways',
        'Continuous curriculum innovation'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation Leadership',
      description: 'Drive innovation in cybersecurity education and community engagement.',
      goals: [
        'Cutting-edge learning technologies',
        'Novel security research contributions',
        'Thought leadership in ethical hacking'
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'planning': return 'var(--color-matrix-green)'
      case 'research': return 'var(--color-warning)'
      case 'ideation': return 'var(--color-text-secondary)'
      default: return 'var(--color-text-secondary)'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'planning': return FiCheck
      case 'research': return FiClock
      case 'ideation': return FiStar
      default: return FiClock
    }
  }

  return (
    <div className="future-plans">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Future Plans</h1>
            <p>
              Discover our roadmap for advancing cybersecurity education, 
              expanding our community, and driving innovation in ethical hacking. 
              Join us as we shape the future of cybersecurity learning.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="container">
          <div className="section-header">
            <h2>2025 Roadmap</h2>
            <p>
              Our strategic plan for the next year, focusing on educational excellence, 
              platform innovation, and community growth.
            </p>
          </div>

          <div className="roadmap-timeline">
            {roadmapItems.map((item, index) => {
              const StatusIcon = getStatusIcon(item.status)
              return (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div 
                      className="timeline-icon"
                      style={{ backgroundColor: getStatusColor(item.status) }}
                    >
                      <StatusIcon />
                    </div>
                    <div className="timeline-quarter">{item.quarter}</div>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{item.title}</h3>
                      <span 
                        className="timeline-status"
                        style={{ color: getStatusColor(item.status) }}
                      >
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                    
                    <p className="timeline-description">{item.description}</p>
                    
                    <div className="initiatives-grid">
                      {item.initiatives.map((initiative, initiativeIndex) => (
                        <div key={initiativeIndex} className="initiative-card">
                          <h4>{initiative.title}</h4>
                          <p className="initiative-description">{initiative.description}</p>
                          <div className="initiative-meta">
                            <div className="initiative-impact">
                              <strong>Impact:</strong> {initiative.impact}
                            </div>
                            <div className="initiative-timeline">
                              <FiCalendar />
                              {initiative.timeline}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Major Events</h2>
            <p>
              Mark your calendars for these exciting events that will bring our 
              community together and advance cybersecurity education.
            </p>
          </div>
          
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <div className="event-date">
                    <FiCalendar />
                    {event.date}
                  </div>
                </div>
                
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="event-detail">
                    <strong>Registration:</strong> {event.registrations}
                  </div>
                  <div className="event-detail">
                    <strong>Special:</strong> {event.prizes}
                  </div>
                </div>
                
                <button className="btn btn-primary event-cta">
                  Learn More <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="long-term-vision">
        <div className="container">
          <div className="section-header">
            <h2>Long-term Vision</h2>
            <p>
              Our ambitious goals for transforming cybersecurity education 
              and building a global community of ethical hackers.
            </p>
          </div>
          
          <div className="vision-grid">
            {longTermVision.map((vision, index) => {
              const IconComponent = vision.icon
              return (
                <div key={index} className="vision-card">
                  <div className="vision-icon">
                    <IconComponent />
                  </div>
                  
                  <h3>{vision.title}</h3>
                  <p className="vision-description">{vision.description}</p>
                  
                  <div className="vision-goals">
                    <h4>Key Goals:</h4>
                    <ul>
                      {vision.goals.map((goal, goalIndex) => (
                        <li key={goalIndex}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <div className="container">
          <div className="involvement-content">
            <div className="involvement-text">
              <h2>Help Shape Our Future</h2>
              <p>
                Our future plans are driven by community input and collaboration. 
                We want to hear your ideas, suggestions, and feedback to ensure 
                we're building the cybersecurity education platform you need.
              </p>
              
              <div className="involvement-ways">
                <div className="involvement-way">
                  <h4>Community Feedback</h4>
                  <p>Share your thoughts on our roadmap and suggest new initiatives.</p>
                </div>
                
                <div className="involvement-way">
                  <h4>Volunteer Opportunities</h4>
                  <p>Join our teams and help implement these exciting projects.</p>
                </div>
                
                <div className="involvement-way">
                  <h4>Partnership Proposals</h4>
                  <p>Explore collaboration opportunities with organizations and educators.</p>
                </div>
              </div>
            </div>
            
            <div className="involvement-cta">
              <div className="cta-buttons">
                <a href="#feedback" className="btn btn-primary">
                  Share Feedback
                </a>
                <a href="#volunteer" className="btn btn-secondary">
                  Volunteer With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FuturePlans
