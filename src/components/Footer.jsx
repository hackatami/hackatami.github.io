import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/hacktami',
      icon: FiGithub
    },
    {
      name: 'Twitter',
      url: '#twitter',
      icon: FiTwitter
    },
    {
      name: 'LinkedIn',
      url: '#linkedin',
      icon: FiLinkedin
    },
    {
      name: 'Email',
      url: 'mailto:contact@hacktami.com',
      icon: FiMail
    }
  ]

  const footerLinks = [
    {
      title: 'Community',
      links: [
        { name: 'Join Us', url: '#join' },
        { name: 'Code of Conduct', url: '#conduct' },
        { name: 'Events', url: '#events' },
        { name: 'Resources', url: '#resources' }
      ]
    },
    {
      title: 'Learning',
      links: [
        { name: 'Tutorials', url: '#tutorials' },
        { name: 'CTF Challenges', url: '#ctf' },
        { name: 'Workshops', url: '#workshops' },
        { name: 'Certifications', url: '#certs' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', url: '#docs' },
        { name: 'Help Center', url: '#help' },
        { name: 'Contact Us', url: '#contact' },
        { name: 'Report Issue', url: '#report' }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Logo and Description */}
            <div className="footer-brand">
              <h3 className="footer-logo">Hackatami</h3>
              <p className="footer-description">
                Empowering the next generation of cybersecurity professionals through
                hands-on learning, ethical hacking, and community collaboration.
              </p>
              
              {/* Social Links */}
              <div className="social-links">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : '_self'}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="social-link"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            <div className="footer-links">
              {footerLinks.map((section) => (
                <div key={section.title} className="footer-section">
                  <h4 className="footer-section-title">{section.title}</h4>
                  <ul className="footer-section-links">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.url} className="footer-link">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © {currentYear} Hackatami. All rights reserved.
              </p>
              <p className="footer-made-with">
                Made with <FiHeart className="heart-icon" /> by the cybersecurity community
              </p>
            </div>
            
            <div className="footer-legal">
              <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
              <a href="#terms" className="footer-legal-link">Terms of Service</a>
              <a href="#cookies" className="footer-legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
