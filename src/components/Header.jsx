import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiShield, FiGithub } from 'react-icons/fi'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '/what-we-did' },
    { name: 'Our Goals', path: '/future-plans' },
    { name: 'Platforms', path: '/platforms' }
  ]

  const isActivePath = (path) => {
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo">
            <FiShield className="logo-icon" />
            <span className="logo-text">HackTami</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/hacktami"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="Visit Hackatami on GitHub"
          >
            <FiGithub />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-mobile ${isActivePath(item.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
