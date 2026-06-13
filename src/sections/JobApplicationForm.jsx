export default function JobApplicationForm() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
            Apply Today
          </p>

          <h2 className="text-5xl md:text-6xl">Join Our Team</h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            We'd love to learn more about you. Fill out the form below and we'll
            be in touch.
          </p>
        </div>

        <form className="rounded-[2rem] border border-black/10 bg-white p-8 md:p-12 shadow-sm">
          {/* Row 1 */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Position Applying For
              </label>

              <select className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]">
                <option>Barista</option>
                <option>Shift Supervisor</option>
                <option>Pastry Chef</option>
                <option>Guest Experience Associate</option>
              </select>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Years of Experience
            </label>

            <input
              type="text"
              placeholder="e.g. 2 years"
              className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Why Would You Like To Join Aurelia?
            </label>

            <textarea
              rows={6}
              placeholder="Tell us a little about yourself..."
              className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#C8A96B]"
            />
          </div>

          {/* Resume Upload */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Upload Resume
            </label>

            <input
              type="file"
              className="w-full rounded-2xl border border-black/10 px-5 py-4 file:mr-4 file:rounded-full file:border-0 file:bg-[#2B1810] file:px-4 file:py-2 file:text-white"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 rounded-full bg-[#2B1810] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
