const values = [
  {
    title: "Discretion First",
    description:
      "Your business is your business. We don't discuss clients, we don't share details, and we certainly don't post on social media. Some things should stay private.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "We work with a limited number of clients at any time. This isn't artificial scarcity — it's the only way to provide the attention you deserve.",
  },
  {
    title: "Long-Term Relationships",
    description:
      "We're not interested in one transaction. We build relationships that span decades, generations even. Your family becomes part of ours.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 px-8 lg:px-16 bg-[var(--cream)] text-center">
        <h1 className="text-4xl lg:text-5xl mb-6">The Consigliere</h1>
        <p className="font-editorial text-lg lg:text-xl italic text-[var(--gray-600)] max-w-2xl mx-auto">
          /kɒnsɪlˈjɛːreɪ/ — A trusted advisor. One who counsels and guides,
          operating with discretion and expertise.
        </p>
      </section>

      {/* Story */}
      <section className="py-24 px-8 lg:px-16 max-w-3xl mx-auto">
        <p className="font-editorial text-lg lg:text-xl text-[var(--gray-600)] leading-loose mb-8">
          The term comes from the Italian, famously associated with the trusted
          right hand of powerful families. But strip away the Hollywood drama,
          and you find something simple: a person who solves problems before
          they become problems. Someone who knows everyone worth knowing.
          Someone who gets things done.
        </p>
        <p className="font-editorial text-lg lg:text-xl text-[var(--gray-600)] leading-loose mb-8">
          We founded The Consigliere on a simple observation: wealthy
          individuals don&apos;t need another real estate agent showing them
          listings. They need an advisor who understands their world — the
          complexity of their finances, the demands on their time, and their
          need for absolute discretion.
        </p>
        <p className="font-editorial text-lg lg:text-xl text-[var(--gray-600)] leading-loose">
          We operate in London and Dubai because these are the markets we know
          intimately. Not from market reports, but from decades of living,
          working, and building relationships in these cities. When we say we
          can access off-market opportunities, we mean it. When we say your
          privacy is protected, we mean it.
        </p>
      </section>

      {/* Values */}
      <section className="py-24 px-8 lg:px-16 bg-[var(--charcoal)] text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl">Our Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-[1200px] mx-auto">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="text-2xl text-[var(--gold)] mb-4">{value.title}</h3>
              <p className="text-[var(--gray-400)] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
