import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Telegram',
      url: '#telegram',
      icon: FiMail
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hackatami',
      icon: FiGithub
    }
  ]

  const footerLinks = [
    {
      title: 'Join Us',
      links: [
        { name: 'Telegram Group', url: '#telegram' },
        { name: 'Tuesday Meetups', url: '#meetup' },
        { name: 'Tami Hackerspace', url: '#tami' }
      ]
    },
    {
      title: 'Practice',
      links: [
        { name: 'OverTheWire', url: 'https://overthewire.org' },
        { name: 'HackTheBox', url: 'https://hackthebox.com' },
        { name: 'Custom CTFs', url: '#custom-ctfs' }
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
              <h3 className="footer-logo">HackTami</h3>
              <p className="footer-description">
                A cybersecurity learning group meeting every Tuesday at Tami hackerspace in Tel Aviv, 
                working together on CTF challenges and building towards competition readiness.
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
                © {currentYear} HackTami. Part of Tami Hackerspace community.
              </p>
              <p className="footer-made-with">
                Made with <FiHeart className="heart-icon" /> by the HackTami group
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
