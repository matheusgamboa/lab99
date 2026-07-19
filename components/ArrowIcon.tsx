type ArrowIconProps = {
  direction?: "right" | "down" | "up-right";
};

export function ArrowIcon({ direction = "right" }: ArrowIconProps) {
  return (
    <svg
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}
