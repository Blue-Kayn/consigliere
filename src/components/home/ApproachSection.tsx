const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "We begin by understanding not just what you want, but why. Your goals inform our strategy.",
  },
  {
    number: "02",
    title: "Curate",
    description:
      "We present only properties that meet your criteria — typically 3-5 options, not 50 listings.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "From viewing to completion, we handle every detail. You make decisions; we make them happen.",
  },
  {
    number: "04",
    title: "Protect",
    description:
      "Your privacy is paramount. Transactions remain confidential. Relationships last decades.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-[var(--charcoal)] text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-[2.5rem] mb-4">
          The Consigliere Approach
        </h2>
        <p className="text-[var(--gray-400)]">
          Discretion, expertise, and results — in that order
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-[1200px] mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="text-center p-8">
            <div className="font-serif text-4xl lg:text-5xl text-[var(--gold)] mb-6">
              {step.number}
            </div>
            <h4 className="font-serif text-base tracking-[0.1em] mb-4">
              {step.title}
            </h4>
            <p className="text-sm text-[var(--gray-400)] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
