import Head from 'next/head';

const SEO = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": url,
            "name": title,
        })}
        </script>
    </Head>
  );
};

export default SEO;