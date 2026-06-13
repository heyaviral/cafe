import testimonials from "../data/testimonials";
import FadeReveal from "../components/FadeReveal";

export default function Testimonials() {
  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section className="bg-[#f7f2ea] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeReveal>
          <div className="text-center mb-20">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
              Testimonials
            </p>

            <h2 className="text-5xl md:text-6xl">Loved By Our Guests</h2>
          </div>
        </FadeReveal>

        {/* Featured */}
        <FadeReveal>
          <div className="rounded-[2rem] bg-white p-12 md:p-20 shadow-sm">
            <div className="mb-8 text-[#C8A96B] text-2xl">★★★★★</div>

            <blockquote className="text-3xl md:text-4xl leading-relaxed">
              "{featured.review}"
            </blockquote>

            <div className="mt-10">
              <h4 className="font-semibold text-xl">{featured.name}</h4>

              <p className="text-neutral-500">{featured.role}</p>
            </div>
          </div>
        </FadeReveal>

        {/* Supporting Reviews */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {others.map((review, index) => (
            <FadeReveal key={index} delay={index * 0.2}>
              <div className="rounded-[2rem] bg-white p-10 shadow-sm">
                <div className="mb-6 text-[#C8A96B]">★★★★★</div>

                <p className="text-lg leading-relaxed">"{review.review}"</p>

                <div className="mt-8">
                  <h4 className="font-semibold">{review.name}</h4>

                  <p className="text-neutral-500">{review.role}</p>
                </div>
              </div>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
