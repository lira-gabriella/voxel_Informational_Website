'use client';

import React, { useState } from 'react';
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
  TrendingUp
} from 'lucide-react';

export default function HowItWorks() {
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
      description: 'The Edge AI analyzes frames locally with YOLOv8. Cows, herders, and blowing brush are filtered out, only high-confidence lion matches trigger action.',
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
          description: 'On-board edge computing runs AI inference locally. No cloud dependency this means faster response and lower costs.',
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
    savanna: { bg: '#FDF0ED', text: '#D4A373' },
    earth: { bg: '#F5F7FA', text: '#705E52' },
    amber: { bg: '#FDF8EE', text: '#BCA38F' },
    red: { bg: '#FFF5F5', text: '#E53E3E' }
  };

   return (
    <div style={{ backgroundColor: '#FAF6F0', color: '#2D1A12', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '60px 24px' }} id="how-it-works">
      
      <section style={{ maxWidth: '1200px', margin: '0 auto 60px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '99px', border: '1px solid #E6DCD0', backgroundColor: '#FFFFFF', fontSize: '12px', fontWeight: '600', marginBottom: '24px' }}>
          <Cpu style={{ width: '14px', height: '14px', color: '#D4A373' }} />
          Technology Deep Dive
        </div>
        <h1 style={{ fontSize: '40px', fontWeight: '800', margin: '0 0 16px', color: '#2D1A12', letterSpacing: '-0.025em' }}>How It Works</h1>
        <p style={{ color: '#705E52', fontSize: '16px', lineHeight: '1.6', maxWidth: '70ch', margin: '0 auto' }}>
          Discover the step-by-step process and advanced technology that powers Mara Guard's wildlife protection system.
        </p>
      </section>
      
      <section style={{ maxWidth: '1200px', margin: '0 auto 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#2D1A12', margin: '0 0 12px' }}>The Protection Pipeline</h2>
          <p style={{ color: '#705E52', fontSize: '15px', lineHeight: '1.5', maxWidth: '60ch', margin: '0 auto' }}>
            From detection to deterrence, every step is designed for speed, accuracy, and human wildlife management.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', width: '100%' }}>
          {steps.map((step) => {
            const Icon = step.icon;
            const colors = colorClasses[step.color] || colorClasses.savanna;
            return (
              <div key={step.number} style={{ backgroundColor: '#FFFFFF', padding: '32px 24px', borderRadius: '16px', border: '1px solid #E6DCD0', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '100%' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg }}>
                    <Icon style={{ width: '20px', height: '20px', color: colors.text }} />
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: '14px', fontWeight: '700', color: colors.text }}>
                    {step.number}
                  </span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 12px', color: '#2D1A12' }}>{step.title}</h3>
                <p style={{ color: '#705E52', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#2D1A12', margin: '0 0 12px' }}>Core Features</h2>
          <p style={{ color: '#705E52', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>
            Built for the bush. Designed for reliability. Engineered for conservation.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', padding: '6px', backgroundColor: '#F0E6DA', borderRadius: '12px', marginBottom: '40px', border: '1px solid #E6DCD0', flexWrap: 'wrap' }}>
          {Object.keys(features).map((key) => {
            const feature = features[key];
            const Icon = feature.icon;
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '12px 20px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'all 0.2s', backgroundColor: isSelected ? '#4A2E1B' : 'transparent', color: isSelected ? '#FFFFFF' : '#705E52' }}
              >
                <Icon style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                {feature.title}
              </button>
            );
          })}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '64px', width: '100%' }}>
          {features[activeTab].items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} style={{ backgroundColor: '#FFFFFF', padding: '32px 24px', borderRadius: '16px', border: '1px solid #E6DCD0', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#FAF6F0', border: '1px solid #E6DCD0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', flexShrink: 0 }}>
                  <Icon style={{ width: '18px', height: '18px', color: '#4A2E1B' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 10px', color: '#2D1A12' }}>{item.title}</h3>
                <p style={{ color: '#705E52', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      
        <div style={{ backgroundColor: 'transparent', width: '100%' }}>
  <h3 style={{ fontSize: '24px', fontWeight: '700', textAlign: 'center', color: '#2D1A12', marginBottom: '40px' }}>Why Edge Computing Matters</h3>
  
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', width: '100%' }}>
    
    <div style={{ padding: '40px 32px', borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #4A2E1B', boxShadow: '0 12px 30px rgba(74, 46, 27, 0.05)', boxSizing: 'border-box' }}>
      <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#4A2E1B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 24px' }}>Traditional Cloud Approach</h4>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#2D1A12' }}>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#DC2626', fontWeight: 'bold' }}>✕</span><span>Video uploaded to remote servers</span></li>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#DC2626', fontWeight: 'bold' }}>✕</span><span>5-30 second latency for analysis</span></li>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#DC2626', fontWeight: 'bold' }}>✕</span><span>Requires stable internet connection</span></li>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#DC2626', fontWeight: 'bold' }}>✕</span><span>High data costs in remote areas</span></li>
      </ul>
    </div>
    
    <div style={{ padding: '40px 32px', borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #4A2E1B', boxShadow: '0 12px 30px rgba(74, 46, 27, 0.05)', boxSizing: 'border-box' }}>
      <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#4A2E1B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 24px' }}>Mara Guard Edge System</h4>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#2D1A12' }}>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#16A34A', fontWeight: 'bold' }}>✓</span><span><strong>All processing</strong> done on-device</span></li>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#16A34A', fontWeight: 'bold' }}>✓</span><span><strong>Sub-second</strong> rapid response time</span></li>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#16A34A', fontWeight: 'bold' }}>✓</span><span>Works <strong>completely offline</strong> with no connectivity</span></li>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#16A34A', fontWeight: 'bold' }}>✓</span><span><strong>Zero active</strong> data transmission costs</span></li>
      </ul>
    </div>

  </div>
</div>
      </section>

    </div>
  );
};





