"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, } from 'lucide-react';
import NextImage from 'next/image'
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' },
  ];

  
  const isActive = (path) => pathname === path;

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <div className="header-container">
      
        <Link href="/" className="header-logo">
          <div className="header-logo-icon">
            
           <NextImage 
              src="/logo.png" 
              alt="Mara Guard Logo" 
              width={40} 
              height={40} 
              className="logo-img"
              priority 
            />
          </div>
          <span className="header-logo-text">Mara Guard</span>
        </Link>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/how-it-works" className="header-cta">
          Get Started
        </Link>

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
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mobile-nav-link ${isActive(link.path) ? 'mobile-nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-cta"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
