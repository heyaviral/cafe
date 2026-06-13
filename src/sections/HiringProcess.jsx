import FadeReveal from "../components/FadeReveal";

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your application and tell us about yourself.",
  },
  {
    number: "02",
    title: "Interview",
    description: "Meet our team and discuss your experience and goals.",
  },
  {
    number: "03",
    title: "Trial Shift",
    description: "Experience a day at Aurelia and get to know the team.",
  },
  {
    number: "04",
    title: "Welcome",
    description:
      "Begin your journey with Aurelia and start creating memorable experiences.",
  },
];

export default function HiringProcess() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
              Hiring Process
            </p>

            <h2 className="text-5xl md:text-6xl">Your Journey Starts Here</h2>
          </div>
        </FadeReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeReveal key={step.number} delay={index * 0.15}>
              <div className="relative h-full rounded-[2rem] border border-black/10 bg-white p-8">
                <span className="text-5xl font-bold text-[#C8A96B]/30">
                  {step.number}
                </span>

                <h3 className="mt-6 text-2xl">{step.title}</h3>

                <p className="mt-4 leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </div>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
