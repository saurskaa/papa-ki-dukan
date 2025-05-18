import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Logo />
        <SearchBar />
        <NavLinks />
      </div>
    </nav>
  );
}
