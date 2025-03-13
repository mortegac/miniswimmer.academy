// pages/certificados/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Certificado() {
  const router = useRouter();
  const { id } = router.query;
  
  // URL del PDF basada en el ID
  const pdfUrl = `/certificates/${id}.pdf`;
  
  // Información para compartir en redes sociales
  const title = `Certificado de ${id}`;
  const description = `Visualiza mi certificado de ${id}`;
  const imageUrl = `/certificates/preview/${id}.jpg`; // Una imagen previa del certificado

  return (
    <>
      <Head>
        {/* Meta tags básicos */}
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Meta tags para Open Graph (Facebook, Instagram, LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={`https://miniswimmer.academy/certificates/${id}`} />
        <meta property="og:type" content="website" />
        
        {/* Meta tags específicos para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div>
        {/* <h1>Certificado: {id}</h1> */}
        <iframe src={pdfUrl} width="100%" height="800px" />
        
        {/* Botones para compartir */}
        <div className="share-buttons">
          <button onClick={() => shareTo('facebook')}>Compartir en Facebook</button>
          <button onClick={() => shareTo('instagram')}>Compartir en Instagram</button>
          <button onClick={() => shareTo('linkedin')}>Compartir en LinkedIn</button>
        </div>
      </div>
    </>
  );
  
  function shareTo(platform) {
    const shareUrl = `https://miniswimmer.academy/certificates/${id}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'instagram':
        // Instagram no tiene API de compartir directa, normalmente se usa un enlace en bio
        alert('Para Instagram, copia este enlace y compártelo en tu historia o biografía');
        break;
    }
  }
}