import { FiCalendar, FiUsers, FiArrowRight, FiStar, FiTarget } from 'react-icons/fi'
import './FuturePlans.css'

const FuturePlans = () => {
  const roadmapItems = [
    {
      quarter: 'Now',
      status: 'active',
      title: 'CTF Practice',
      description: 'Weekly practice on OverTheWire and HackTheBox.',
      initiatives: [
        {
          title: 'Tuesday Sessions',
          description: 'Meet every Tuesday at Tami hackerspace for CTF practice.',
          impact: 'Build skills and team coordination',
          timeline: 'Ongoing'
        }
      ]
    },
    {
      quarter: 'Soon',
      status: 'planning',
      title: 'Competitions',
      description: 'Participate in CTF competitions as Tami team.',
      initiatives: [
        {
          title: 'Team Competitions',
          description: 'Join online CTF competitions together.',
          impact: 'Represent Tami hackerspace',
          timeline: 'Next year'
        }
      ]
    },
    {
      quarter: 'Later',
      status: 'vision',
      title: 'Bug Bounties',
      description: 'Collaborative bug bounty sessions.',
      initiatives: [
        {
          title: 'Real Targets',
          description: 'Work together on bug bounty targets.',
          impact: 'Generate income for group and Tami',
          timeline: 'Future'
        }
      ]
    }
  ]

  const currentGoals = [
    {
      icon: FiTarget,
      title: 'Skill Building',
      description: 'Improve cybersecurity skills through Tuesday CTF practice.',
      goals: [
        'OverTheWire challenges',
        'HackTheBox machines',
        'Team coordination'
      ]
    },
    {
      icon: FiUsers,
      title: 'Competition Ready',
      description: 'Represent Tami hackerspace in competitions.',
      goals: [
        'Live CTF participation',
        'Team specialization',
        'Community recognition'
      ]
    },
    {
      icon: FiStar,
      title: 'Bug Bounty Future',
      description: 'Transition to collaborative bug bounty work.',
      goals: [
        'Real target practice',
        'Revenue sharing',
        'Sustainable funding'
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'var(--color-matrix-green)'
      case 'planning': return 'var(--color-warning)'
      case 'vision': return 'var(--color-text-secondary)'
      default: return 'var(--color-text-secondary)'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return FiTarget
      case 'planning': return FiUsers
      case 'vision': return FiStar
      default: return FiTarget
    }
  }

  return (
    <div className="future-plans">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Goals</h1>
            <p>
              Practice → Compete → Earn.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="container">
          <div className="section-header">
            <h2>Roadmap</h2>
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

      {/* Current Goals */}
      <section className="long-term-vision">
        <div className="container">
          <div className="section-header">
            <h2>Focus</h2>
          </div>
          
          <div className="vision-grid">
            {currentGoals.map((goal, index) => {
              const IconComponent = goal.icon
              return (
                <div key={index} className="vision-card">
                  <div className="vision-icon">
                    <IconComponent />
                  </div>
                  
                  <h3>{goal.title}</h3>
                  <p className="vision-description">{goal.description}</p>
                  
                  <div className="vision-goals">
                    <h4>Key Goals:</h4>
                    <ul>
                      {goal.goals.map((goalItem, goalIndex) => (
                        <li key={goalIndex}>{goalItem}</li>
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
              <h2>Join</h2>
              <p>Tuesdays at Tami.</p>
            </div>
            
            <div className="involvement-cta">
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
        </div>
      </section>
    </div>
  )
}

export default FuturePlans
