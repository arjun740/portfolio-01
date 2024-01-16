export default function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-12 h-12 rounded-md fixed top-6 left-6 bg-transparent border-none cursor-pointer"
    >
      Toggle
    </button>
  );
}
