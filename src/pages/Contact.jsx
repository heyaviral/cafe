import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f2ea] pt-40">
        {/* Hero */}
        <section className="pb-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
              Contact
            </p>

            <h1 className="text-5xl md:text-7xl">
              We'd Love To Hear
              <br />
              From You
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Whether you're planning a visit, organizing a private event, or
              simply have a question, our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            {/* Left Side */}
            <div>
              <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
                Get In Touch
              </p>

              <h2 className="text-4xl md:text-5xl">
                Visit, Call, Or Send
                <br />A Message
              </h2>

              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <MapPin className="mt-1 text-[#C8A96B]" size={22} />

                  <div>
                    <h3 className="font-semibold">Address</h3>

                    <p className="mt-2 text-neutral-600">
                      Percy Heights
                      <br />
                      Gomti Nagar
                      <br />
                      Lucknow, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 text-[#C8A96B]" size={22} />

                  <div>
                    <h3 className="font-semibold">Phone</h3>

                    <p className="mt-2 text-neutral-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 text-[#C8A96B]" size={22} />

                  <div>
                    <h3 className="font-semibold">Email</h3>

                    <p className="mt-2 text-neutral-600">hello@aurelia.cafe</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 text-[#C8A96B]" size={22} />

                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>

                    <p className="mt-2 text-neutral-600">
                      Monday – Friday
                      <br />
                      8:00 AM – 10:00 PM
                      <br />
                      <br />
                      Saturday – Sunday
                      <br />
                      9:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Large Contact Number */}
              <div className="mt-16">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C8A96B]">
                  Need Immediate Assistance?
                </p>

                <p className="mt-4 text-3xl md:text-5xl">+91 98765 43210</p>
              </div>
            </div>

            {/* Right Side Form */}
            <div>
              <form className="rounded-[2rem] border border-black/10 bg-white p-8 md:p-10 shadow-sm">
                <h3 className="mb-8 text-3xl">Send A Message</h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-6 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
                />

                <textarea
                  rows={7}
                  placeholder="Your Message"
                  className="mt-6 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
                />

                <button
                  type="submit"
                  className="mt-8 rounded-full bg-[#2B1810] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
                Visit Aurelia
              </p>

              <h2 className="text-5xl">Find Us</h2>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 shadow-sm">
              <iframe
                title="Aurelia Location"
                src="https://maps.google.com/maps?q=Lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[500px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
