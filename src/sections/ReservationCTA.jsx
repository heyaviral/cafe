import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ReservationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#2B1810] py-40 text-white">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[180px] font-black text-white/[0.015]">AURELIA</h2>
      </div>
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96B] blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 uppercase tracking-[0.35em] text-[#C8A96B]"
        >
          Reserve Your Table
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl leading-tight"
        >
          Experience
          <br />
          Aurelia Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-white/70"
        >
          Join us for handcrafted coffee, artisan pastries, and an atmosphere
          designed for meaningful moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <button className="group flex items-center gap-2 rounded-full bg-[#C8A96B] px-8 py-4 text-lg font-medium transition hover:scale-105">
            Reserve Now
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 text-lg backdrop-blur-sm transition hover:bg-white/10">
            View Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
