import Image from 'next/image';

export default function Claim() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#181a1b' }}>
      <Image
        src="/images/current-claim-option-0.gif"
        alt="Claim Option"
        width={960}
        height={640}
        style={{ maxWidth: '90vw', height: 'auto', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.18)' }}
      />
      <div style={{ marginTop: '2rem', color: '#ffe066', fontSize: '1.2rem', textAlign: 'center', minHeight: '3rem' }}>
        {/* Add your description here later */}
      </div>
      <Image
        src="/images/current-claim-option-1.gif"
        alt="Claim Option"
        width={960}
        height={640}
        style={{ maxWidth: '90vw', height: 'auto', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.18)' }}
      />
    </div>
  );
} 