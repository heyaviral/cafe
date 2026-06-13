import FadeReveal from "../components/FadeReveal";

export default function BrandStory() {
  return (
    <FadeReveal>
      <section className="bg-[#f7f2ea] py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Coffee brewing"
                className="h-[650px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
                Our Story
              </p>

              <h2 className="mb-8 text-5xl font-bold leading-tight">
                Every Cup Begins
                <br />
                With Intention
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-neutral-700">
                At Aurelia, coffee is more than a beverage. It is a ritual, a
                craft, and a moment of pause in a fast-moving world.
              </p>

              <p className="text-lg leading-relaxed text-neutral-700">
                We source exceptional beans from renowned coffee-growing regions
                and roast them in small batches to preserve their unique
                character. Every detail, from the first aroma to the final sip,
                is designed to create an unforgettable experience.
              </p>
            </div>
          </div>

          <div className="mt-24 grid gap-8 text-center md:grid-cols-3">
            <div>
              <h3 className="text-5xl font-bold text-[#2B1810]">10+</h3>
              <p className="mt-2 text-neutral-600">Years of Excellence</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#2B1810]">25K+</h3>
              <p className="mt-2 text-neutral-600">Guests Served</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#2B1810]">15+</h3>
              <p className="mt-2 text-neutral-600">Signature Drinks</p>
            </div>
          </div>
        </div>
      </section>
    </FadeReveal>
  );
}
