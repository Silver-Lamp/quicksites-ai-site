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

      {/* Digital Real Estate Section - Moved to top */}
      <section className={styles.section} style={{ 
        background: 'linear-gradient(135deg, #23272a 0%, #181a1b 100%)',
        borderRadius: '12px',
        padding: '2.5rem',
        margin: '3rem auto',
        maxWidth: '800px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,224,102,0.1)',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          color: '#ffe066',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Digital Real Estate. First-Year Price.
        </h2>
        <p style={{ 
          fontSize: '1.2rem',
          lineHeight: '1.6',
          color: '#e6e6e6',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Most small businesses still don't have a real website. QuickSites.ai builds and hosts one for you — SEO-optimized, mobile-ready, and tailored to your city — all for just $49/month for your first year.
        </p>
        <p style={{ 
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: '#e6e6e6',
          marginBottom: '2rem',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          No setup fees. No contracts. Just a fast way to claim your corner of the web before someone else does.
        </p>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            background: 'rgba(255,224,102,0.1)',
            padding: '1.2rem',
            borderRadius: '8px',
            border: '1px solid rgba(255,224,102,0.2)'
          }}>
            <p style={{ margin: 0, color: '#e6e6e6' }}>✅ Site goes live in minutes</p>
          </div>
          <div style={{ 
            background: 'rgba(255,224,102,0.1)',
            padding: '1.2rem',
            borderRadius: '8px',
            border: '1px solid rgba(255,224,102,0.2)'
          }}>
            <p style={{ margin: 0, color: '#e6e6e6' }}>✅ Includes custom phone number + lead routing</p>
          </div>
          <div style={{ 
            background: 'rgba(255,224,102,0.1)',
            padding: '1.2rem',
            borderRadius: '8px',
            border: '1px solid rgba(255,224,102,0.2)'
          }}>
            <p style={{ margin: 0, color: '#e6e6e6' }}>✅ Ranks locally — pulls in cities within a 30-minute radius</p>
          </div>
          <div style={{ 
            background: 'rgba(255,224,102,0.1)',
            padding: '1.2rem',
            borderRadius: '8px',
            border: '1px solid rgba(255,224,102,0.2)'
          }}>
            <p style={{ margin: 0, color: '#e6e6e6' }}>✅ Auto-generates testimonials & updates itself</p>
          </div>
        </div>
        <p style={{ 
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: '#ffe066',
          textAlign: 'center',
          fontWeight: '500',
          marginTop: '1rem'
        }}>
          ⚡ You're not buying a site. You're renting digital real estate that gets more valuable over time. Lock in the first-year rate before prices increase.
        </p>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          <a href="#pricing" className={styles.button} style={{ 
            background: '#ffe066',
            color: '#181a1b',
            fontSize: '1.1rem',
            padding: '1rem 2rem'
          }}>
            Claim Your Digital Real Estate
          </a>
        </div>
      </section>

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
            <h2>Live Examples</h2>
            <div className={styles.examplesGrid}>
              <div className={styles.exampleCard}>
                <a href="https://www.graftontowing.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.exampleImage} style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/favicon-64.png" alt="Grafton Towing Logo" style={{ maxWidth: '60%', maxHeight: '80px' }} />
                  </div>
                  <h3>Grafton Towing</h3>
                  <p>Fast, reliable towing and roadside assistance in Grafton, WI. 24/7 service, honest pricing, and professional care for your vehicle.</p>
                </a>
              </div>
              <div className={styles.exampleCard}>
                <a href="https://www.millcreektowing.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.exampleImage} style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/favicon-64.png" alt="Mill Creek Towing Logo" style={{ maxWidth: '60%', maxHeight: '80px' }} />
                  </div>
                  <h3>Mill Creek Towing</h3>
                  <p>Fast, reliable towing and roadside assistance in Mill Creek, WA. 24/7 service, honest pricing, and professional care for your vehicle.</p>
                </a>
              </div>
            </div>
            <p>Check out a few sites we've already launched.</p>
          </section>

          <div className={styles.infoCard}>
            <section className={styles.section}>
              <h2>Pricing</h2>
              <ul>
                <li><strong>$0 upfront</strong> – Free preview, only pay when you're ready</li>
                <li>$49/month or $499/year – Includes domain, hosting, SSL, updates</li>
              </ul>
            </section>
          </div>

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

      <p className={styles.description}>
        <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }} />
      </p>

      {/* Owner Statement Block - Moved to bottom */}
      <div style={{ 
        maxWidth: '800px',
        margin: '3rem auto',
        padding: '2rem',
        background: 'linear-gradient(135deg, #23272a 0%, #181a1b 100%)',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,224,102,0.1)'
      }}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <Image
            src="/images/owner-promise-1.png"
            alt="Owner Promise"
            width={320}
            height={0}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              padding: '0rem',
              borderRadius: '18px',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          <div style={{ 
            textAlign: 'center',
            color: '#e6e6e6',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            <p>
              With 20+ years of experience in software development,<br />
              <br />I designed an AI-enhanced website builder, just for small businesses
              <br />
              <br />
              Easy, Affordable, and SEO-Optimized.<br />
            </p>
          </div>
        </div>
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
        }}
      >
        Create My Site
      </a>
    </div>
  );
}
