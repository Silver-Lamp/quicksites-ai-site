import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  // Hero GIF rotation
  const heroGifs = ['/images/header-bg-3.gif', '/images/header-bg-0.gif'];
  const [currentGif, setCurrentGif] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGif((prev) => (prev + 1) % heroGifs.length);
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>QuickSites.ai - Sites for Local Businesses</title>
        <meta name="description" content="Launch your business online instantly. AI-powered websites for tow trucks, contractors, and service providers." />
      </Head>

      <header className={styles.stickyHeader} style={{
        position: 'static',
        background: 'rgba(24, 26, 27, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,224,102,0.1)',
        padding: '1rem 2rem',
        lineHeight: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className={styles.logoTitle} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          flex: '1'
        }}>
          <a href="/" style={{ display: 'inline-block' }}>
            <Image 
              src="/logo.gif" 
              alt="QuickSites.ai Logo" 
              width={144} 
              height={144}
              style={{}}
            />
          </a>
          <h1 className={styles.title} style={{ 
            fontSize: '2.5rem',
            margin: 0,
            display: 'block'
          }}>
            Launch Your New Small Business Website
          </h1>
        </div>
        <div className={styles.buttons} style={{ 
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginRight: 0
        }}>
        </div>
      </header>

      <div className={styles.heroBg}>
        <Image src={heroGifs[currentGif]} alt="Hero Background" fill style={{ zIndex: 0 }} priority />
      </div>



      <div className={styles.mainContentRow}>
        <main className={styles.main}>
          <div style={{ top: 150, left: 600, fontSize: '1.9rem', fontWeight: 'normal', color: 'gray', display: 'flex', marginBottom: '0rem', zIndex: 120 }}>
          {/* <p>
            <br />
            <br />
            <br />
            20 years of software development and business experience
            <br />
            + Industry-Leading AI Models
            <br />!!! Hey! Let's build a website builder,
            <br />Just for Small Businesses
            <br />Easy, Affordable? Yes.
            <br />Go.
            <br />Done.
          </p> */}
          {/* <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p> */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', zIndex: 120 }}>
            {/* <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" z-index={120} width={320} height={0} style={{ width: '50%', height: 'auto', borderRadius: '8px',  objectFit: 'cover', objectPosition: 'center' }} /> */}
          </div>
          {/* <section className={styles.section}>
            <h2>How It Works</h2>
            <ol>
              <li>We auto-generate a branded website for your business</li>
              <li>You claim it and customize if needed</li>
              <li>We host, update, and support — you focus on your business</li>
            </ol>
          </section> */}
          <section id="examples" className={styles.section}>
            <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }} />
          </section>

          {/* Live Examples Section - Improved styling */}
          <section id="examples" className={styles.section} style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '2rem', letterSpacing: '0.01em' }}>Live Examples</h2>
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '2.5rem',
            }}>
              <div style={{
                background: '#181a1b',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
                border: '1.5px solid rgba(255,224,102,0.10)',
                padding: '2.2rem 2rem 1.5rem 2rem',
                width: '270px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#e6e6e6',
                transition: 'box-shadow 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,224,102,0.13)'; e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.22)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  background: '#f5f5f5',
                  borderRadius: '10px',
                  marginBottom: '1.2rem',
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src="/favicon-64.png" alt="Grafton Towing Logo" style={{ maxWidth: '60%', maxHeight: '80px' }} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Grafton Towing</h3>
                <p style={{ fontSize: '1rem', color: '#e6e6e6', margin: 0, lineHeight: 1.5 }}>
                  Fast, reliable towing and roadside assistance in Grafton, WI. 24/7 service, honest pricing, and professional care for your vehicle.
                </p>
              </div>
              <div style={{
                background: '#181a1b',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
                border: '1.5px solid rgba(255,224,102,0.10)',
                padding: '2.2rem 2rem 1.5rem 2rem',
                width: '270px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#e6e6e6',
                transition: 'box-shadow 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,224,102,0.13)'; e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.22)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  background: '#f5f5f5',
                  borderRadius: '10px',
                  marginBottom: '1.2rem',
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src="/favicon-64.png" alt="Mill Creek Towing Logo" style={{ maxWidth: '60%', maxHeight: '80px' }} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Mill Creek Towing</h3>
                <p style={{ fontSize: '1rem', color: '#e6e6e6', margin: 0, lineHeight: 1.5 }}>
                  Fast, reliable towing and roadside assistance in Mill Creek, WA. 24/7 service, honest pricing, and professional care for your vehicle.
                </p>
              </div>
            </div>
            <div style={{ height: '2.5rem' }} />
          </section>

          {/* Pricing Section - Improved styling */}
          <section className={styles.section} style={{ marginBottom: '3.5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #202225 60%, #23272a 100%)',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(255,224,102,0.08)',
              border: '2px solid #ffe066',
              padding: '2.5rem 2rem',
              maxWidth: '600px',
              margin: '0 auto',
              color: '#fff',
            }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffe066', marginBottom: '1.5rem', letterSpacing: '0.01em' }}>Pricing</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem', color: '#fff' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ffe066', fontWeight: 700, marginRight: '0.5rem' }}>$0 upfront</span>
                  <span>– Free preview, only pay when you're ready</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ffe066', fontWeight: 700, marginRight: '0.5rem' }}>$49/month or $499/year</span>
                  <span>– Includes domain, hosting, SSL, updates</span>
                </li>
              </ul>
            </div>
          </section>

          {/* <div className={styles.infoCard}>
            <section className={styles.section}>
              <h2>Features</h2>
              <ul>
                <li>SEO-optimized, Mobile-first</li>
                <li>AI-generated content</li>
                <li>Automatic updates & Local ranking tools</li>
                <li>Lead generation add-ons available</li>
              </ul>
            </section>
          </div> */}

          {/* <div className={styles.infoCard}>
            <section className={styles.section}>
              <h2>Who It's For</h2>
              <p>Perfect for towing companies, contractors, roofers, electricians, and any local service business.</p>
            </section>
          </div> */}

          {/* <div className={styles.infoCard}>
            <section className={styles.section}>
              <h2>Agency & Reseller Program</h2>
              <p>Offer AI websites under your brand. <a href="#contact">Become a partner.</a></p>
            </section>
          </div> */}

          {/* <div className={styles.infoCard}>
            <section id="contact" className={styles.section}>
              <h2>Contact Us</h2>
              <form>
                <input type="text" placeholder="Name" /><br />
                <input type="email" placeholder="Email" /><br />
                <textarea placeholder="Message"></textarea><br />
                <button type="submit">Send</button>
              </form>
            </section>
          </div> */}

        </main>
        <div>
          <p>&nbsp;</p>
        </div>
      </div>

      {/* Remove sticky right column and move owner statement to bottom */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {/* Empty div for spacing */}
      </div>

      {/* Owner Statement Block - Improved styling */}
      <div
        style={{
          maxWidth: '900px',
          margin: '3rem auto',
          padding: '2.5rem 2rem',
          background: 'linear-gradient(135deg, #23272a 60%, #181a1b 100%)',
          borderRadius: '18px',
          boxShadow: '0 6px 32px rgba(0,0,0,0.18)',
          border: '1.5px solid rgba(255,224,102,0.13)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2.5rem',
          position: 'relative',
        }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <blockquote style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#ffe066',
            margin: 0,
            marginBottom: '1.5rem',
            lineHeight: 1.5,
            letterSpacing: '0.01em',
            background: 'rgba(40,40,30,0.10)',
            borderLeft: '4px solid #ffe066',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            I'll help you launch your business online instantly.<br />
            No tech skills required. No upfront cost. – SJ
          </blockquote>
          <div style={{
            color: '#e6e6e6',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            margin: '1.5rem 0 0 0',
            fontWeight: 400,
            maxWidth: '500px',
          }}>
            <p style={{ margin: 0 }}>
              With 20+ years of experience in software development,<br />
              I designed an AI-enhanced website builder, just for small businesses.<br /><br />
              Easy, Affordable, and SEO-Optimized.
            </p>
            {/* <div>
              <img src="/images/owner-sig-1.png" alt="Owner Signature" style={{ width: '50%', height: 'auto' }} />
            </div> */}
            <div style={{ marginTop: '1.5rem', color: '#ffe066', fontWeight: 500, fontSize: '1rem', letterSpacing: '0.02em' }}>
              — Sandon Jurowski, Founder
            </div>
            <div>
              <img src="/images/bottom-corner-1.gif" alt="Bottom Corner" style={{ width: '100%', height: 'auto', borderRadius: '12px'}} />
            </div>
          </div>
        </div>
        {/* Responsive styles */}
        <style>{`
          @media (max-width: 700px) {
            div[style*='flex-direction: row'] {
              flex-direction: column !important;
              gap: 1.5rem !important;
              padding: 1.5rem 0.5rem !important;
            }
            div[style*='flex: 0 0 220px'] {
              flex: none !important;
              width: 100% !important;
              max-width: 320px !important;
              margin: 0 auto 1rem auto !important;
            }
            blockquote {
              font-size: 1.05rem !important;
              padding: 0.7rem 0.7rem !important;
            }
          }
        `}</style>
      </div>

      {/* Add sticky Create My Site button in bottom right */}
      <a
        href="#pricing"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 2000,
          background: '#ffe066',
          color: '#181a1b',
          fontWeight: 600,
          fontSize: '1.15rem',
          padding: '1rem 2rem',
          borderRadius: '2rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          textDecoration: 'none',
          transition: 'background 0.2s, color 0.2s',
          border: 'none',
          display: 'inline-block',
          animation: 'pulse-green-glow 3.6s infinite',
        }}
      >
        Create My Site
      </a>
      <style>{`
        @keyframes pulse-green-glow {
          0% {
            box-shadow: 0 0 0 0 #00e38c66, 0 4px 16px rgba(0,0,0,0.18);
          }
          50% {
            box-shadow: 0 0 16px 8px #00e38c99, 0 4px 16px rgba(0,0,0,0.18);
          }
          100% {
            box-shadow: 0 0 0 0 #00e38c66, 0 4px 16px rgba(0,0,0,0.18);
          }
        }
      `}</style>

      {/* Footer copyright */}
      <footer style={{
        width: '100%',
        textAlign: 'center',
        color: '#888',
        fontSize: '1rem',
        margin: '2.5rem 0 1.5rem 0',
        letterSpacing: '0.01em',
        background: 'none',
        border: 'none',
      }}>
        © {new Date().getFullYear()} Silver Lamp Studio LLC
      </footer>
    </div>
  );
}
