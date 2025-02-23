export default function HamburgerMenu({
  isOpen,
  toggleMenu,
}: {
  isOpen?: boolean;
  toggleMenu: () => void;
}) {
  return (
    <button
      onClick={toggleMenu}
      className={`md:hidden w-11 h-11 shadow-lg rounded-md`}
    >
      {isOpen ? "open" : "closed"}
    </button>
  );
}
