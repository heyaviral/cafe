import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

import OpenPositions from "../sections/OpenPositions";
import HiringProcess from "../sections/HiringProcess";
import JobApplicationForm from "../sections/JobApplicationForm";

export default function Jobs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Do I need prior café experience?",
      answer:
        "Not necessarily. We value curiosity, enthusiasm, and a willingness to learn just as much as previous experience.",
    },
    {
      question: "Do you provide training?",
      answer:
        "Yes. Every new team member receives structured onboarding and hands-on training to help them succeed.",
    },
    {
      question: "Are part-time positions available?",
      answer:
        "Depending on our current hiring needs, both full-time and part-time opportunities may be available.",
    },
    {
      question: "How long does the hiring process take?",
      answer:
        "Most applicants receive an update within one to two weeks after submitting their application.",
    },
    {
      question: "Can I apply for multiple positions?",
      answer:
        "Absolutely. If you believe you're a good fit for more than one role, feel free to indicate that in your application.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f2ea] pt-40">
        {/* Page Heading */}
        <section className="px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
              Careers
            </p>

            <h1 className="text-5xl md:text-7xl">Join The Team</h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Build meaningful experiences with a team passionate about
              hospitality, craftsmanship, and excellence.
            </p>
          </div>
        </section>

        <OpenPositions />

        <HiringProcess />

        <JobApplicationForm />

        {/* FAQ Section */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-16 text-center">
              <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
                Frequently Asked Questions
              </p>

              <h2 className="text-4xl md:text-6xl">
                Questions? We've Got Answers.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-8 text-left"
                    >
                      <h3 className="text-lg font-medium md:text-xl">
                        {faq.question}
                      </h3>

                      <ChevronDown
                        size={22}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-black/10 px-8 py-6">
                          <p className="leading-relaxed text-neutral-600">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
