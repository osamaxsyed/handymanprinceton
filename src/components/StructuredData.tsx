import { Helmet } from "react-helmet";

const StructuredData = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://handymanprinceton.com",
    "name": "Princeton Handyman",
    "image": "https://handymanprinceton.com/logo.png",
    "logo": "https://handymanprinceton.com/logo.png",
    "url": "https://handymanprinceton.com",
    "telephone": "+16095160098",
    "email": "eastbrunswickhandyman@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 Sophie St",
      "addressLocality": "Parlin",
      "addressRegion": "NJ",
      "postalCode": "08859",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.3573,
      "longitude": -74.6672
    },
    "sameAs": [
      "https://maps.google.com/?cid=6589704069327590280"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "9",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Princeton", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "South Brunswick", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Cranbury", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Plainsboro Township", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "East Windsor", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "West Windsor", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Lawrence Township", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Robbinsville", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Pennington", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Montgomery Township", "containedInPlace": { "@type": "State", "name": "New Jersey" } }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Handyman Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Handyman Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpentry Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck Staining" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fence Repair" } }
      ]
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Princeton Handyman",
    "url": "https://handymanprinceton.com",
    "logo": "https://handymanprinceton.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+16095160098",
      "contactType": "customer service",
      "email": "eastbrunswickhandyman@gmail.com",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Princeton Handyman",
    "url": "https://handymanprinceton.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://handymanprinceton.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
