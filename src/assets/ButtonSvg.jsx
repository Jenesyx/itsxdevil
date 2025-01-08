const ButtonSvg = () => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill="none" // No background
        stroke="black" // Black border
        strokeWidth="2"
        d="M21,43 L1,43 L1,1 L21,1" // Sharp rectangle border
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
    >
      <rect
        x="0"
        y="0"
        width="100"
        height="44"
        fill="none" // No background
        stroke="black" // Black border
        strokeWidth="2"
      />
    </svg>
    <svg
      className="absolute top-0 right-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill="none" // No background
        stroke="black" // Black border
        strokeWidth="2"
        d="M0,43 L20,43 L20,1 L0,1" // Sharp rectangle border
      />
    </svg>
  </>
);

export default ButtonSvg;
