export default function EditorialBlock({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment = {
    center: "mx-auto text-center",
    left: "text-left",
    right: "ml-auto text-right",
  };

  return (
    <div className={`max-w-3xl ${alignment[align]}`}>
      {eyebrow && (
        <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A96B]">
          {eyebrow}
        </p>
      )}

      <h3 className="mb-6 text-4xl">{title}</h3>

      <p className="text-lg leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
}
