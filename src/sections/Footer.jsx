import { Camera, Globe, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1E120C] text-white">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl tracking-[0.25em]">AURELIA</h2>

            <p className="mt-6 leading-relaxed text-white/70">
              A refined café experience where exceptional coffee, artisan
              pastries, and meaningful conversations come together.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#C8A96B]"
              >
                <Camera size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#C8A96B]"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#C8A96B]"
              >
                <MapPin size={18} />
              </a>
              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#C8A96B]"
              >
                <Phone size={18} />
              </a>
              {/* <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#C8A96B]"
              >
                <Mail size={18} />
              </a> */}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-medium">Navigation</h3>

            <ul className="space-y-4 text-white/70">
              <li>
                <Link to="/" className="hover:text-[#C8A96B]">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/menu" className="hover:text-[#C8A96B]">
                  Menu
                </Link>
              </li>

              <li>
                <Link to="/jobs" className="hover:text-[#C8A96B]">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#C8A96B]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 text-lg font-medium">Opening Hours</h3>

            <div className="space-y-4 text-white/70">
              <p>
                Mon – Fri
                <br />
                8:00 AM – 10:00 PM
              </p>

              <p>
                Sat – Sun
                <br />
                9:00 AM – 11:00 PM
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-medium">Contact</h3>

            <div className="space-y-5 text-white/70">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 text-[#C8A96B]" />
                <p>
                  Percy Heights
                  <br />
                  Gomti Nagar
                </p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-[#C8A96B]" />
                <p>+91 9876543210</p>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-[#C8A96B]" />
                <p>hello@aurelia.cafe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>© 2026 Aurelia. All rights reserved.</p>

          <p>Crafted with care and attention to detail.</p>
        </div>
      </div>
    </footer>
  );
}
