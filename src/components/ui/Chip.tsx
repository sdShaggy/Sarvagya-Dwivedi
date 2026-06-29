
interface ChipProps {
  children: React.ReactNode;
  mono?: boolean;
}

export default function Chip({ children, mono = true }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs border border-border bg-surface text-ink-soft whitespace-nowrap ${
        mono ? "font-mono" : "font-body"
      }`}
    >
      {children}
    </span>
  );
}
