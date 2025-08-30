import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-300 text-black px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-black font-bold">Aditya</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" onClick={closeMenu} className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="hover:text-gray-400">About</Link></li>
          <li><Link to="/skills" onClick={closeMenu} className="hover:text-gray-400">Skills</Link></li>
          <li><Link to="/projects" onClick={closeMenu} className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Hamburger icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-300 text-black px-6 pt-4 pb-6">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li><Link to="/" onClick={closeMenu} className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="hover:text-gray-400">About</Link></li>
            <li><Link to="/skills" onClick={closeMenu} className="hover:text-gray-400">Skills</Link></li>
            <li><Link to="/projects" onClick={closeMenu} className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
