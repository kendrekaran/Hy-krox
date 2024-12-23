import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/90 backdrop-blur-sm z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-purple-400 text-xl sm:text-2xl font-bold flex items-center gap-2"
        >
          <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />
          HYKROX
        </motion.div>

        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Links for Large Screens */}
        <div className="hidden sm:flex gap-6">
          {['HOME', 'DESIGNS', 'SERVICES', 'ABOUT US', 'CONTACT US'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              whileHover={{ color: '#2DD4BF', y: -2 }}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden mt-4 bg-black/90 rounded-lg p-4 space-y-4"
        >
          {['HOME', 'DESIGNS', 'SERVICES', 'ABOUT US', 'CONTACT US'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              whileHover={{ color: '#2DD4BF', x: 5 }}
              className="block text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
