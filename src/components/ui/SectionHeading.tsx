interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-display text-ink">
        {title}
      </h2>

      <div className="mt-3 h-px w-20 bg-border" />
    </div>
  );
}