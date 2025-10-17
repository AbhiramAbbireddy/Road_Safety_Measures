import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, BarChart3, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Learning', path: '/road-guard-learning' },
    { icon: GraduationCap, label: 'Education', path: '/road-safety-educational' },
    { icon: BarChart3, label: 'Statistics', path: '/statistics' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="modern-navbar">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          Road Safety
        </NavLink>

        {/* Desktop Navigation */}
        <div className="navigation-card">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.path} end={item.path === '/'} className="nav-tab">
              <div className="icon-wrapper"><item.icon size={20} strokeWidth={2.5} /></div>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Open menu">
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay & Sidebar */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
      <div className={`mobile-menu-sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">Road Safety</span>
          <button onClick={toggleMobileMenu} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <div className="sidebar-links">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.path} className="sidebar-link" onClick={toggleMobileMenu}>
              <div className="icon-wrapper"><item.icon size={22} strokeWidth={2} /></div>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;