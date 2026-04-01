import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="py-40 px-8 lg:px-16 text-white text-center relative"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80') center/cover fixed`,
      }}
    >
      <h2 className="text-3xl lg:text-5xl mb-6">Ready to Talk?</h2>
      <p className="font-editorial text-lg lg:text-xl max-w-xl mx-auto mb-10 opacity-90">
        Tell us what you&apos;re looking for. A member of our team will be in touch
        within 24 hours.
      </p>
      <Link href="/contact" className="btn btn-gold">
        Request a Consultation
      </Link>
    </section>
  );
}
