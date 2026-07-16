"use client";
import React from 'react';
import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Monitor, 
  Handshake, 
  Heart, 
  Send, 
  CheckCircle, 
  Shield 
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    type: 'General Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      organization: '',
      email: '',
      type: 'General Inquiry',
      message: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact" id="contact">
      
      <section className="section hero-section gradient-hero">
        <div className="container">
          <div className="page-hero-badge badge badge-savanna">
            <Mail className="badge-icon-sm" />
            Get in Touch
          </div>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">
            Ready to protect wildlife and communities? We'd love to hear from you.
            Whether you're a conservation organization, ranger team, or donor,
            let's start a conversation.
          </p>
        </div>
      </section>

    
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Send a Message</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle className="success-icon" />
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-text">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="organization" className="form-label">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Conservation Trust"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type" className="form-label">Message Type *</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Donation">Donation Inquiry</option>
                      <option value="Demo">Dashboard Demo Request</option>
                      <option value="Support">Technical Support</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    <Send className="btn-icon" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="contact-sidebar">
              <div className="info-card">
                <h2 className="info-title">Contact Information</h2>
                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon-bg">
                      <MapPin className="info-icon" />
                    </div>
                    <div>
                      <h3 className="info-label">HQ Location</h3>
                      <p className="info-value">
                        Maasai Mara Conservation Center<br />
                        Narok County, Kenya
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon-bg">
                      <Mail className="info-icon" />
                    </div>
                    <div>
                      <h3 className="info-label">Support Email</h3>
                      <a href="mailto:info@maraguard.org" className="info-link">
                        info@maraguard.org
                      </a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon-bg">
                      <Phone className="info-icon" />
                    </div>
                    <div>
                      <h3 className="info-label">Phone</h3>
                      <p className="info-value">+254 700 123 456</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="demo-card">
                <div className="demo-header">
                  <Monitor className="demo-icon" />
                  <h3 className="demo-title">Dashboard Demo</h3>
                </div>
                <p className="demo-text">
                  Ranger teams and conservation organizations can request a live
                  demonstration of our monitoring dashboard. See real-time detection
                  alerts, historical data analysis, and migration pattern tracking
                  in action.
                </p>
                <div className="demo-badge">
                  <Shield className="demo-badge-icon" />
                  <span>Available for registered teams</span>
                </div>
              </div>

              <div className="quick-links">
                <div className="quick-link-card">
                  <Handshake className="quick-link-icon" />
                  <h3 className="quick-link-title">Partnership</h3>
                  <p className="quick-link-text">
                    Interested in deploying Mara Guard in your conservation area?
                  </p>
                </div>
                <div className="quick-link-card">
                  <Heart className="quick-link-icon" />
                  <h3 className="quick-link-title">Donations</h3>
                  <p className="quick-link-text">
                    Support our mission to protect wildlife and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="map-card">
            <MapPin className="map-icon" />
            <h2 className="map-title">Working Across the Maasai Mara</h2>
            <p className="map-text">
              Our field deployment spans key conflict zones where human-lion encounters
              are most frequent. Each unit is strategically placed to maximize protection
              coverage for both wildlife corridors and livestock areas.
            </p>
            <div className="zones-grid">
              {['Northern', 'Central', 'Eastern', 'Southern', 'Western', 'Mara River'].map((zone) => (
                <div key={zone} className="zone-item">
                  <div className="zone-dot"></div>
                  <p className="zone-name">{zone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



