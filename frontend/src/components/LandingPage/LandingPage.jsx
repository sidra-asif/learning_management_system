import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  const features = [
    { icon: '🎯', title: 'Adaptive Learning', desc: 'AI-driven paths tailored to every student\'s unique pace and style.' },
    { icon: '💎', title: 'Premium Content', desc: 'Handcrafted courses from industry experts with 4K interactive video.' },
    { icon: '⚡', title: 'Real-time Analytics', desc: 'Live engagement tracking and predictive performance grading for teachers.' },
    { icon: '🛡️', title: 'Secure & Scaling', desc: 'Institutional grade security with unlimited cloud scalability.' }
  ];

  const pricing = [
    { name: 'Student', price: 'Free', features: ['All Basic Courses', 'Progress Tracking', 'Community Access'] },
    { name: 'Pro Teacher', price: '$29', features: ['Course Creation', 'Advanced Analytics', 'Unlimited Students', 'Direct Support'] },
    { name: 'Enterprise', price: 'Custom', features: ['SSO Integration', 'Dedicated Manager', 'Custom Branding', 'API Access'] }
  ];

  const faq = [
    { q: 'How do I start my first course?', a: 'Simply sign up as a student, browse our catalog, and click "Enroll" on any course that interests you.' },
    { q: 'Can I teach on this platform?', a: 'Yes! Register as a teacher and apply for verified status to start building your own premium curriculum.' },
    { q: 'Is there a mobile app available?', a: 'Our platform is fully responsive and mobile-optimized. A dedicated iOS and Android app is coming soon.' }
  ];

  return (
    <div className="landing-elite">
      {/* Immersive Mesh Background */}
      <div className="mesh-gradient-container">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
        <div className="mesh-blob blob-4"></div>
      </div>

      {/* Nav */}
      <nav className="elite-nav glass-v2">
        <div className="container nav-content">
          <div className="logo-brand">
            <span className="logo-icon">💠</span>
            <span className="brand-name">Lumina LMS</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <div className="nav-actions">
              <button className="btn-text" onClick={() => onNavigate('login')}>Sign In</button>
              <button className="btn-glow" onClick={() => onNavigate('register')}>Join Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-elite container">
        <div className="hero-content-v3 animate-fade-in">
          <div className="badge-premium">The Future of Education</div>
          <h1 className="hero-title">Experience <span>Intelligence</span> in Learning</h1>
          <p className="hero-subtitle">The world's most sophisticated Learning Management System. Designed for elite institutions and professional educators.</p>
          <div className="hero-cta-group">
            <button className="btn-glow large" onClick={() => onNavigate('register')}>Start Free Trial</button>
            <button className="btn-outline-white large">Watch Demo Video</button>
          </div>
        </div>
        <div className="hero-visual-v3">
          <div className="floating-card glass-v2 card-1 animate-float">
            <div className="c-mini-header">
              <div className="u-circle"></div>
              <span>Course Progress</span>
            </div>
            <div className="c-mini-bar"><div className="fill" style={{ width: '75%' }}></div></div>
          </div>
          <div className="floating-card glass-v2 card-2 animate-float-delayed">
            <span className="c-val">4.9/5</span>
            <span className="c-lab">User Rating</span>
          </div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" alt="Education" className="hero-main-img" />
        </div>
      </header>

      {/* Features Showcase */}
      <section id="features" className="features-showcase container">
        <h2 className="section-title-elite">Designed for <span>Everything</span></h2>
        <div className="features-grid-elite">
          {features.map((f, i) => (
            <div key={i} className="feature-card-elite glass-v2 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="f-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section container">
        <h2 className="section-title-elite">Choose your <span>Path</span></h2>
        <div className="pricing-grid">
          {pricing.map((p, i) => (
            <div key={i} className={`price-card glass-v2 ${i === 1 ? 'featured' : ''}`}>
              {i === 1 && <span className="popular-tag">Most Recommended</span>}
              <h3>{p.name}</h3>
              <div className="p-val">
                <span className="p-curr">$</span>
                <span className="p-num">{p.price === 'Free' || p.price === 'Custom' ? p.price : p.price.replace('$', '')}</span>
                {p.price !== 'Free' && p.price !== 'Custom' && <span className="p-dur">/mo</span>}
              </div>
              <ul className="p-features">
                {p.features.map((feat, j) => <li key={j}>✓ {feat}</li>)}
              </ul>
              <button className={i === 1 ? 'btn-glow' : 'btn-outline-white'}>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section container">
        <h2 className="section-title-elite">Got <span>Questions?</span></h2>
        <div className="faq-accordion">
          {faq.map((item, i) => (
            <div key={i} className={`faq-item glass-v2 ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
              <div className="faq-q">
                <span>{item.q}</span>
                <span className="faq-toggle">{activeFaq === i ? '−' : '+'}</span>
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="elite-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo-brand">
              <span className="logo-icon">💠</span>
              <span className="brand-name">Lumina LMS</span>
            </div>
            <p>Elevating education through immersive technology and aesthetic design.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#">About Us</a>
            <a href="#">Resources</a>
            <a href="#">Privacy</a>
          </div>
          <div className="footer-newsletter">
            <h4>Join the Newsletter</h4>
            <div className="newsletter-box glass-v2">
              <input type="email" placeholder="Enter your email" />
              <button className="btn-glow">Join</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Lumina Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
