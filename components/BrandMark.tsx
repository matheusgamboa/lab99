type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverted = false, compact = false }: BrandMarkProps) {
  return (
    <span
      className={`brand-mark${inverted ? " brand-mark--inverted" : ""}${compact ? " brand-mark--compact" : ""}`}
      aria-label="Lab99"
    >
      <span className="brand-mark__lab">LAB</span>
      <span className="brand-mark__number">99</span>
      <span className="brand-mark__notch" aria-hidden="true" />
    </span>
  );
}
