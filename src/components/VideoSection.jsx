export default function VideoSection() {
  return (
    <section
      className="w-full bg-black flex items-center justify-center cursor-pointer"
      style={{ height: '800px' }}
    >
      <button className="opacity-70 hover:opacity-100 transition-opacity">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="2" />
          <path
            d="M31 26L57 40L31 54V26Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
