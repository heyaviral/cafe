<section className="py-24">
  <div className="mx-auto max-w-5xl px-6">
    <div className="mb-16 text-center">
      <h2 className="text-5xl">Our Hiring Process</h2>
    </div>

    <div className="grid gap-8 md:grid-cols-4">
      {["Apply", "Interview", "Trial Shift", "Welcome"].map((step, index) => (
        <div key={step} className="rounded-[2rem] bg-white p-8 text-center">
          <div className="mb-4 text-4xl text-[#C8A96B]">{index + 1}</div>

          <h3>{step}</h3>
        </div>
      ))}
    </div>
  </div>
</section>;
