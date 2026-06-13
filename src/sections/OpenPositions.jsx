import { useState } from "react";
import { ChevronDown } from "lucide-react";
import jobsData from "../data/jobsData";

export default function OpenPositions() {
  const [openJob, setOpenJob] = useState(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
            Opportunities
          </p>

          <h2 className="text-5xl">Open Positions</h2>
        </div>

        <div className="space-y-4">
          {jobsData.map((job) => {
            const isOpen = openJob === job.id;

            return (
              <div
                key={job.id}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-white"
              >
                <button
                  onClick={() => setOpenJob(isOpen ? null : job.id)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <div>
                    <h3 className="text-2xl">{job.title}</h3>

                    <p className="mt-2 text-neutral-500">
                      {job.location} • {job.type}
                    </p>
                  </div>

                  <ChevronDown
                    className={`transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-black/10 px-8 py-8">
                    <p className="mb-8 text-neutral-600">{job.description}</p>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 font-semibold">Responsibilities</h4>

                        <ul className="space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-4 font-semibold">Requirements</h4>

                        <ul className="space-y-2">
                          {job.requirements.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="mt-8 rounded-full bg-[#2B1810] px-6 py-3 text-white transition hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
