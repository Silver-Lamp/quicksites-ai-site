import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>QuickSites.ai - AI Websites for Local Businesses</title>
        <meta name="description" content="Launch your business online instantly. AI-powered websites for tow trucks, contractors, and service providers." />
      </Head>

      <div className={styles.heroBg}>
        <Image src="/images/header-bg-0.gif" alt="Hero Background" fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} priority />
      </div>
      {/* <div className={styles.stickyOwnerStatement}>
        <div className={styles.ownerStatementCrop}>
          <Image src="/images/owner-statement-0.webp" alt="Owner Statement" width={400} height={1200} style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <p className={styles.ownerStatement}>
          I'm a small business owner and I know how hard it is to get a website for your business.
          I'm also a software engineer and I know how to build a website.
          So I'm building a website builder that's easy to use and affordable.
        </p>
      </div> */}

      <header className={`${styles.stickyHeader} ${headerCollapsed ? styles.collapsedHeader : ''}`}>
        {headerCollapsed && (
          <button
            className={styles.expandHeaderButton}
            onClick={() => setHeaderCollapsed(false)}
            style={{ margin: '0 auto 0.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}
            aria-label="Show Full Header"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="11" stroke="#ffe066" strokeWidth="2.5" fill="#ffe066"/><polyline points="7 10 12 15 17 10" /></svg>
          </button>
        )}
        <div className={styles.logoTitle}>
          <a href="/" style={{ display: 'inline-block' }}>
            <Image src="/logo.gif" alt="QuickSites.ai Logo" width={144} height={144} />
          </a>
          <h1 className={styles.title}>Your New Small Business Website</h1>
          {/* <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }} /> */}
        </div>
        <p className={styles.description}>
          I'll help you launch your business online instantly.
        </p>
        <p className={styles.description}>
          No tech skills required. No upfront cost.
        </p>
        <div className={styles.buttons}>
          <a
            href="#examples"
            className={styles.button}
            onClick={() => setHeaderCollapsed(true)}
          >
            See Examples
          </a>
          <a
            href="#pricing"
            className={styles.button}
            onClick={() => setHeaderCollapsed(true)}
          >
            Create My Site
          </a>
        </div>
      </header>

      <div className={styles.mainContentRow}>
        <main className={styles.main}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
            <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '50%', height: 'auto', borderRadius: '8px',  objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <section className={styles.section}>
            <h2>How It Works</h2>
            <ol>
              <li>We auto-generate a branded website for your business</li>
              <li>You claim it and customize if needed</li>
              <li>We host, update, and support — you focus on your business</li>
            </ol>
          </section>

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

          <section id="pricing" className={styles.section}>
            <h2>Pricing</h2>
            <ul>
              <li><strong>$0 upfront</strong> – Free preview, only pay when you're ready</li>
              <li>$49/month or $499/year – Includes domain, hosting, SSL, updates</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Features</h2>
            <ul>
              <li>SEO-optimized, Mobile-first</li>
              <li>AI-generated content</li>
              <li>Automatic updates & Local ranking tools</li>
              <li>Lead generation add-ons available</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Who It's For</h2>
            <p>Perfect for towing companies, contractors, roofers, electricians, and any local service business.</p>
          </section>

          <section className={styles.section}>
            <h2>Agency & Reseller Program</h2>
            <p>Offer AI websites under your brand. <a href="#contact">Become a partner.</a></p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Name" /><br />
              <input type="email" placeholder="Email" /><br />
              <textarea placeholder="Message"></textarea><br />
              <button type="submit">Send</button>
            </form>
          </section>
        </main>
        <div className={styles.stickyOwnerStatement}>
          <div className={styles.ownerStatementCrop}>
            <Image src="/images/owner-statement-0.webp" alt="Owner Statement" width={400} height={1200} style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <p className={styles.ownerStatement}>
            I'm a small business owner and I know how hard it is to get a website for your business.
            I'm also a software engineer and I know how to build a website.
            So I'm building a website builder that's easy to use and affordable.
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
          </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '50%', height: 'auto', marginBottom: '1rem', borderRadius: '8px',  objectFit: 'cover', objectPosition: 'center' }} />
      </div>
      <div className={styles.cornerImage}>
        <Image src="/images/bottom-corner-1.png" alt="Corner Graphic" width={180} height={180} style={{ width: '100%', height: 'auto' }} />
      </div>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} QuickSites.ai — All rights reserved.</p>
        <a href="/" style={{ display: 'inline-block' }}>
          <Image src="/logo.gif" alt="QuickSites.ai Logo" width={64} height={64} style={{ marginTop: '1rem' }} />
        </a>
      </footer>

      {/* Add Create My Site button above the footer */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
        <a href="#examples" className={styles.button}>See Examples</a>
        <a href="#pricing" className={styles.button}>Create My Site</a>
      </div>
    </div>
  );
}
