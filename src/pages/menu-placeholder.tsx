import React from 'react';
import Head from 'next/head';

export default function MenuPlaceholder() {
  return (
    <>
      <Head>
        <title>Speisekarte wird überarbeitet | Mo Kebap Münsingen</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="page-shell">
        <div className="content-section">
          <div className="container" style={{textAlign:'center',padding:'4rem 1rem'}}>
            <h2 style={{color:'var(--primary-gold)',marginBottom:'2rem'}}>Speisekarte</h2>
            <p style={{fontSize:'1.35rem',color:'#e0e0e0',background:'#222',padding:'2rem',borderRadius:'1rem',maxWidth:500,margin:'0 auto'}}>
              Unsere Speisekarte wird derzeit überarbeitet. Neue Informationen folgen in Kürze.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
