// pages/certificates/[id].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Certificate() {
  const router = useRouter();
  const { id } = router.query;
  
  const baseUrl = "https://miniswimmer.academy/certificates";
  const pageUrl = `${baseUrl}/${id}`;
  const imageUrl = `${baseUrl}/preview/${id}.png`;
  const title = "MiniSwimmer Academy Certificate";
  const description = "View my official swimming certification from MiniSwimmer Academy";
  
  // Verificar la imagen cuando el componente se monte
  useEffect(() => {
    if (id) {
      console.log("Verificando imagen:", imageUrl);
      fetch(imageUrl)
        .then(response => {
          if (!response.ok) {
            console.error(`Error de imagen: ${response.status}`);
          } else {
            console.log("Imagen accesible correctamente");
          }
        })
        .catch(error => console.error("Error al acceder a la imagen:", error));
    }
  }, [id, imageUrl]);

  if (!id) return <div>Loading...</div>;

  return (
    <>
      <Head>
        {/* Meta tags básicos */}
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Meta tags Open Graph esenciales */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        
        {/* Meta tags para imagen con todas las propiedades */}
        <meta property="og:image" content="https://images.prismic.io/miniswimmer-academy/Z9Mg3xsAHJWomg1H_certificacion.png" />
        <meta name="og:image" content="https://images.prismic.io/miniswimmer-academy/Z9Mg3xsAHJWomg1H_certificacion.png"></meta>
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MiniSwimmer Academy Certificate" />
        
        {/* Meta tags para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      
      {/* Contenido de la página */}
      <div className="certificate-container">
        {/* <h1>Certificate: {id}</h1> */}
        {/* <iframe src={pdfUrl} width="100%" height="900px" style={{border: 'none'}}/> */}
        <iframe 
          src={`/certificates/${id}.pdf`} 
          width="100%" 
          height="800px" 
          style={{border: 'none'}}
        />
        
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
// // pages/certificados/[id].js
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// export default function Certificado() {
//   const router = useRouter();
//   const { id } = router.query;
  
//   // URL del PDF basada en el ID
//   const pdfUrl = `/certificates/${id}.pdf`;
  
//   // Información para compartir en redes sociales
//   const title = `Certificado de ${id}`;
//   const description = `Visualiza mi certificado de ${id}`;
//   const imageUrl = `/certificates/preview/${id}.png`; // Una imagen previa del certificado

//   return (
//     <>
//       <Head>
//         {/* Meta tags básicos */}
//         <title>{title}</title>
//         <meta name="description" content={description} />
        
//         {/* Meta tags para Open Graph (Facebook, Instagram, LinkedIn) */}
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:image" content={`https://miniswimmer.academy/certificates/preview/${id}.png`} />
//         <meta property="og:image:type" content="image/png" />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:url" content={`https://miniswimmer.academy/certificates/${id}`} />
//         <meta property="og:type" content="website" />
        
//         {/* Meta tags específicos para Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//       </Head>
      
//       <div>
//         {/* <h1>Certificado: {id}</h1> */}
//         <iframe src={pdfUrl} width="100%" height="900px" style={{border: 'none'}}/>
        
//         {/* Botones para compartir */}
//         <div className="share-buttons">
//           <button onClick={() => shareTo('facebook')}>Compartir en Facebook</button>
//           <button onClick={() => shareTo('instagram')}>Compartir en Instagram</button>
//           <button onClick={() => shareTo('linkedin')}>Compartir en LinkedIn</button>
//         </div>
//       </div>
//     </>
//   );
  
  
// }