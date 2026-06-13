import { ArrowUpRight } from "lucide-react";
import signatureDrinks from "../data/signatureDrinks";
import FadeReveal from "../components/FadeReveal";

export default function SignatureCollection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2ea] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Background Text */}
        <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2">
          <h2 className="text-[120px] md:text-[220px] font-black text-black/[0.03] tracking-widest">
            COLLECTION
          </h2>
        </div>

        {/* Heading */}
        <FadeReveal>
          <div className="relative z-10 mb-20 text-center">
            <p className="mb-4 uppercase tracking-[0.35em] text-[#C8A96B]">
              Signature Collection
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Our Most Loved
              <br />
              Creations
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Thoughtfully crafted beverages that define the Aurelia experience.
            </p>
          </div>
        </FadeReveal>

        {/* Drinks Grid */}
        <FadeReveal>
          <div className="grid gap-8 md:grid-cols-2">
            {signatureDrinks.map((drink, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-semibold">{drink.name}</h3>

                    <ArrowUpRight
                      size={24}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </div>

                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    {drink.description}
                  </p>

                  <div className="mt-6 inline-block rounded-full bg-[#f5f1ea] px-4 py-2 text-sm tracking-wide text-[#2B1810]">
                    {drink.notes}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
