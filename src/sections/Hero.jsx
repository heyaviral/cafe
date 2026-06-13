import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Luxury Cafe"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 20,
            ease: "linear",
          }}
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black/45"
        />
      </div>

      {/* Giant Background Typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="select-none text-[140px] md:text-[260px] font-black tracking-[0.15em] text-white/[0.03]"
        >
          AURELIA
        </motion.h2>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-6 uppercase tracking-[0.45em] text-white/80"
            >
              Luxury Specialty Coffee
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] text-white"
            >
              Crafted
              <br />
              Coffee.
              <br />
              Unforgettable
              <br />
              Moments.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-white/80"
            >
              A refined café experience where specialty coffee, artisan
              pastries, and meaningful conversations come together.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="group rounded-full bg-[#C8A96B] px-8 py-4 text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                Explore Menu
              </button>

              <button className="rounded-full border border-white/30 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                Reserve Table
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">
            Scroll
          </span>

          <div className="h-10 w-[1px] bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
