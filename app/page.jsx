import {
  AlertTriangle,
  Eye,
  Radio,
  ArrowRight,
  Activity,
} from 'lucide-react';


const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="media"></div>
        <div className="overlay"></div>

        <div className="container content">
          <h1 className="title">
            Protecting Prides.
            <br />
            <span className="accent">Securing Livelihoods.</span>
          </h1 >

          <p className="catchline">
            Affordable, solar-powered, AI-driven edge tracking and humane deterrence
            for human-wildlife coexistence.
          </p>

          <div className="ctas">
            <a href="/how-it-works" className="amber">
              See How It Works
              <ArrowRight className="icon" style={{ marginLeft: '0.5rem', display: 'inline-block', verticalAlign: 'middle' }} />
            </a>
            <a href="/contact" className="outline">
              Request Demo
            </a>
          </div>
        </div>

        <div className="fade"></div>
      </section>

      <section className="problem">
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

      <section className="sol">
        <div className="container">
          <div className="head">
           
          
            
            <h2 className="heading">Introducing Mara Guard our solution</h2>
            <p className="subtitle">
              A shift from passive collar tracking to active, 
              perimeter defense. Track every member of a pride simultaneously,
              without the constraints of individual collaring.
            </p>
          </div>

          <div className="features">
            <div className="card">
              <div className="iconbox savanna">
                <Eye className="icon" />
              </div>
              <h3 className="topic">Whole Pride Visibility</h3>
              <p className="text">
                Our edge sensors detect and track all lions entering the buffer zone,
                regardless of collaring status. No lion goes unnoticed.
              </p>
            </div>

            <div className="card">
              <div className="iconbox amber">
                <Activity className="icon" />
              </div>
              <h3 className="topic">Active Deterrence</h3>
              <p className="text">
                When lions approach, our system activates targeted deterrents which are spotlights
                and sirens that safely redirect them away from livestock areas.
              </p>
            </div>

            <div className="card">
              <div className="iconbox earth">
                <Radio className="icon" />
              </div>
              <h3 className="topic">Real-Time Alerts</h3>
              <p className="text">
                Rangers receive instant notifications via LoRa and cellular networks,
                enabling rapid response and continuous monitoring.
              </p>
            </div>
          </div>

          <div className="banner">
            <div className="item">
              <p className="statistic">100%</p>
              <p className="label">Pride Coverage</p>
            </div>
            <div className="item">
              <p className="statistic">$500</p>
              <p className="label">Per Unit Cost</p>
            </div>
            <div className="item">
              <p className="statistic">90%</p>
              <p className="label">Cost Reduction</p>
            </div>
            <div className="highlight">
              <p className="statistic">24/7</p>
              <p className="label">Solar Powered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
