import { NavLink } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, BarChart3 } from 'lucide-react';
import '../styles/Navbar.css'; 

function Navbar() {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Learning', path: '/road-guard-learning' },
    { icon: GraduationCap, label: 'Education', path: '/road-safety-educational' },
    { icon: BarChart3, label: 'Statistics', path: '/statistics' }
  ];

  return (
    <nav className="modern-navbar">
      {/* Logo */}
      <NavLink to="/" className="navbar-logo">
        Road Safety
      </NavLink>

      {/* Navigation Card */}
      <div className="navigation-card">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === '/'}
              className="nav-tab"
            >
              <div className="icon-wrapper">
                <Icon size={20} strokeWidth={2.5} />
              </div>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;