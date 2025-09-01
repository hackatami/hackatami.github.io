import { FiShield, FiUsers, FiCode, FiTarget, FiArrowRight, FiBook, FiTool } from 'react-icons/fi'
import './Home.css'

const Home = () => {
  const coreValues = [
    {
      icon: FiShield,
      title: 'Ethical Hacking',
      description: 'We believe in responsible disclosure and ethical security research that makes the digital world safer for everyone.'
    },
    {
      icon: FiUsers,
      title: 'Community Driven',
      description: 'Our strength comes from our diverse community of learners, professionals, and security enthusiasts.'
    },
    {
      icon: FiCode,
      title: 'Hands-on Learning',
      description: 'We learn by doing - through practical exercises, real-world scenarios, and collaborative problem-solving.'
    },
    {
      icon: FiTarget,
      title: 'Mission Focused',
      description: 'Every activity is designed to advance cybersecurity knowledge and create positive impact in the field.'
    }
  ]

  const learningPaths = [
    {
      title: 'For Beginners',
      icon: FiBook,
      description: 'Start your cybersecurity journey with foundational concepts and guided tutorials.',
      features: [
        'Introduction to cybersecurity fundamentals',
        'Basic networking and system administration',
        'Essential security tools and techniques',
        'Safe lab environments for practice'
      ],
      cta: 'Start Learning'
    },
    {
      title: 'For Experienced',
      icon: FiTool,
      description: 'Advance your skills with complex challenges and cutting-edge techniques.',
      features: [
        'Advanced penetration testing methodologies',
        'Malware analysis and reverse engineering',
        'Red team and blue team operations',
        'Research and tool development'
      ],
      cta: 'Join Advanced'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="text-gradient">Hackatami</span>
            </h1>
            <p className="hero-subtitle">
              A cybersecurity community dedicated to ethical hacking, continuous learning, 
              and building a safer digital world through collaboration and knowledge sharing.
            </p>
            <div className="hero-cta">
              <a href="#mission" className="btn btn-primary">
                Learn More <FiArrowRight />
              </a>
              <a href="#getting-started" className="btn btn-secondary">
                Get Started
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="matrix-code">
              <div className="code-lines">
                <span>{'> whoami'}</span>
                <span>hackatami</span>
                <span>{'> ls -la /skills/'}</span>
                <span>penetration_testing.py</span>
                <span>ethical_hacking.sh</span>
                <span>community_building.md</span>
                <span>{'> cat mission.txt'}</span>
                <span>Securing the digital world...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission</h2>
            <p>
              Empowering the next generation of cybersecurity professionals through 
              hands-on learning, ethical practices, and community collaboration.
            </p>
          </div>
          
          <div className="mission-content">
            <div className="mission-text">
              <p>
                At Hackatami, we believe that cybersecurity is not just about technology—it's about 
                people, ethics, and community. We provide a platform where aspiring security 
                professionals can learn, practice, and grow in a supportive environment.
              </p>
              <p>
                Our community focuses on practical, hands-on learning experiences that bridge the 
                gap between theoretical knowledge and real-world application. We emphasize ethical 
                hacking practices and responsible disclosure to ensure our activities contribute 
                positively to the cybersecurity landscape.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Community Members</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">CTF Challenges</div>
              </div>
              <div className="stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Workshops Conducted</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Ethical Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>
              The principles that guide everything we do in the cybersecurity community.
            </p>
          </div>
          
          <div className="values-grid">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="getting-started">
        <div className="container">
          <div className="section-header">
            <h2>Getting Started</h2>
            <p>
              Choose your path based on your current experience level and goals.
            </p>
          </div>
          
          <div className="learning-paths">
            {learningPaths.map((path, index) => {
              const IconComponent = path.icon
              return (
                <div key={index} className="path-card">
                  <div className="path-header">
                    <div className="path-icon">
                      <IconComponent />
                    </div>
                    <h3>{path.title}</h3>
                  </div>
                  <p className="path-description">{path.description}</p>
                  <ul className="path-features">
                    {path.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary path-cta">
                    {path.cta} <FiArrowRight />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join the Community?</h2>
            <p>
              Connect with like-minded cybersecurity enthusiasts and start your journey 
              toward becoming an ethical hacker and security professional.
            </p>
            <div className="cta-buttons">
              <a href="#join" className="btn btn-primary">
                Join Hackatami
              </a>
              <a href="#discord" className="btn btn-secondary">
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
