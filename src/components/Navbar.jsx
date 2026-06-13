import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Careers", path: "/jobs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div
          className={`mx-auto mt-4 transition-all duration-500 ${
            scrolled ? "max-w-6xl px-4" : "max-w-7xl px-6"
          }`}
        >
          <div
            className={`
              flex items-center justify-between rounded-full px-6 py-4
              transition-all duration-500
              ${
                scrolled
                  ? "border border-white/20 bg-white/70 shadow-xl backdrop-blur-xl"
                  : "bg-transparent"
              }
            `}
          >
            <Link to="/" className="group">
              <div>
                <h1
                  className={`text-xl font-semibold tracking-[0.25em] transition-colors duration-500 ${
                    scrolled ? "text-[#111111]" : "text-white"
                  }`}
                >
                  AURELIA
                </h1>

                <p
                  className={`text-[10px] uppercase tracking-[0.35em] transition-colors duration-500 ${
                    scrolled ? "text-neutral-600" : "text-white/70"
                  }`}
                >
                  Artisan Café
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative transition hover:text-[#C8A96B] ${
                      isActive
                        ? "text-[#C8A96B]"
                        : scrolled
                          ? "text-[#111111]"
                          : "text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#C8A96B]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <button className="hidden rounded-full bg-[#2B1810] px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl md:block">
              Reserve Table
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden ${
                scrolled ? "text-[#111111]" : "text-white"
              }`}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-[70] flex h-dvh w-[85%] max-w-sm flex-col bg-[#F7F2EA] shadow-2xl"
            >
              <div className="relative flex items-center justify-between p-8">
                <div>
                  <h2 className="text-xl tracking-[0.25em]">AURELIA</h2>

                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Artisan Café
                  </p>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 hover:bg-black/5"
                >
                  <X size={28} />
                </button>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                  <span className="text-[120px] font-black tracking-widest text-black/[0.03]">
                    A
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center px-8">
                <nav className="space-y-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className="block text-3xl font-medium transition hover:text-[#C8A96B]"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="border-t border-black/10 p-8">
                <button className="w-full rounded-full bg-[#2B1810] px-6 py-4 text-white transition hover:scale-[1.02]">
                  Reserve Table
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
