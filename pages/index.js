import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QuickSites.ai - AI Websites for Local Businesses</title>
        <meta name="description" content="Launch your business online instantly. AI-powered websites for tow trucks, contractors, and service providers." />
      </Head>

      <header className={styles.stickyHeader}>
        <div className={styles.logoTitle}>
          <Image src="/logo.gif" alt="QuickSites.ai Logo" width={144} height={144} />
          <h1 className={styles.title}>AI Websites for Local Businesses — Ready in Minutes.</h1>
        </div>
        <p className={styles.description}>
          Launch your business online instantly. No tech skills required. No upfront cost.
        </p>
        <div className={styles.buttons}>
          <a href="#examples" className={styles.button}>See Examples</a>
          <a href="#pricing" className={styles.button}>Create My Site</a>
        </div>
      </header>

      <main className={styles.main}>
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

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} QuickSites.ai — All rights reserved.</p>
      </footer>
    </div>
  );
}
