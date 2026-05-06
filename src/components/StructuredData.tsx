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
      { "@type": "City", "name": "Plainsboro Township", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "West Windsor", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Lawrence Township", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Montgomery Township", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Skillman", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Hopewell Borough", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Pennington", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Rocky Hill", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Kingston", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "South Brunswick", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "Robbinsville", "containedInPlace": { "@type": "State", "name": "New Jersey" } },
      { "@type": "City", "name": "East Windsor", "containedInPlace": { "@type": "State", "name": "New Jersey" } }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Handyman Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Remodeling",
            "description": "Complete kitchen renovations and upgrades"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Remodeling",
            "description": "Bathroom renovation and fixture installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Repairs",
            "description": "Home repair and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Work",
            "description": "Electrical repairs and installations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plumbing",
            "description": "Plumbing repairs and installations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carpentry",
            "description": "Custom carpentry and woodwork"
          }
        }
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you serve in New Jersey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Princeton, Plainsboro, West Windsor, Lawrence Township, Montgomery, Skillman, Hopewell Borough, Pennington, Rocky Hill, Kingston, South Brunswick, Robbinsville, and East Windsor in Central New Jersey."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully licensed, bonded, and insured for all handyman services in New Jersey. We carry comprehensive liability insurance and workers' compensation coverage for your protection."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free, no-obligation estimates for all projects. Contact us at (609) 516-0098 or through our website to schedule an estimate."
        }
      },
      {
        "@type": "Question",
        "name": "What types of services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive handyman services including kitchen remodeling, bathroom renovations, general home repairs, carpentry, electrical work, painting and finishing, flooring installation, and door and window services."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical kitchen remodel take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical kitchen remodel takes 2-4 weeks depending on the scope of work. Simple updates like cabinet installation and countertops take less time, while complete remodels with electrical and plumbing work take longer. We provide detailed timelines during the estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle emergency repairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer emergency repair services for urgent issues. Call us at (609) 516-0098 for immediate assistance with critical repairs."
        }
      }
    ]
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
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
