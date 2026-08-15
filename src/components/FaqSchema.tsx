// Per-page FAQPage JSON-LD. Safe against the duplicate-FAQPage GSC flag as long
// as every page passes its own unique FAQ set (never shared data across URLs).
const FaqSchema = ({ faqs }: { faqs: { question: string; answer: string }[] }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }),
    }}
  />
);

export default FaqSchema;
