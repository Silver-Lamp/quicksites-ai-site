import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderCollapsed(true);
      } else {
        setHeaderCollapsed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>QuickSites.ai - Sites for Local Businesses</title>
        <meta name="description" content="Launch your business online instantly. AI-powered websites for tow trucks, contractors, and service providers." />
      </Head>

      <div className={styles.heroBg}>
        <Image src="/images/header-bg-0.gif" alt="Hero Background" fill style={{ 
          // objectFit: 'cover',
          // objectPosition: 'center',
          zIndex: 0
        }} 
        priority />
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
        {/* <div className={styles.stickyOwnerStatement}> */}
          {/* <div className={styles.ownerStatementCrop}> */}
            {/* <Image src="/images/owner-statement-0.webp" alt="Owner Statement" width={400} height={1200} style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' }} /> */}
          {/* </div> */}
          {/* <p className={styles.ownerStatement}> */}
            {/* I'm a small business owner and I know how hard it is to get a website for your business.
            I'm also a software engineer and I know how to build a website.
            So I'm building a website builder that's easy to use and affordable. */}
          {/* </p> */}
        {/* </div> */}

        <div>
          <p>
            &nbsp;
          </p>
        </div>
      </div>
      <div className={styles.stickyRightColumn}>
        <div className={styles.ownerStatementBlock}>
        <Image
          src="/images/owner-promise-1.png"
          alt="Owner Promise"
          width={320}
          height={0}
          style={{
            // marginTop: '-200px',
            width: '100%',
            height: 'auto',
            padding: '0rem',
            borderRadius: '18px',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            // margin: '0rem auto 1rem auto'
          }}
        />
        {/* <p className={styles.ownerStatement}>
          I'm a small business owner and I know how hard it is to get a website for your business.<br />
          I'm also a software engineer and I know how to build a website.<br />
          So I'm building a website builder that's easy to use and affordable.
        </p> */}
        <div style={{ margin: '-10rem auto 1rem auto' }}>
          <p>
            With 20+ years of experience in software development,<br />
            {/* Rapidly deploy Industry-Leading AI Models<br /> */}
            <br />I designed an AI-enhanced website builder, just for small businesses
            <br />
            <br />
            Easy, Affordable, and SEO-Optimized.<br />
            {/* Go. */}
            {/* Done.  */}
          </p>
        </div>
      </div>

      </div>

      {/* Owner photo and statement block */}
      {/* <div className={styles.ownerStatementBlock}>
        <Image
          src="/images/owner-promise-1.png"
          alt="Owner Promise"
          width={420}
          height={0}
          style={{
            width: '60%',
            height: 'auto',
            padding: '0rem',
            borderRadius: '18px',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            margin: '2rem auto 1rem auto'
          }}
        /> */}
        {/* <p className={styles.ownerStatement}>
          I'm a small business owner and I know how hard it is to get a website for your business.<br />
          I'm also a software engineer and I know how to build a website.<br />
          So I'm building a website builder that's easy to use and affordable.
        </p> */}
      {/* </div> */}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {/* <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '50%', height: 'auto', marginBottom: '1rem', borderRadius: '8px',  objectFit: 'cover', objectPosition: 'center' }} /> */}
        {/* <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }} /> */}
      </div>
      <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>

        <p className={styles.description}>
          {/* <Image src="/images/owner-promise-1.png" alt="Owner Promise" z-index={120} width={420} height={0} style={{ width: '60%', height: 'auto', padding: '0rem', borderRadius: '18px',  objectFit: 'cover', objectPosition: 'center' }} /> */}
          <Image src="/images/main-tow-offer-2.webp" alt="Main Tow Offer" width={320} height={0} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }} />
        </p>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            &nbsp;
          </p>
        </div>

      <div className={styles.cornerImage}>
        <Image src="/images/bottom-corner-1.png" alt="Corner Graphic" width={180} height={180} style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Move sticky header to sticky footer at the bottom left */}
      <footer className={`${styles.stickyFooter} ${headerCollapsed ? styles.collapsedFooter : ''}`}>
        {headerCollapsed && (
          <button
            className={styles.expandHeaderButton}
            onClick={() => setHeaderCollapsed(false)}
            style={{ margin: '0 auto 0.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}
            aria-label="Show Full Footer"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="11" stroke="#ffe066" strokeWidth="2.5" fill="#ffe066"/><polyline points="7 10 12 15 17 10" /></svg>
          </button>
        )}
        <div className={styles.logoTitle}>
          <a href="/" style={{ display: 'inline-block' }}>
            <Image src="/logo.gif" alt="QuickSites.ai Logo" width={144} height={144} />
          </a>
          <h1 className={styles.title}>Launch Your New Small Business Website</h1>
        </div>
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
          <p>
            &nbsp;
          </p>
          <p>
            &nbsp;
          </p>
        </div>
      </footer>

      {/* Add Create My Site button above the footer */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
        {/* <a href="#examples" className={styles.button}>See Examples</a> */}
        {/* <a href="#pricing" className={styles.button}>Create My Site</a> */}
        {/* <Image src="/images/owner-circle-photo-sig.png" alt="Owner Image and Signature" align="center" width={100} height={0} style={{ width: '50%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }} /> */}
        {/* <Image src="/images/owner-headshot-1.png" alt="Owner Headshot" align="center" width={100} height={0} style={{ width: '50%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }} /> */}
      </div>
    </div>
  );
}
