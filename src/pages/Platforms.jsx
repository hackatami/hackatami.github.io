import { FiMessageCircle, FiTarget, FiUsers, FiBookOpen, FiExternalLink, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Platforms.css'

const Platforms = () => {
  const platformCategories = [
    {
      title: 'Communication & Community',
      icon: FiMessageCircle,
      description: 'Connect with fellow cybersecurity enthusiasts and stay updated on community activities.',
      platforms: [
        {
          name: 'Discord Server',
          description: 'Our primary community hub for real-time discussions, help, and announcements.',
          url: '#discord-hackatami',
          features: ['Real-time chat', 'Voice channels', 'Study groups', 'CTF coordination'],
          members: '2,500+ members',
          activity: 'Very Active'
        },
        {
          name: 'Telegram Channel',
          description: 'Quick updates, announcements, and mobile-friendly community interaction.',
          url: '#telegram-hackatami',
          features: ['Daily updates', 'News sharing', 'Quick polls', 'Mobile optimized'],
          members: '1,800+ subscribers',
          activity: 'Daily updates'
        },
        {
          name: 'Reddit Community',
          description: 'Long-form discussions, resource sharing, and community-driven content.',
          url: '#reddit-r-hackatami',
          features: ['Discussion threads', 'Resource sharing', 'AMA sessions', 'Peer support'],
          members: '5,200+ members',
          activity: 'Active discussions'
        },
        {
          name: 'Matrix/Element',
          description: 'Privacy-focused communication for sensitive security discussions.',
          url: '#matrix-hackatami',
          features: ['End-to-end encryption', 'Decentralized', 'Privacy focused', 'Security discussions'],
          members: '800+ members',
          activity: 'Moderate'
        }
      ]
    },
    {
      title: 'Practice & Learning Platforms',
      icon: FiTarget,
      description: 'Hands-on platforms for developing and testing your cybersecurity skills.',
      platforms: [
        {
          name: 'HackTheBox Teams',
          description: 'Team-based penetration testing practice with real-world scenarios.',
          url: '#htb-team-hackatami',
          features: ['Team challenges', 'Ranking system', 'Realistic scenarios', 'Progress tracking'],
          members: 'Elite team',
          activity: 'Weekly challenges'
        },
        {
          name: 'TryHackMe Rooms',
          description: 'Custom learning rooms and guided cybersecurity tutorials.',
          url: '#thm-hackatami',
          features: ['Guided learning', 'Custom rooms', 'Achievement system', 'Beginner friendly'],
          members: '1,200+ learners',
          activity: 'New content weekly'
        },
        {
          name: 'PicoCTF Training',
          description: 'Educational CTF platform for skill development and competition preparation.',
          url: '#picoctf-hackatami',
          features: ['Educational focus', 'Progressive difficulty', 'Detailed writeups', 'Team competitions'],
          members: '900+ participants',
          activity: 'Ongoing challenges'
        },
        {
          name: 'Custom Lab Environment',
          description: 'Our own virtualized environment for safe security testing and learning.',
          url: '#labs-hackatami',
          features: ['Isolated environments', 'Custom scenarios', 'Safe testing', 'Guided tutorials'],
          members: 'Premium members',
          activity: '24/7 access'
        }
      ]
    },
    {
      title: 'Professional Networks',
      icon: FiUsers,
      description: 'Professional networking and career development opportunities.',
      platforms: [
        {
          name: 'LinkedIn Group',
          description: 'Professional networking, job opportunities, and industry insights.',
          url: '#linkedin-hackatami',
          features: ['Job postings', 'Industry news', 'Professional networking', 'Career advice'],
          members: '3,500+ professionals',
          activity: 'Daily engagement'
        },
        {
          name: 'Twitter Community',
          description: 'Latest cybersecurity news, threat intelligence, and community updates.',
          url: '#twitter-hackatami',
          features: ['Real-time updates', 'Threat intelligence', 'Industry news', 'Live tweeting events'],
          members: '4,200+ followers',
          activity: 'Multiple daily posts'
        },
        {
          name: 'Meetup Groups',
          description: 'Local and virtual meetups for in-person networking and knowledge sharing.',
          url: '#meetup-hackatami',
          features: ['Local chapters', 'Virtual events', 'Workshops', 'Networking sessions'],
          members: '15+ cities',
          activity: 'Monthly events'
        },
        {
          name: 'Slack Workspace',
          description: 'Professional workspace for project collaboration and team communication.',
          url: '#slack-hackatami',
          features: ['Project channels', 'File sharing', 'Integration tools', 'Team collaboration'],
          members: 'Core contributors',
          activity: 'Business hours'
        }
      ]
    },
    {
      title: 'Research & Knowledge',
      icon: FiBookOpen,
      description: 'Platforms for sharing research, documentation, and educational content.',
      platforms: [
        {
          name: 'GitHub Organization',
          description: 'Open-source tools, research code, and collaborative development projects.',
          url: '#github-hackatami',
          features: ['Open source projects', 'Research repositories', 'Collaboration tools', 'Issue tracking'],
          members: '1,500+ contributors',
          activity: 'Daily commits'
        },
        {
          name: 'GitLab Instance',
          description: 'Private repositories for sensitive research and internal project development.',
          url: '#gitlab-hackatami',
          features: ['Private repositories', 'CI/CD pipelines', 'Issue management', 'Wiki documentation'],
          members: 'Research team',
          activity: 'Active development'
        },
        {
          name: 'Notion Workspace',
          description: 'Collaborative documentation, research notes, and knowledge management.',
          url: '#notion-hackatami',
          features: ['Shared documentation', 'Research databases', 'Meeting notes', 'Knowledge base'],
          members: 'Team members',
          activity: 'Regular updates'
        },
        {
          name: 'YouTube Channel',
          description: 'Educational videos, tutorials, and recorded workshops for the community.',
          url: '#youtube-hackatami',
          features: ['Tutorial videos', 'Workshop recordings', 'Live streams', 'Educational content'],
          members: '8,500+ subscribers',
          activity: 'Weekly uploads'
        }
      ]
    }
  ]

  const quickLinks = [
    { icon: FiGithub, name: 'GitHub', url: '#github', color: 'var(--color-text-primary)' },
    { icon: FiMessageCircle, name: 'Discord', url: '#discord', color: '#5865F2' },
    { icon: FiLinkedin, name: 'LinkedIn', url: '#linkedin', color: '#0077B5' },
    { icon: FiTwitter, name: 'Twitter', url: '#twitter', color: '#1DA1F2' },
    { icon: FiTarget, name: 'HTB', url: '#htb', color: '#9FEF00' },
    { icon: FiBookOpen, name: 'YouTube', url: '#youtube', color: '#FF0000' }
  ]

  return (
    <div className="platforms">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Our Platforms</h1>
            <p>
              Discover all the platforms where the Hackatami community connects, learns, 
              and collaborates. From communication channels to practice environments, 
              find the right platform for your cybersecurity journey.
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

      {/* Platform Guidelines */}
      <section className="platform-guidelines">
        <div className="container">
          <div className="section-header">
            <h2>Platform Guidelines</h2>
            <p>
              To maintain a positive and productive community environment, 
              please follow these guidelines across all our platforms.
            </p>
          </div>
          
          <div className="guidelines-grid">
            <div className="guideline-card">
              <h3>Respectful Communication</h3>
              <ul>
                <li>Treat all community members with respect and professionalism</li>
                <li>Use inclusive language and avoid offensive content</li>
                <li>Listen actively and engage constructively in discussions</li>
                <li>Provide helpful and accurate information when possible</li>
              </ul>
            </div>
            
            <div className="guideline-card">
              <h3>Ethical Practices</h3>
              <ul>
                <li>Share only ethical hacking techniques and legal security research</li>
                <li>Respect responsible disclosure principles</li>
                <li>Do not share or discuss illegal activities or malicious tools</li>
                <li>Focus on defensive and educational security content</li>
              </ul>
            </div>
            
            <div className="guideline-card">
              <h3>Quality Content</h3>
              <ul>
                <li>Share relevant, high-quality cybersecurity content</li>
                <li>Provide context and explanations for shared resources</li>
                <li>Use appropriate channels for different types of content</li>
                <li>Search before posting to avoid duplicate discussions</li>
              </ul>
            </div>
            
            <div className="guideline-card">
              <h3>Privacy & Security</h3>
              <ul>
                <li>Protect personal and sensitive information</li>
                <li>Use secure communication channels for sensitive discussions</li>
                <li>Respect confidentiality and non-disclosure agreements</li>
                <li>Report security concerns through appropriate channels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="getting-started-platforms">
        <div className="container">
          <div className="getting-started-content">
            <div className="getting-started-text">
              <h2>New to Our Community?</h2>
              <p>
                We recommend starting with these platforms to get the most out of 
                your Hackatami community experience.
              </p>
              
              <div className="recommended-flow">
                <div className="flow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Join Discord</h4>
                    <p>Start with our Discord server for real-time community interaction and support.</p>
                  </div>
                </div>
                
                <div className="flow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Follow on Social</h4>
                    <p>Connect on LinkedIn and Twitter for professional networking and updates.</p>
                  </div>
                </div>
                
                <div className="flow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Explore Learning</h4>
                    <p>Check out our practice platforms and GitHub for hands-on learning opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="getting-started-cta">
              <h3>Ready to Get Started?</h3>
              <div className="starter-platforms">
                <a href="#discord" className="btn btn-primary">
                  Join Discord
                </a>
                <a href="#github" className="btn btn-secondary">
                  Explore GitHub
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
