import AnimatedSection from "@/components/shared/AnimatedSection";

const WHATSAPP_NUMBER = "923277814489";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like to know more about Bagh-e-Khas. Please share your latest fruit availability and offers."
);

export default function Newsletter() {
  return (
    <AnimatedSection
      id="newsletter"
      className="border-t border-[#ded5c6] bg-[#f1e5cf] py-20 md:py-24"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
          Get in Touch
        </p>
        <h2
          id="newsletter-heading"
          className="mb-4 text-4xl font-semibold leading-[1.02] text-brand-text md:text-6xl"
        >
          Ask what is freshest today.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-[#62584c] md:text-lg">
          Message our team for current seasonal availability, gifting guidance,
          corporate quotes, or a family fruit box recommendation.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center gap-3 rounded-card bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#1ebe5d] hover:shadow-lg active:bg-[#17a84f]"
          aria-label="Connect on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current shrink-0"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with us on WhatsApp
        </a>

        <p className="mt-5 text-xs text-[#766b5f]">
          WhatsApp Number: +92 327 781 4489
        </p>
      </div>
    </AnimatedSection>
  );
}
