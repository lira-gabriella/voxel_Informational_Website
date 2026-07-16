"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NextImage from 'next/image';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'how-it-works', 'about', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { targetId: 'home', label: 'Home' },
    { targetId: 'how-it-works', label: 'How It Works' },
    { targetId: 'about  ', label: 'About Us' },
    { targetId: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <div className="header-container">
      
        <a href="#home" onClick={() => handleLinkClick('home')} className="header-logo">
          <div className="header-logo-icon">
           <NextImage 
              src="/logo.png" 
              alt="Mara Guard Logo" 
              width={80} 
              height={80} 
              className="logo-img"
              priority 
            />
          </div>
          <span className="header-logo-text">Mara Guard</span>
        </a>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={() => handleLinkClick(link.targetId)}
              className={`nav-link ${activeSection === link.targetId ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" onClick={() => handleLinkClick('contact')} className="header-cta">
          Get Started
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={() => handleLinkClick(link.targetId)}
              className={`mobile-nav-link ${activeSection === link.targetId ? 'mobile-nav-link-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleLinkClick('contact')}
            className="mobile-cta"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
