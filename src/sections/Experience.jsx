import { Coffee, Award, Sparkles } from "lucide-react";
import FadeReveal from "../components/FadeReveal";

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description:
      "Carefully sourced from renowned coffee-growing regions around the world.",
  },
  {
    icon: Award,
    title: "Expert Baristas",
    description:
      "Crafted by skilled professionals passionate about every cup they serve.",
  },
  {
    icon: Sparkles,
    title: "Elegant Ambience",
    description:
      "Designed to create moments of comfort, inspiration, and connection.",
  },
];

export default function Experience() {
  return (
    <FadeReveal>
      <section className="relative overflow-hidden bg-[#2B1810] py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
              The Aurelia Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">More Than Coffee</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Every detail is thoughtfully designed to create an unforgettable
              experience from the first sip to the final conversation.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96B]/50"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-[#C8A96B]/10 p-4">
                    <Icon size={32} className="text-[#C8A96B]" />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeReveal>
  );
}
