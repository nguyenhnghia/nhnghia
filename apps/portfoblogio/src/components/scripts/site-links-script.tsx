export default function SiteLinksScript(): JSX.Element {
  const markupData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://tiemchunglongchau.com.vn",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://tiemchunglongchau.com.vn/tim-kiem?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      id="site-links-search-box-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(markupData),
      }}
    ></script>
  );
}
