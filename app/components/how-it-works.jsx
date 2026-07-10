import { useState } from 'react';
import {
  Radar,
  Camera,
  Cpu,
  AlertTriangle,
  Sun,
  Battery,
  Zap,
  Radio,
  Wifi,
  Eye,
  Target,
  Filter,
  Volume2,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import './how-it-works.css';



const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('hardware');

  const steps = [
    {
      number: '01',
      title: 'Detect',
      icon: Radar,
      description: 'All-weather radar sensor detects physical movement up to 6 meters away in any conditions—day, night, rain, or dust.',
      color: 'savanna',
    },
    {
      number: '02',
      title: 'Capture & Process',
      icon: Camera,
      description: 'Radar triggers a video camera to capture live footage, sent instantly to an on-board Raspberry Pi 5 computer.',
      color: 'earth',
    },
    {
      number: '03',
      title: 'Analyze',
      icon: Cpu,
      description: 'The Edge AI analyzes frames locally with YOLOv8. Cows, herders, and blowing brush are filtered out,only high-confidence lion matches trigger action.',
      color: 'amber',
    },
    {
      number: '04',
      title: 'Deter',
      icon: AlertTriangle,
      description: 'If confirmed, Layered Defense activates: a bright spotlight startles the lion while a loud siren blasts to safely chase it away.',
      color: 'red',
    },
  ];

  const features = {
    hardware: {
      title: 'Edge Hardware',
      icon: Zap,
      items: [
        {
          icon: Sun,
          title: 'Solar-Powered Operation',
          description: 'Continuous off-grid operation with solar panels and battery backup. No dependency on grid power or fuel.',
        },
        {
          icon: Radar,
          title: 'All-Weather Radar',
          description: 'Microwave motion detection works through dust, fog, and darkness. Unaffected by visual conditions.',
        },
        {
          icon: Cpu,
          title: 'Raspberry Pi 5 Processing',
          description: 'On-board edge computing runs AI inference locally. No cloud dependency this  means faster response and lower costs.',
        },
        {
          icon: Battery,
          title: 'INA219 Power Monitoring',
          description: 'Real-time battery and power consumption monitoring ensures system health and proactive maintenance.',
        },
      ],
    },
    ai: {
      title: 'Edge AI Intelligence',
      icon: Eye,
      items: [
        {
          icon: Target,
          title: 'YOLOv8 Model',
          description: 'State-of-the-art object detection optimized for edge deployment. Trained specifically on African wildlife datasets.',
        },
        {
          icon: TrendingUp,
          title: 'Multi-Object Tracking',
          description: 'Simultaneously tracks and counts multiple lions in a single frame. Know exactly how many are approaching.',
        },
        {
          icon: Filter,
          title: 'False-Alarm Filtering',
          description: 'Intelligent filtering ignores false positives such as wind-blown vegetation, dogs, cattle, and herders. Only real threats trigger alerts.',
        },
      ],
    },
    response: {
      title: 'Continuous Threat Response',
      icon: AlertTriangle,
      items: [
        {
          icon: Eye,
          title: 'Pride Detection',
          description: 'When a pride approaches, the system counts every member. Complete situational awareness at all times.',
        },
        {
          icon: Lightbulb,
          title: 'Spotlight Activation',
          description: 'High-intensity LED spotlight startles and disorients lions, encouraging them to retreat from the protected area.',
        },
        {
          icon: Volume2,
          title: 'Siren Deployment',
          description: 'The siren safely chase lions away without causing physical harm.',
        },
        {
          icon: Target,
          title: 'Persistent Defense',
          description: 'Spotlight and siren fire continuously until ALL lions leave the detection zone. No premature shutdown.',
        },
      ],
    },
    network: {
      title: 'Data Transmission Network',
      icon: Radio,
      items: [
        {
          icon: Radio,
          title: 'Point-to-Point LoRa',
          description: 'Direct, long-range radio packet broadcasting bypasses complex server infrastructure. Works in remote areas.',
        },
        {
          icon: Wifi,
          title: 'WebSockets & MQTT',
          description: 'Lightweight internet protocols for real-time data streaming. Instant ranger notifications.',
        },
      ],
    },
  };

  const colorClasses = {
  savanna: { bg: 'savanna', border: 'savanna', icon: 'savanna' },
  earth: { bg: 'earth', border: 'earth', icon: 'earth' },
  amber: { bg: 'amber', border: 'amber', icon: 'amber' },
  red: { bg: 'red', border: 'red', icon: 'red' }
};

  return (
    <div className="how-it-works" id="how-it-works">
      
      <section className="how-it-works" >
        <div className="container">
          <div className="page-hero-badge badge badge-savanna">
            <Cpu className="badge-icon-sm" />
            Technology Deep Dive
          </div>
          <h1 className="page-hero-title">How It Works</h1>
          <p className="page-hero-subtitle">
            Discover the step-by-step process and advanced technology that powers
            Mara Guard's wildlife protection system.
          </p>
        </div>
      </section>

      
      <section className="section process-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The Protection Pipeline</h2>
            <p className="section-subtitle mx-auto">
              From detection to deterrence, every step is designed for speed,
              accuracy, and human wildlife management.
            </p>
          </div>

          <div className="steps-container">
            <div className="steps-line"></div>
            <div className="steps-grid">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const colors = colorClasses[step.color];
                return (
                  <div key={step.number} className="step-card">
                    <div className={`step-icon-bg bg-${colors.bg}`}>
                      <Icon className={`step-icon text-${colors.icon}`} />
                    </div>
                    <div className={`step-number text-${colors.border}`}>
                      {step.number}
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="step-arrow">
                        <ArrowRight className="arrow-icon" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      
      <section className="section features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Core Features</h2>
            <p className="section-subtitle mx-auto">
              Built for the bush. Designed for reliability. Engineered for conservation.
            </p>
          </div>

         
          <div className="feature-tabs">
            {Object.keys(features).map((key) => {
              const feature = features[key];
              const Icon = feature.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`tab-btn ${activeTab === key ? 'tab-active' : ''}`}
                >
                  <Icon className="tab-icon"/>
                  {feature.title}
                </button>
              );
            })}
          </div>

          
          <div className="feature-cards">
            {features[activeTab].items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon-bg">
                    <Icon className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-description">{item.description}</p>
                </div>
              );
            })}
          </div>

          
          <div className="comparison-box">
            <h3 className="comparison-title">Why Edge Computing Matters</h3>
            <div className="comparison-grid">
              <div className="comparison-card comparison-traditional">
                <h4 className="comparison-card-title">Traditional Cloud Approach</h4>
                <ul className="comparison-list">
                  <li><span className="list-x">✗</span> Video uploaded to remote servers</li>
                  <li><span className="list-x">✗</span> 5-30 second latency for analysis</li>
                  <li><span className="list-x">✗</span> Requires stable internet connection</li>
                  <li><span className="list-x">✗</span> High data costs in remote areas</li>
                </ul>
              </div>
              <div className="comparison-card comparison-edge">
                <h4 className="comparison-card-title">Mara Guard</h4>
                <ul className="comparison-list">
                  <li><span className="list-check">✓</span> All processing done on-device</li>
                  <li><span className="list-check">✓</span> Sub-second response time</li>
                  <li><span className="list-check">✓</span> Works offline with no connectivity</li>
                  <li><span className="list-check">✓</span> Zero data transmission costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;