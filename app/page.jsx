"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Eye, Radio, ArrowRight, Activity } from 'lucide-react';

// Unified Subcomponent Imports (Ensuring Casing Matches Exactly)
import About from './components/about';
import HowItWorks from './components/how-it-works';
import Contact from './components/Contact';

const Counter = ({ target, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuad = progress * (2 - progress);
            setCount(Math.floor(easeOutQuad * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};

const InteractiveCard = ({ children, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;

    const tiltX = (yPct * -15).toFixed(2);
    const tiltY = (xPct * 15).toFixed(2);

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};


export default function Home() {
  return (
    <div className="home">
      <section className="hero" id="home"   style={{ height: 'auto', minHeight: 'unset', paddingTop: '140px', paddingBottom: '40px' }}>
        <div className="media"></div>
        <div className="overlay"></div>

        <div className="container content">
          <h1 className="title">
            Protecting Prides. Securing Livelihoods.     
          </h1>

          <p className="catchline">
           Solar-powered camera nodes in the buffer zone that use local AI to spot approaching lions, count the pride, and scare them back into the wild.
          </p>

          <div className="ctas">
            <a href="#how-it-works" className="amber">
              See How It Works
              <ArrowRight className="icon" style={{ marginLeft: '0.5rem', display: 'inline-block', verticalAlign: 'middle' }} />
            </a>
            <a href="#contact" className="outline">
              Request Demo
            </a>
          </div>
        </div>


        <div className="fade"></div>
      </section>

      <section className="problem"  >
        <div className="container">
          <div className="grid">
            <div className="story">
              <h2 className="heading">The Collar Constraint challenge</h2>
              <p className="text">
                Traditional tracking methods rely on expensive GPS collars that can cost
                thousands of dollars each. Budget constraints force conservation teams to
                collar only <strong>one lion per pride</strong>, leaving communities vulnerable
                when prides split and untracked members approach livestock areas.
              </p>
              <div className="quote">
                <p className="message">
                  "A single collar costs $3,000-5,000. When a pride of 10 lions splits,
                  tracking just one means we're flying blind for 90% of the threat."
                </p>
                <p className="author">— Conservation Ranger, Maasai Mara</p>
              </div>
            </div>

            <div className="visual">
              <div className="diagram">
                <div className="backdrop"></div>
                <div className="graphic">
                  <div className="tracked">
                    <span className="number">1</span>
                  </div>
                  <div className="untracked">
                    {[2, 3, 4, 5].map((n) => (
                      <div key={n} className="circle">
                        <span>{n}</span>
                      </div>
                    ))}
                  </div>
                  <p className="label">Only 1 tracked per pride</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol" >
        <div className="container">
          <div className="head text-center">
            <h2 className="heading">Introducing Mara Guard our solution</h2>
            <p className="subtitle">
              A shift from passive collar tracking to active, 
              perimeter defense. Track every member of a pride simultaneously,
              without the constraints of individual collaring.
            </p>
          </div>

          <div className="features">
            <InteractiveCard className="card">
              <div className="iconbox savanna">
                <Eye className="icon" />
              </div>
              <h3 className="topic">Whole Pride Visibility</h3>
              <p className="text">
                Our edge sensors detect and track all lions entering the buffer zone,
                regardless of collaring status. No lion goes unnoticed.
              </p>
            </InteractiveCard>

            <InteractiveCard className="card">
              <div className="iconbox amber">
                <Activity className="icon" />
              </div>
              <h3 className="topic">Active Deterrence</h3>
              <p className="text">
                When lions approach, our system activates targeted deterrents which are spotlights
                and sirens that safely redirect them away from livestock areas.
              </p>
            </InteractiveCard>

            <InteractiveCard className="card">
              <div className="iconbox earth">
                <Radio className="icon" />
              </div>
              <h3 className="topic">Real-Time Alerts</h3>
              <p className="text">
                Rangers receive instant notifications via LoRa and cellular networks,
                enabling rapid response and continuous monitoring.
              </p>
            </InteractiveCard>
          </div>

          <div className="banner">
            <div className="item">
              <p className="statistic">
                <Counter target={100} suffix="%" />
              </p>
              <p className="label">Pride Coverage</p>
            </div>
            <div className="item">
              <p className="statistic">
                <Counter target={500} prefix="$" />
              </p>
              <p className="label">Per Unit Cost</p>
            </div>
            <div className="item">
              <p className="statistic">
                <Counter target={90} suffix="%" />
              </p>
              <p className="label">Cost Reduction</p>
            </div>
            <div className="highlight">
              <p className="statistic">24/7</p>
              <p className="label">Solar Powered</p>
            </div>
          </div>
        </div>
      </section>

  
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
        <HowItWorks /> 
        <About />
        <Contact />
      </div>

    </div>
  );
}
