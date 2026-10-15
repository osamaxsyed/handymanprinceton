// FAQPage JSON-LD. Homepage only: other pages keep their visible FAQs but
// carry no FAQPage markup.
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
