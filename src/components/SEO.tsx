import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
}

const SEO = ({
  title = "Princeton Handyman | Home Improvement Contractor",
  description = "Licensed NJ home improvement contractor in Princeton. Bathroom remodels, kitchen remodels, aging-in-place, ADUs, and trusted home repairs. NJ HIC #13VH13918800.",
  canonical,
  ogImage = "https://handymanprinceton.com/og-image.jpg",
  keywords
}: SEOProps) => {
  const baseUrl = "https://handymanprinceton.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Princeton Handyman" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Princeton Handyman - Professional Home Repair Services" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Princeton Handyman - Professional Home Repair Services" />
    </Helmet>
  );
};

export default SEO;
