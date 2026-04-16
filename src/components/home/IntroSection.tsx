export function IntroSection() {
  return (
    <section className="py-16 sm:py-32 px-6 sm:px-8 lg:px-16 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] mb-8">
        Not an Agency.
        <br />
        Your Advisor.
      </h2>

      <p className="font-editorial text-lg md:text-xl lg:text-[1.35rem] text-[var(--gray-600)] leading-loose">
        In a world of algorithms and automated responses, we offer something
        increasingly rare: a trusted advisor who understands your needs before
        you articulate them. Whether you&apos;re seeking a pied-à-terre in Mayfair,
        a family villa on the Palm, or a strategic investment in emerging
        markets — we handle it. Discreetly. Efficiently. Completely.
      </p>

      <div className="mt-12 pt-8 border-t border-[var(--gray-300)]">
        <span className="font-editorial italic text-[var(--gray-500)]">
          &ldquo;We don&apos;t show you listings. We present solutions.&rdquo;
        </span>
      </div>
    </section>
  );
}
