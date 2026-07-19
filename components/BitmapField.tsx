export function BitmapField() {
  const dots = Array.from({ length: 120 }, (_, index) => {
    const column = index % 12;
    const row = Math.floor(index / 12);
    const distance = Math.hypot(column - 6.2, row - 4.2);
    const radius = Math.max(1.15, 4.9 - distance * 0.55);

    return (
      <circle
        key={index}
        cx={column * 22 + 11}
        cy={row * 22 + 11}
        r={radius}
      />
    );
  });

  return (
    <div className="bitmap-field" aria-hidden="true">
      <svg viewBox="0 0 280 260" preserveAspectRatio="xMidYMid meet">
        <g className="bitmap-field__dots">{dots}</g>
        <path className="bitmap-field__path" d="M18 214 86 146l47 31 70-104 57 27" />
        <rect className="bitmap-field__block bitmap-field__block--a" x="17" y="17" width="44" height="44" />
        <rect className="bitmap-field__block bitmap-field__block--b" x="213" y="191" width="49" height="49" />
        <path className="bitmap-field__cursor" d="m164 57 34 14-15 7-7 16Z" />
      </svg>
      <span className="bitmap-field__code">99.01 / SISTEMA VIVO</span>
    </div>
  );
}
