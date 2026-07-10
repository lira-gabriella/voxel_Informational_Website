import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  Target,
  Shield,
  Leaf,
  Users,
  Globe,
  
  
} from 'lucide-react';
import './about.css';


const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Human-Wildlife Coexistence',
      description: 'We believe communities and wildlife can thrive together. Our technology enables peaceful coexistence rather than conflict.',
    },
    {
      icon: Leaf,
      title: 'Environmental Sustainability',
      description: 'Solar-powered, low-impact systems that protect wildlife without contributing to climate change or habitat degradation.',
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Building local capacity by training rangers and conservation teams to deploy and maintain the technology themselves.',
    },
    {
      icon: Globe,
      title: 'Accessible Technology',
      description: 'Open-source principles and affordable hardware make advanced conservation technology available to all.',
    },
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Research Phase',
      description: 'Collaboration with Maasai Mara conservationists to understand the collar constraint problem.',
    },
    {
      year: '2023',
      title: 'Prototype Development',
      description: 'First field trials with radar sensors and edge AI detection models.',
    },
    {
      year: '2024',
      title: 'Pilot Deployment',
      description: '10 units deployed across protected livestock areas with promising results.',
    },
    {
      year: '2025',
      title: 'Scale-Up',
      description: 'Expanding coverage and enhancing dashboard capabilities for rangers.',
    },
  ];

  const ValueIcon = ({ icon: Icon }) => (
    <div className="value-icon-bg">
      
    </div>
  );

  return (
    <div className="about" id="about">
      
      <section className="about">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="page-hero-badge badge badge-amber">
           
            Our Story
          </div>
          <h1 className="page-hero-title">About Mara Guard</h1>
          <p className="page-hero-subtitle">
            Born from the realities of conservation work in the Maasai Mara,
            we're building technology that protects both wildlife and communities.
          </p>
        </div>
      </section>
 <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              
                
                Our Mission
              
              <h2 className="section-title">
                Eliminating Human-Lion Conflict Through Accessible Edge AI
              </h2>
              <p className="section-text">
                We exist to bridge the gap between cutting-edge technology and frontline conservation.Every tool we build is designed with one goal: to preserve biodiversity while securing livestock for local farmers.
                </p>
              <p className="section-text">
                We believe that effective wildlife protection shouldn't require million-dollar budgets. Our solar-powered, edge-computing approach brings professional-grade monitoring and deterrence within reach of every conservation team.
                 </p>

              <div className="deterrence-box">
                <div className="deterrence-content">
                                   <div>
                    <p className="deterrence-title">Harmless Deterrence</p>
                    <p className="deterrence-text">
                      Our spotlight and siren system safely redirects lions without causing physical harm—protecting both the livestock and the lions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="section why-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Mara Guard Exists</h2>
            <p className="section-subtitle mx-auto">
              The transition from expensive single-lion tracking to whole-pride edge security represents a fundamental shift in conservation technology.
            </p>
          </div>
 <div className="balance-banner">
            <div className="balance-content">
              <h3 className="balance-title">
                Protecting Livelihoods, Preserving Wildlife
              </h3>
              <p className="balance-text">
                Every lion that's safely deterred saves a farmer's livestock and that lion's life. Traditional retaliation kills protectors. Mara Guard  enables peaceful resolution for both sides.<br/>
                100% Non-lethal deterrence and $0 Post-deployment power cos
               </p>
            </div>
          </div>
      </div>
</section>
     <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                
                  
               
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;