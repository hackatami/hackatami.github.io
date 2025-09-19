import { FiCalendar, FiUsers, FiTrendingUp, FiArrowRight, FiStar, FiTarget, FiTrophy } from 'react-icons/fi'
import './FuturePlans.css'

const FuturePlans = () => {
  const roadmapItems = [
    {
      quarter: 'Short Term',
      status: 'active',
      title: 'Skill Development',
      description: 'Focus on improving our collective CTF and penetration testing skills.',
      initiatives: [
        {
          title: 'Consistent Tuesday Practice',
          description: 'Regular attendance and focused practice on OverTheWire and HackTheBox challenges.',
          impact: 'Build fundamental skills and team coordination',
          timeline: 'Ongoing'
        },
        {
          title: 'Challenge Diversity',
          description: 'Expand beyond basic challenges to cover web, crypto, forensics, and binary exploitation.',
          impact: 'Develop well-rounded cybersecurity skillset',
          timeline: 'Next 6 months'
        },
        {
          title: 'Team Coordination',
          description: 'Improve collaboration and knowledge sharing during CTF sessions.',
          impact: 'Better team performance in competitive scenarios',
          timeline: 'Ongoing improvement'
        }
      ]
    },
    {
      quarter: 'Medium Term',
      status: 'planning',
      title: 'Competition Readiness',
      description: 'Prepare to represent Tami hackerspace in regional and international competitions.',
      initiatives: [
        {
          title: 'Live CTF Participation',
          description: 'Start participating in online CTF competitions as a team.',
          impact: 'Gain real competition experience and test our skills',
          timeline: '6-12 months'
        },
        {
          title: 'Specialized Roles',
          description: 'Develop individual expertise in different areas (web, crypto, reverse engineering, etc.).',
          impact: 'Create a balanced competitive team',
          timeline: '6-18 months'
        },
        {
          title: 'Local Recognition',
          description: 'Establish HackTami as a respected cybersecurity group in the Israeli community.',
          impact: 'Build reputation and attract more skilled members',
          timeline: '12-18 months'
        }
      ]
    },
    {
      quarter: 'Long Term',
      status: 'vision',
      title: 'Bug Bounty Transition',
      description: 'Move from educational CTFs to real-world bug bounty hunting for profit.',
      initiatives: [
        {
          title: 'Real Target Practice',
          description: 'Transition to collaborative bug bounty sessions targeting real applications.',
          impact: 'Generate income while improving real-world security',
          timeline: '1-2 years'
        },
        {
          title: 'Revenue Sharing',
          description: 'Develop fair system for sharing bug bounty rewards between participants and Tami.',
          impact: 'Sustainable funding for both individuals and the hackerspace',
          timeline: '1-2 years'
        },
        {
          title: 'Mentorship Program',
          description: 'Help train new members while maintaining our competitive edge.',
          impact: 'Grow the community and ensure knowledge transfer',
          timeline: '2+ years'
        }
      ]
    }
  ]

  const currentGoals = [
    {
      icon: FiTarget,
      title: 'Skill Building',
      description: 'Systematically improve our cybersecurity skills through regular practice and learning.',
      goals: [
        'Master fundamental CTF categories',
        'Develop team coordination skills',
        'Build consistent practice routine'
      ]
    },
    {
      icon: FiTrophy,
      title: 'Competition Ready',
      description: 'Become competitive enough to represent Tami hackerspace in cybersecurity competitions.',
      goals: [
        'Participate in live CTF competitions',
        'Establish specialized team roles',
        'Gain recognition in Israeli cybersecurity community'
      ]
    },
    {
      icon: FiUsers,
      title: 'Bug Bounty Future',
      description: 'Transition to real-world bug bounty hunting for practical impact and income.',
      goals: [
        'Collaborative bug bounty sessions',
        'Fair revenue sharing system',
        'Sustainable funding model for Tami'
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
      case 'planning': return FiTrophy
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
            <h1>Our Goals</h1>
            <p>
              Our roadmap for developing from a learning group into a competitive team 
              that represents Tami hackerspace, and eventually transitions to bug bounty work.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="container">
          <div className="section-header">
            <h2>Development Roadmap</h2>
            <p>
              Our progression from beginner CTF group to competitive team and eventually bug bounty hunters.
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

      {/* Current Goals */}
      <section className="long-term-vision">
        <div className="container">
          <div className="section-header">
            <h2>Key Focus Areas</h2>
            <p>
              The main areas we're focusing on to achieve our goals of becoming 
              competitive and eventually transitioning to bug bounty work.
            </p>
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
              <h2>Join Our Journey</h2>
              <p>
                Be part of our development from CTF beginners to competitive team. 
                We welcome all skill levels and learn together every Tuesday.
              </p>
              
              <div className="involvement-ways">
                <div className="involvement-way">
                  <h4>Regular Attendance</h4>
                  <p>Join our Tuesday sessions at Tami hackerspace for consistent practice.</p>
                </div>
                
                <div className="involvement-way">
                  <h4>Skill Sharing</h4>
                  <p>Share your knowledge and learn from others in our collaborative environment.</p>
                </div>
                
                <div className="involvement-way">
                  <h4>Team Building</h4>
                  <p>Help us develop as a cohesive team ready for competitions.</p>
                </div>
              </div>
            </div>
            
            <div className="involvement-cta">
              <div className="cta-buttons">
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

export default FuturePlans
