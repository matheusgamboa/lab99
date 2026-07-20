import type { CSSProperties } from "react";

type FlickeringGridProps = {
  className?: string;
  columns?: number;
  rows?: number;
};

export function FlickeringGrid({
  className = "",
  columns = 26,
  rows = 18,
}: FlickeringGridProps) {
  const dots = Array.from({ length: columns * rows }, (_, index) => {
    const x = index % columns;
    const y = Math.floor(index / columns);
    const terrain = Math.max(0, y - (10 + Math.sin(x * 0.58) * 2.8 - x * 0.16));
    const strength = Math.min(1, 0.2 + terrain * 0.19 + ((x * 7 + y * 3) % 5) * 0.06);

    return (
      <span
        className="flickering-grid__dot"
        key={index}
        style={
          {
            "--dot-opacity": strength.toFixed(2),
            "--dot-delay": `${-((index * 83) % 3800)}ms`,
            "--dot-duration": `${3100 + ((x * 137 + y * 97) % 1900)}ms`,
          } as CSSProperties
        }
      />
    );
  });

  return (
    <div
      className={`flickering-grid ${className}`.trim()}
      style={{ "--grid-columns": columns } as CSSProperties}
      aria-hidden="true"
    >
      {dots}
    </div>
  );
}
